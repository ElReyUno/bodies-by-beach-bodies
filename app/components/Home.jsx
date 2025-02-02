"use client";

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import mainBackground from '../../public/img/main-background.webp'
import About from '../about/page';

// COMMENTED OUT UNTIL COMPONENTS ARE IMPLEMENTED AND UNCOMMENTED
// import Contact from '../api/contact/route.js';
// import services from './services';
// import Fitness from './services/Fitness'
// import Bootcamp from './services/Fitness/Bootcamp';
// import IndoorClasses from './services/Fitness/IndoorClasses';
// import PersonalTraining from './services/Fitness/PersonalTraining';
// import OnlineCoaching from './services/Fitness/OnlineCoaching';
// import Access247 from './services/Fitness/Access247';
// import PhysicalTherapy from './services/PhysicalTherapy';
// import Spa from './services/Spa';
// import Boxing from './services/Boxing';
// import Facilities from './Facilities';
// import Testimonials from './Testimonials';
// import Blog from './Blog';
// import Partnerships from './Partnerships';


function Home() {
    const router = useRouter();

    // State variables for the selected values in the dropdown menus
    const [selectedService, setSelectedService] = useState('');
    const [selectedFacility, setSelectedFacility] = useState('');
    const [selectedPartnership, setSelectedPartnership] = useState('');

    // Event handler for the "services" dropdown menu
    const handleServiceChange = useCallback((event) => {
        const value = event.target.value; // Get the selected value
        setSelectedService(value); // Update the state with the selected value
        if (value) {
            router.push(value); // Navigate to the selected route if a valid value is selected
        }
    }, []);



    return (
        <div className="flex flex-col items-center justify-center w-full pt-1 pb-1 md:pt-24 md:pb-1 px-4 md:px-6">
            <section className="hero-section flex flex-col items-center justify-center w-full py-2 md:py-4 px-4 md:px-6">
                <h1 className="text-3xl">Bodies By Beach Bodies</h1>
                <h2 className="text-2xl">Transform Your Body & Mind</h2>
            </section>

            <div className="flex-grow flex justify-center items-center bg-cover bg-fixed bg-center w-full" role="main" aria-label="Main Content"
                style={{ backgroundImage: `url('/img/main-background.webp')` }}>
                <div className="container mx-auto px-4 py-12 text-center flex">
                    <div className="w-1/4">
                        {/* Left content */}
                    </div>
                    <div className="w-1/2 image-container">
                    <div className={"bg-white bg-opacity-80 backdrop-blur-md p-1 rounded-lg shadow-md max-w-lg mx-auto"}>
                        <div className="row">
                            <select className="text-center block w-full bg-blue-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={selectedService} onChange={handleServiceChange}>
                                <option value="/services">Services</option>
                                <optgroup label="Services Available:">
                                    <option value="/services/fitness">Fitness</option>
                                    <option value="/services/fitness/camp"> -- Boot Camp</option>
                                    <option value="/services/fitness/classes"> -- Indoor Fitness Classes</option>
                                    <option value="/services/fitness/training"> -- Personal Training</option>
                                    <option value="/services/physical-therapy">Physical Therapy</option>
                                    <option value="/services/spa">Spa services</option>
                                    <option value="/services/boxing">Boxing Lessons</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="row">
                            <select className="text-center block w-full bg-blue-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={selectedFacility} onChange={handleServiceChange}>
                                <option value="/facilities">Facilities & Resources</option>
                                <optgroup label="Facilities & Resources:">
                                    <option value="/facilities/access/">24/7 Access</option>
                                    <option value="/facilities/coaching/">Online Coaching</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="row">
                            <select className="text-center block w-full bg-blue-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={selectedPartnership} onChange={handleServiceChange}>
                                <option value="/partnerships">Partnerships</option>
                                <optgroup label="Partnerships:">
                                    <option value="/partnerships/testimonials">Testimonials</option>
                                    <option value="/partnerships/blog">Blog</option>
                                    <option value="/contact">Contact</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                        <div className="row">
                            <About embedded={true} />
                        </div>
                    </div>
                    <div className="w-1/4">
                        {/* Right content */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;