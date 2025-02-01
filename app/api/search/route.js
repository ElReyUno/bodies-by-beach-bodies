import connectDB from '../../utils/db';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import Post from '../../../models/Post';

// Use .env variable
mongoose.connect(process.env.MONGODB_URI);

export async function GET(request) { // export the GET method
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")
    const page = parseInt(searchParams.get("page") || 1);
    const limit = parseInt(searchParams.get("limit") || 10);
    const skip = (page - 1) * limit;
    try {
        const results = await Post.find({
            $text: { $search: query },
        })
            .skip(parseInt(skip))
            .limit(parseInt(limit));


        const totalResults = await Post.countDocuments({ $text: { $search: query } })
        const totalPages = Math.ceil(totalResults / limit)

        return NextResponse.json({ results, totalPages }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Error with search' }, { status: 500 });
    }

}