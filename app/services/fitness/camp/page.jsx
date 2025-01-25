"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../components/Layout';

const Camp = () => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/boxing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Thank You. We Will Be With You Soon.");
            router.push('../../partnerships');
        } else {
            alert("There was an error submitting the form.");
        }
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Boot Camp/Booking</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About Our Boot Camp</h2>
                <p className="mb-4">
                Transform your body and mind with our dynamic and challenging boot camp program. Experience the power of high-intensity workouts combined with a variety of exercises, including functional movements, interval training, and strength exercises, in a structured and motivating environment. You'll be guided by expert instructors, supported by a strong and encouraging community, and pushed to reach your full potential. Whether you want to burn fat, improve endurance, build strength, or just be part of a team that strives for better health, our boot camp program is designed to help you achieve all of your fitness goals.
                </p>
                <h2 className="text-xl font-semibold mb-2">Take the First Step to a Healthier You</h2>
                <p>
                Ready to challenge yourself, experience the power of community, and achieve remarkable results? Sign up for our boot camp today by filling out the form below. We're excited to welcome you to our gym and to help you begin your fitness journey!
                </p>
            </div>
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div>
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </form>
        </Layout>
    );
}

export default Camp;