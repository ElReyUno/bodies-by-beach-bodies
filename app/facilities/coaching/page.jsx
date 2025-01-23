"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const Coaching = () => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Thank You. We Will Be With You Soon.");
            router.push('../partnerships');
        } else {
            alert("There was an error submitting the form.");
        }
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Online Coaching/Booking</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About Our Online Coaching Services</h2>
                <p className="mb-4">
                    Our online coaching services are designed to help you achieve your fitness goals from the comfort of your home. Our experienced coaches provide personalized workout plans, nutrition guidance, and ongoing support to ensure you stay on track. Whether you're looking to lose weight, build muscle, or improve your overall fitness, our online coaching program can help you achieve your goals.
                </p>
                <h2 className="text-xl font-semibold mb-2">Sign Up Today</h2>
                <p>
                    Ready to start your journey to better health? Fill out the form below to book your online coaching session. We look forward to helping you achieve your health and wellness goals.
                </p>
            </div>
            <div>
                <h2>24/7 Access</h2>
                <p>Our online coaching platform is available 24 hours a day, 7 days a week. Complete the form below to request access.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="membership" className="block text-sm font-medium text-gray-700">Membership ID</label>
                        <input type="text" name="membership" id="membership" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Request Access
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Coaching;