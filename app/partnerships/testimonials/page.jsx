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

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Bodies By Beach Bodies Testimonials</h1>

            {/* Testimonial Post Display */}
            {testimonialPosts.map(post => (
                <div key={post.id} className="mb-8 p-4 border rounded-md shadow-sm w-full">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
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