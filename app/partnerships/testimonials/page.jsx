"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const Testimonials = () => {
    const router = useRouter();
    const [testimonialPosts, setTestimonialPosts] = useState([
        {
            id: 1,
            title: "Finally Found My Fitness Home!",
            content: "I've bounced around gyms for years, never finding one that felt like a good fit. Bodies By Beach Bodies is different! The trainers are incredibly supportive and knowledgeable, always pushing me to achieve my goals. I especially love the group classes: they're a fun and motivating way to stay on track. I've lost 20 pounds and feel stronger than ever!",
            author: "Maria Rodriguez",
            date: "2025-02-10",
        },
        {
            id: 2,
            title: "From Zero to Gym Hero - Thanks, BBBB!",
            content: "Before joining Bodies By Beach Bodies I was intimidated by the thought of going to the gym. I was completely out of shape and didn't know where to start. The coaches at BBBB made me feel comfortable and helped me build a personalized workout plan that I could actually stick with. They taught me proper form and helped me gain confidence. Now, I actually look forward to my workouts!",
            author: "David Chen",
            date: "2024-04-01",
        },
    ]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Create a new testimonial object
        const newTestimonialPost = {
            id: testimonialPosts.length + 1, // Simple ID generator
            title: data.title,
            content: data.message,
            author: data.name,
            date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        };

        // Update the testimonialPosts state with the new testimonial post at the top
        setTestimonialPosts([newTestimonialPost, ...testimonialPosts]);

        //   Send the data to the backend to store it
        const response = await fetch('/api/testimonials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Thanks For Testifying.");
            router.push('/partnerships/testimonials');
        } else {
            alert("There was an error submitting the form.");
        }
    };

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

            {/* Testimonial Creation Form */}
            <div className="mt-8 w-full">
                <h2 className="text-xl font-semibold mb-4">Create a New Testimonial</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" name="title" id="title" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Testimonial</label>
                        <textarea name="message" id="message" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Testimonials;