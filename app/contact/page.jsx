"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../components/Layout';

const Contact = () => {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        // Save to localStorage
        localStorage.setItem('contactForm', JSON.stringify(data));
        alert("Thank You. Your message has been saved locally.");
        // Redirect to the partnerships page
        window.location.href = '/bodies-by-beach-bodies/partnerships';
        // Optionally, clear the form
        event.target.reset();
    };

    React.useEffect(() => {
        // Pre-fill form if data exists
        const saved = localStorage.getItem('contactForm');
        if (saved) {
            const data = JSON.parse(saved);
            if (data.name) document.getElementById('name').value = data.name;
            if (data.email) document.getElementById('email').value = data.email;
            if (data.message) document.getElementById('message').value = data.message;
        }
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Contact/Booking</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" required autoComplete="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required autoComplete="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" required autoComplete="off" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
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

export default Contact;