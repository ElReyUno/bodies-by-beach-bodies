"use client";

import React from 'react';
import Link from 'next/link';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Services() {
    return (
        <>
            <Nav />
            <div className='container mx-auto flex flex-col items-center justify-center md:pt-24 md:pb-4' role="main" aria-label="Main Content">
                <h2>Our Services:</h2>
                <div className='flex flex-col items-center justify-center'>
                    <ul>
                    <li><Link href="/services/fitness">Fitness</Link></li>
                    <li><Link href="/services/physical-therapy">Physical Therapy</Link></li>
                    <li><Link href="/services/spa">Spa</Link></li>
                    <li><Link href="/services/boxing">Boxing</Link></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Services;