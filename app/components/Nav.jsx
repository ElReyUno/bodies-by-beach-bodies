"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import Search from './Search';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const menuRef = useRef(null); // Ref for the navigation menu
    const hamburgerRef = useRef(null); // Ref for the hamburger button

    const toggleNavbar = useCallback(() => {
        setIsNavOpen((prevState) => !prevState);
    }, []);

    const toggleSearch = useCallback(() => {
        setIsSearchOpen((prevState) => !prevState);
    }, []);

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    // Focus management
    useEffect(() => {
        if (isNavOpen && menuRef.current) {
            const firstLink = menuRef.current.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        } else if (hamburgerRef.current) {
            hamburgerRef.current.focus();
        }
    }, [isNavOpen]);

    const handleKeyDown = useCallback((event) => {
        if (isNavOpen && event.key === 'Escape') {
            setIsNavOpen(false);
        }
    }, [isNavOpen, setIsNavOpen]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const handleBlur = useCallback((event) => {
        if (isNavOpen && menuRef.current && !menuRef.current.contains(event.relatedTarget) && hamburgerRef.current && !hamburgerRef.current.contains(event.relatedTarget)) {
            setIsNavOpen(false);
        }
    }, [isNavOpen, setIsNavOpen]);

    useEffect(() => {
        document.addEventListener('focusout', handleBlur);
        return () => {
            document.removeEventListener('focusout', handleBlur);
        };
    }, [handleBlur]);

    return (
        <nav className="relative z-50" role="navigation" aria-label="Main Navigation">
            <div className="flex justify-between items-center p-4 md:p-6">
                {/* Hamburger only on small screens */}
                <div
                    className="cursor-pointer md:hidden z-50"  // Hide on medium and larger screens
                    onClick={toggleNavbar}
                    aria-label={isNavOpen ? "close navigation menu" : "open navigation menu"}
                    ref={hamburgerRef}
                    tabIndex="0"
                >
                    {isNavOpen ? <HiX className="text-3xl sm:text-4xl" /> : <HiMenu className="text-3xl sm:text-4xl" />}
                </div>
                <Link href="/" className="logo-container focus:outline-none" aria-label="Go to home page">
                    <img
                        src="/bodies-by-beach-bodies/img/Logo.webp"
                        alt="BBBB Logo"
                        className="mx-auto"
                        loading="eager"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </Link>
                <button
                    className="p-2 rounded-full hover:bg-gray-100 focus:outline-none search-button"
                    aria-label="search"
                    onClick={toggleSearch}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            {isSearchOpen && (
                <div className="flex justify-center items-center w-full py-2 px-4 md:px-6">
                    <Search />
                </div>
            )}
            {/* Navigation Menu Container */}
            <div
                ref={menuRef}
                className={`navbar ${isNavOpen ? 'active' : 'hidden'} md:flex md:justify-center md:items-center md:pt-2 md:pb-4 z-50`}
            >
                <ul className="flex flex-col justify-evenly w-full md:flex-row md:space-x-4" aria-label="Navigation Links">
                    <li><Link href="/" className="block p-2 hover:text-gray-600" tabIndex={isNavOpen ? 0 : -1} onClick={closeNavbar}>Home</Link></li>
                    <li><Link href="/about" className="block p-2 hover:text-gray-600" tabIndex={isNavOpen ? 0 : -1} onClick={closeNavbar}>About</Link></li>
                    <li><Link href="/services" className="block p-2 hover:text-gray-600" tabIndex={isNavOpen ? 0 : -1} onClick={closeNavbar}>Services</Link></li>
                    <li><Link href="/facilities" className="block p-2 hover:text-gray-600" tabIndex={isNavOpen ? 0 : -1} onClick={closeNavbar}>Facilities & Resources</Link></li>
                    <li><Link href="/partnerships" className="block p-2 hover:text-gray-600" tabIndex={isNavOpen ? 0 : -1} onClick={closeNavbar}>Partnerships</Link></li>
                </ul>
            </div>
            {/* Overlay */}
            {isNavOpen && (<div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={closeNavbar}></div>)}
        </nav>
    );
}

export default Nav;