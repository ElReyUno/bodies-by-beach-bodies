export const dynamic = "force-static";
export const revalidate = 0;

import pool from '../../lib/mariadb';
import { NextResponse } from 'next/server';

export async function GET() {
    let conn;
    try {
        conn = await pool.getConnection();
        const testimonials = await conn.query("SELECT id, client_name AS title, testimonial AS content, date FROM testimonials ORDER BY date DESC");
        return NextResponse.json(testimonials, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        if (conn) conn.release();
    }
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