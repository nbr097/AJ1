interface Env {
    RESEND_API_KEY: string;
    MAIL_TO: string;
    ASSETS: { fetch: (request: Request) => Promise<Response> };
}

export default {
    async fetch(request: Request, env: Env, _ctx: any): Promise<Response> {
        const url = new URL(request.url);

        // API Route for sending quote
        // Allow matching with or without trailing slash
        if (request.method === 'POST' && (url.pathname === '/api/send-quote' || url.pathname === '/api/send-quote/')) {
            try {
                const formData = await request.json() as any;

                // Basic validation
                if (!formData.email || !formData.name) {
                    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                        status: 400,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }

                const htmlContent = `
                    <h2>New Quote Request</h2>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Phone:</strong> ${formData.phone}</p>
                    <hr />
                    <h3>Move Details</h3>
                    <p><strong>Type:</strong> ${formData.moveType}</p>
                    <p><strong>Date:</strong> ${formData.date}</p>
                    <p><strong>Pickup:</strong> ${formData.pickup}</p>
                    <p><strong>Dropoff:</strong> ${formData.dropoff}</p>
                    <hr />
                    <h3>Inventory</h3>
                    <pre>${formData.inventory}</pre>
                `;

                const res = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: 'AJ Smart Move <onboarding@resend.dev>',
                        to: env.MAIL_TO || 'nicho.brown2@gmail.com',
                        subject: `Quote Request from ${formData.name}`,
                        html: htmlContent,
                        reply_to: formData.email
                    })
                });

                if (!res.ok) {
                    const errorText = await res.text();
                    console.error('Resend API Error:', errorText);
                    throw new Error(`Resend API Error: ${res.statusText}`);
                }

                const data = await res.json();

                return new Response(JSON.stringify({ success: true, data }), {
                    headers: { 'Content-Type': 'application/json' }
                });

            } catch (error: any) {
                console.error('Worker Error:', error);
                return new Response(JSON.stringify({ error: error.message || 'Failed to send email' }), {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
        }

        // Health check
        if (url.pathname === '/api/health') {
            return new Response(JSON.stringify({ status: 'ok', architecture: 'worker' }), {
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Serve static assets (React App)
        // If env.ASSETS is fetchable, use it. Otherwise, return 404 or handle fallback.
        if (env.ASSETS) {
            return env.ASSETS.fetch(request);
        }

        return new Response('Not Found', { status: 404 });
    }
};
