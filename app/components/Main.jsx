"use client";

import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Main() {
    const handleClick = useCallback(() => {
        alert('clicked!');
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
                            <select>
                                <option value="option1">Services</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
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
                                Lorem ipsum dolor sit amet, et delectus accommodare his.<br/>
                                Consul copiosae legendos at vix ad.<br/>
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