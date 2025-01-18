"use client";

import React, { useCallback, useState  } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Home from './Home';

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
        <main className="flex-grow flex flex-col justify-start items-center min-h-screen relative">
            <Home />
        </main>
    );
}

export default Main;