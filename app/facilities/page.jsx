"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Facilities() {
    return (
        <>
            <Nav />
            <h1 className="text-2xl font-bold mb-4 pt-24">Our Facilities</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Information About Our Facilities</h2>
                <p className="mb-4">
                    Our state-of-the-art facilities are designed to provide you with the best experience possible. We offer a variety of amenities including a fully equipped gym, a luxurious spa, a heated swimming pool, and modern locker rooms. Our facilities are maintained to the highest standards to ensure your comfort and safety.
                </p>
                <h2 className="text-xl font-semibold mb-2">Gallery</h2>
                <p>
                    Take a look at some images of our facilities below. We take pride in offering a clean, welcoming, and well-maintained environment for all our members.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <img src="/img/gym.webp" alt="Gym" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/img/spa.webp" alt="Spa" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/img/steam-room.webp" alt="Steam Room" className="w-full h-auto rounded-lg shadow-md" />
                    <img src="/img/locker-room.webp" alt="Locker Room" className="w-full h-auto rounded-lg shadow-md" />
                </div>
                <p className="mt-4">
                    Learn more about our <Link href="/facilities/access" className="text-blue-500 hover:underline">24/7 Access</Link>.
                </p>
                <p className="mt-2">
                    Find out more about our <Link href="/facilities/coaching" className="text-blue-500 hover:underline">Online Coaching Information</Link>.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Facilities;