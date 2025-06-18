"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../components/Layout';

const Access = () => {
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Instead of sending a POST request, redirect to the contact page
        window.location.href = '/contact';
    };

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">24/7 Access</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">About Our Twenty-Four Hour Seven Days Per Week Access</h2>
                <p className="mb-4">
                The gym that never sleeps. Come experience the power of 24/7 fitness.
                </p>
                <h2 className="text-xl font-semibold mb-2">Sign Up Today</h2>
                <p>
                When everyone else is sleeping, you can be working out. Discover 24/7 gym access. We're not your average gym. We're here for you, always. Welcome to 24/7 fitness by Beach Bodies By Bodies.
                </p>
            </div>
            <div>
                <h2>24/7 Access</h2>
                <p>Our facilities are open 24 hours a day, 7 days a week. Complete the form below to request access.</p>
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

export default Access;