export async function GET(request) {
    return new Response('Blog Page', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}

export async function POST(request) {
    const data = await request.json();
    // Handle form submission, e.g., save data to a database or send an email
    console.log('Form data:', data);

    return new Response('Blog post submitted successfully', {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}