"use client";

import React, { useCallback, useState  } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Home from './Home';
// COMMENTED OUT UNTIL COMPONENTS ARE IMPLEMENTED AND UNCOMMENTED
// import About from './About';
// import Contact from './Contact';
// import Services from './Services';
// import Fitness from './Services/Fitness'
// import Bootcamp from './Services/Fitness/Bootcamp';
// import IndoorClasses from './Services/Fitness/IndoorClasses';
// import PersonalTraining from './Services/Fitness/PersonalTraining';
// import OnlineCoaching from './Services/Fitness/OnlineCoaching';
// import Access247 from './Services/Fitness/Access247';
// import PhysicalTherapy from './Services/PhysicalTherapy';
// import Spa from './Services/Spa';
// import Boxing from './Services/Boxing';
// import Facilities from './Facilities';
// import Testimonials from './Testimonials';
// import Blog from './Blog';
// import Partnerships from './Partnerships';

function Main() {
    const router = useRouter();

    // State variables for the selected values in the dropdown menus
    const [selectedService, setSelectedService] = useState('');
    const [selectedFacility, setSelectedFacility] = useState('');
    const [selectedPartnership, setSelectedPartnership] = useState('');

    // Event handler for the "Services" dropdown menu
    const handleServiceChange = useCallback((event) => {
        const value = event.target.value; // Get the selected value
        setSelectedService(value); // Update the state with the selected value
        if (value) {
            router.push(value); // Navigate to the selected route if a valid value is selected
        }
    }, []);

    return (
        <main className="flex-grow flex flex-col justify-start items-center min-h-screen">
            <div className="flex flex-col items-center justify-center w-full py-4 md:py-8 px-4 md:px-6">
                <h1 className="text-3xl">Bodies By Beach Bodies</h1>
                <h2 className="text-2xl">Transform Your Body & Mind</h2>
            </div>

            <div className="flex-grow flex justify-center items-center bg-cover bg-fixed bg-center w-full"
                style={{ backgroundImage: `url('/img/main-background.webp')` }}>  {/* Second row - remaining height*/}
                <div className="container mx-auto px-4 py-12 text-center flex">
                    <div className="w-1/4">
                        {/* Left content */}
                    </div>
                    <div className="w-1/2 image-container">
                        <div className="row">
                            <select value={selectedService} onChange={handleServiceChange}>
                                <option value="/services">Services</option>
                                <optgroup label="Sub-options">
                                    <option value="/services/fitness">Fitness</option>
                                    <option value="/services/fitness/bootcamp"> -- Boot Camp</option>
                                    <option value="/services/fitness/classes"> -- Indoor Fitness Classes</option>
                                    <option value="/services/fitness/personal-training"> -- Personal Training</option>
                                    <option value="/services/physical-therapy">Physical Therapy</option>
                                    <option value="/services/spa">Spa Services</option>
                                    <option value="/services/boxing">Boxing Lessons</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="row">
                            <select>
                                <option value="option1">Facilities & Resources</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="row">
                            <select>
                                <option value="option1">Partnerships</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="row">
                            <p style={{ color: 'red', fontWeight: 'bold' }}>
                                Lorem ipsum dolor sit amet, et delectus accommodare his.<br />
                                Consul copiosae legendos at vix ad.<br />
                                Lorem ipsum dolor sit amet, et delectus accommodare his.<br />
                                Consul copiosae legendos at vix ad.<br />
                                Lorem ipsum dolor sit amet, et delectus accommodare his.<br />
                                Consul copiosae legendos at vix ad.<br />
                                Lorem ipsum dolor sit amet, et delectus accommodare his.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4">
                        {/* Right content */}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;