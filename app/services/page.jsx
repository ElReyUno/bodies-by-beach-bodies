"use client";

import React from 'react';
import Link from 'next/link';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <div
                className="relative flex-grow flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
                role="main" aria-label="Main Content"
                style={{ backgroundImage: `url('/img/services-background.webp')` }}
            >

                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8">Our Services:</h2>
                <div className='flex flex-col items-center justify-center w-full max-w-md'>
                    <ul>
                        <li><Link href="/services/fitness" className="link-button">Fitness</Link></li>
                        <li><Link href="/services/physical-therapy" className="link-button">Physical Therapy</Link></li>
                        <li><Link href="/services/spa" className="link-button">Spa</Link></li>
                        <li><Link href="/services/boxing" className="link-button">Boxing</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}