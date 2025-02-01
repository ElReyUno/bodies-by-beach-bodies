"use client";

import React from 'react';
import Link from 'next/link';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ServicesPage() {

    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
                <div className="relative flex-1 flex flex-col justify-center w-full h-full md:py-96">
                    <img src="/img/services-background.webp" alt="Services Background" className="absolute inset-0 w-full h-full object-cover -z-10" />
                    <div className="max-w-lg mx-auto text-center bg-white border border-gray-300 rounded-md shadow-sm p-4">
                        <div className="relative z-10 p-4 flex flex-col items-center text-center pt-16">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">Our Services:</h2>
                            <ul className="space-y-4">
                                <li><Link href="/services/fitness" className="link-button">Fitness</Link></li>
                                <li><Link href="/services/physical-therapy" className="link-button">Physical Therapy</Link></li>
                                <li><Link href="/services/spa" className="link-button">Spa</Link></li>
                                <li><Link href="/services/boxing" className="link-button">Boxing</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}