"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const Testimonials = () => {
    const router = useRouter();
    const [testimonialPosts, setTestimonialPosts] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/testimonials');
                const data = await response.json();
                setTestimonialPosts(data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    // --- Static testimonials for static export demonstration ---
    const staticTestimonialPosts = [
        {
            id: 1,
            title: "Life-Changing Experience!",
            content: "Joining Bodies By Beach Bodies was the best decision I ever made for my health! The trainers are incredibly knowledgeable and supportive, and the variety of classes kept me motivated. I’ve never felt stronger or more confident. The community here truly feels like family!",
            author: "Sarah M.",
            date: "2025-06-13"
        },
        {
            id: 2,
            title: "Exceeded My Expectations",
            content: "Bodies By Beach Bodies transformed my approach to fitness and wellness. The personalized attention and holistic programs helped me achieve results I never thought possible. From the spa services to the boot camps, every experience exceeded my expectations. Highly recommended!",
            author: "James T.",
            date: "2025-06-13"
        }
    ];
    // --- End static testimonials ---

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Bodies By Beach Bodies Testimonials</h1>

            {/* API testimonials if available */}
            {testimonialPosts.length > 0 && (
                <>
                    <h2 className="text-lg font-semibold mb-2">Live API Testimonials</h2>
                    {testimonialPosts.map(post => (
                        <div key={post.id} className="mb-8 p-4 border rounded-md shadow-sm w-full">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.content}</p>
                            <div className="text-sm text-gray-500">
                                <span>By: {post.author}</span> | <span>Date: {post.date}</span>
                            </div>
                        </div>
                    ))}
                </>
            )}

            {/* Static testimonials always visible for static export */}
            <h2 className="text-lg font-semibold mb-2">Static Testimonials (for static export)</h2>
            {staticTestimonialPosts.map(post => (
                <div key={post.id} className="mb-8 p-4 border rounded-md shadow-sm w-full">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="text-sm text-gray-500">
                        <span>By: {post.author}</span> | <span>Date: {post.date}</span>
                    </div>
                </div>
            ))}
        </Layout>
    );
}

export default Testimonials;