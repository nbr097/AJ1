interface Env {
    RESEND_API_KEY: string;
    MAIL_TO: string;
}

export const onRequestPost = async (context: any) => {
    try {
        const { request, env } = context;
        const formData = await request.json() as any;

        // Basic validation
        if (!formData.email || !formData.name || !formData.signature) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #d32f2f;">AJ Smart Move - Signed Terms & Conditions</h2>
                <p>Dear ${formData.name},</p>
                <p>Thank you for signing our Terms & Conditions. A copy of your signature is included below for your records.</p>
                
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <p><strong>Signed Date:</strong> ${new Date(formData.timestamp).toLocaleString()}</p>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Signature:</strong> (See attached file)</p>
                    </div>
                </div>

                <p>You can view the full text of the Terms & Conditions on our website at <a href="https://ajsmartmove.com.au/terms">ajsmartmove.com.au/terms</a>.</p>
                
                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
                
                <p style="color: #666; font-size: 12px;">
                    AJ Smart Move Pty Ltd<br>
                    Ph: 0424 067 850<br>
                    Email: nicho.brown2@gmail.com
                </p>
            </div>
        `;

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'AJ Smart Move <onboarding@resend.dev>',
                to: [formData.email],
                bcc: [env.MAIL_TO || 'nicho.brown2@gmail.com'],
                subject: `Signed Terms & Conditions - ${formData.name}`,
                html: htmlContent,
                reply_to: env.MAIL_TO || 'nicho.brown2@gmail.com',
                attachments: [
                    {
                        filename: 'signature.png',
                        content: formData.signature.split(',')[1], // Remove data URL prefix
                    }
                ]
            })
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error('Resend API Error Body:', errorText);
            console.log('Resend Key Present:', !!env.RESEND_API_KEY);
            throw new Error(`Resend API Error: ${res.status} ${res.statusText} - ${errorText}`);
        }

        const data = await res.json();

        return new Response(JSON.stringify({ success: true, data }), {
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error('Function Error:', error);
        return new Response(JSON.stringify({ error: error.message || 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
