export const dynamic = "force-static";
export const revalidate = 0;

import pool from '../../lib/mariadb';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const page = parseInt(searchParams.get("page") || 1);
    const limit = parseInt(searchParams.get("limit") || 10);
    const skip = (page - 1) * limit;

    let conn;
    try {
        conn = await pool.getConnection();
        
        // Search in testimonials
        const testimonials = await conn.query(
            "SELECT id, client_name AS title, testimonial AS content, date FROM testimonials WHERE MATCH (testimonial) AGAINST (? IN NATURAL LANGUAGE MODE) LIMIT ? OFFSET ?",
            [query, limit, skip]
        );

        // Search in services
        const services = await conn.query(
            "SELECT id, name AS title, description AS content, date FROM services WHERE MATCH (description) AGAINST (? IN NATURAL LANGUAGE MODE) LIMIT ? OFFSET ?",
            [query, limit, skip]
        );

        // Search in articles
        const articles = await conn.query(
            "SELECT id, title, content, date FROM articles WHERE MATCH (content) AGAINST (? IN NATURAL LANGUAGE MODE) LIMIT ? OFFSET ?",
            [query, limit, skip]
        );

        const results = [...testimonials, ...services, ...articles];

        const totalResults = results.length;
        const totalPages = Math.ceil(totalResults / limit);

        return NextResponse.json({ results, totalPages }, { status: 200 });

    } catch (error) {
        console.error('Error with search API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    } finally {
        if (conn) conn.release();
    }
}