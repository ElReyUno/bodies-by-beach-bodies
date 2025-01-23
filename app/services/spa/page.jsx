"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const Spa = () => {
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
            <h1 className="text-2xl font-bold mb-4">Spa Services/Booking</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About Our Spa Services</h2>
                <p className="mb-4">
                    Our spa services are designed to provide you with the ultimate relaxation and rejuvenation experience. From massages and facials to body treatments and aromatherapy, our skilled therapists will help you unwind and feel your best. Whether you're looking to relieve stress, improve your skin, or simply pamper yourself, our spa has something for everyone.
                </p>
                <h2 className="text-xl font-semibold mb-2">Sign Up Today</h2>
                <p>
                    Ready to indulge in our luxurious spa services? Fill out the form below to book your appointment. We look forward to helping you relax and rejuvenate.
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

export default Spa;