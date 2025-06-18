export const dynamic = "force-static";
export const revalidate = 0;

export async function GET(request) {
    return new Response('Boxing Page', {
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

    return new Response('Form submitted successfully', {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}