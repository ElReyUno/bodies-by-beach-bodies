"use client";

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

function Partnerships() {
    return (
        <Layout>
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Partner with Bodies by Beach Bodies & Sid's Physical Therapy
                </h1>

                <p className="text-lg text-gray-700 mb-8">
                    Are you looking to invest in a groundbreaking wellness model that is poised
                    for global expansion? Partnering with Bodies by Beach Bodies, in
                    collaboration with Sid's Physical Therapy, offers a unique opportunity
                    to join a proven, tech-forward, and rapidly growing brand in the fitness and
                    physical therapy industries. Our integrated approach to holistic wellness
                    sets us apart, providing a strong foundation for mutual success and
                    significant returns.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Why Partner with Us?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Proven Success & Established Brand
                        </h3>
                        <p className="text-gray-700">
                            Bodies by Beach Bodies has a 10+ year history of transforming lives in
                            Central Arkansas. We have built a strong reputation for delivering
                            results-oriented fitness programs and are known for our effective
                            boot camps, personal training, and holistic approach. By partnering
                            with us, you are investing in a brand with proven market traction and a
                            loyal customer base.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Integrated, Holistic Approach
                        </h3>
                        <p className="text-gray-700">
                            Our partnership with Sid's Physical Therapy creates a unique
                            holistic wellness ecosystem, combining fitness, therapeutic support,
                            and relaxation. This integrated model provides a comprehensive
                            solution for our clients, resulting in greater retention, higher
                            customer satisfaction, and a stronger overall brand offering. This is a
                            truly unique proposition in the fitness and health industry.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Tech-Forward & Globally Accessible
                        </h3>
                        <p className="text-gray-700">
                            We leverage technology to expand our reach and accessibility. Our
                            online coaching, virtual training programs, and global brand vision make
                            us well-positioned for a wide-reaching customer base. Our digital
                            infrastructure will be at the fingertips of each partner, allowing for
                            immediate access to all digital products and technology. Partnering with
                            us is not a franchise, it's a true partnership!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Comprehensive Facilities & Services
                        </h3>
                        <p className="text-gray-700">
                            Our facilities boast a full-service fitness center, three swimming pools, basketball courts, spa services, and over 75 group exercise classes, ensuring maximum accessibility to all clients. The partnership with Sid's Physical Therapy means you can also offer physical therapy, clinical programming, ice baths, saunas, steam rooms, and breathing therapies. This extensive offering allows for diverse revenue streams and a more attractive business.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Partner Benefits
                </h2>

                <ul className="list-disc list-inside text-gray-700 mb-8">
                    <li>
                        Access to our proven business model and operating systems, which can be
                        implemented globally with all digital assets.
                    </li>
                    <li>
                        A well-defined partnership structure with fair and reasonable revenue
                        sharing models.
                    </li>
                    <li>Comprehensive training and support, including access to our
                        innovative digital programs, virtual training, and online coaching protocols.
                    </li>
                    <li>
                        Marketing and branding support to reach potential clients in your area.
                    </li>
                    <li>
                        The opportunity to be part of a global wellness movement with significant
                        growth potential.
                    </li>
                    <li>
                        Leverage the strength of both the Bodies by Beach Bodies and Sid's
                        Physical Therapy brands in your market.
                    </li>
                    <li>
                        Direct access to our leadership team and their expertise in the health and wellness industries.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Ideal Partnership Profile
                </h2>
                <p className="text-gray-700 mb-8">
                    We are looking for partners who are passionate about health and wellness,
                    committed to helping others, and have the entrepreneurial drive to grow a
                    successful business. Whether you are an individual, a small business owner, or a larger corporation, if you share our vision, we invite you to join us.
                </p>

                <div className="flex justify-center items-center space-x-4">
                    <Link href="/partnerships/testimonials">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Testimonials
                        </button>
                    </Link>

                    <Link href="/contact">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Us to Learn More
                        </button>
                    </Link>

                    <Link href="/partnerships/blog">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Blog
                        </button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default Partnerships;