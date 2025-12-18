export const onRequest = async () => {
    return new Response(JSON.stringify({ status: 'ok', architecture: 'pages_functions' }), {
        headers: { 'Content-Type': 'application/json' }
    });
};
