"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const Blog = () => {
    const router = useRouter();
    const [blogPosts, setBlogPosts] = useState([
        {
            id: 1,
            title: "The Power of Consistent Training",
            content: "Consistency is the key to success in any fitness journey. Whether you're aiming to build muscle, lose weight, or improve your overall health, regular workouts will yield the best results. At Bodies By Beach Bodies, we emphasize the importance of sticking to a routine and listening to your body. Remember, progress takes time, and every small effort counts toward your goals.",
            author: "Coach Chrissy",
            date: "2025-01-23",
        },
        {
            id: 2,
            title: "Nutrition: Fueling Your Fitness Goals",
            content: "Proper nutrition is the foundation of any effective fitness program. Eating a balanced diet that provides your body with the necessary nutrients is crucial for energy, recovery, and overall health. Our trainers can help you develop a personalized meal plan tailored to your individual goals and needs. Remember, a healthy diet combined with regular exercise is the perfect recipe for success.",
            author: "Nutrition Expert Titan",
            date: "2024-03-15",
        },
    ]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Create a new blog post object
        const newBlogPost = {
            id: blogPosts.length + 1, // Simple ID generator
            title: data.title,
            content: data.message,
            author: data.name,
            date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        };

        // Update the blogPosts state with the new blog post at the top
        setBlogPosts([newBlogPost, ...blogPosts]);

        //   Send the data to the backend to store it
        const response = await fetch('/api/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Thanks For Sharing.");
            router.push('/partnerships/blog');
        } else {
            alert("There was an error submitting the form.");
        }
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Bodies By Beach Bodies Blog</h1>

            {/* Blog Post Display */}
            {blogPosts.map(post => (
                <div key={post.id} className="mb-8 p-4 border rounded-md shadow-sm w-full">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="text-sm text-gray-500">
                        <span>By: {post.author}</span> | <span>Date: {post.date}</span>
                    </div>
                </div>
            ))}

            {/* Blog Creation Form */}
            <div className="mt-8 w-full">
                <h2 className="text-xl font-semibold mb-4">Create a New Blog Post</h2>
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
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Blog Post</label>
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

export default Blog;