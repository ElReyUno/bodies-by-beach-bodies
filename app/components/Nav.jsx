"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import cwebpLogo from '../../public/img/Logo.webp';

function Nav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const menuRef = useRef(null); // Ref for the navigation menu
    const hamburgerRef = useRef(null); // Ref for the hamburger button

    const toggleNavbar = useCallback(() => {
        setIsNavOpen((prevState) => !prevState);
    }, []);

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
            setIsNavOpen(false)
        }
    }, [isNavOpen, setIsNavOpen]);

    useEffect(() => {
        document.addEventListener('focusout', handleBlur);
        return () => {
            document.removeEventListener('focusout', handleBlur);
        }
    }, [handleBlur])


    return (
        <nav className="flex flex-col w-full" role="navigation" aria-label="Main Navigation">
            <div className="flex justify-between items-center w-full">
                <div
                    className="text-3xl cursor-pointer hamburger"
                    onClick={toggleNavbar}
                    aria-label={isNavOpen ? "close navigation menu" : "open navigation menu"}
                    ref={hamburgerRef}
                    tabIndex="0"
                >
                    {isNavOpen ? <HiX /> : <HiMenu />}
                </div>
                <div className="logo-container">
                    <Link href="/" className="logo-link">
                    </Link>
                    <Image
                        src={cwebpLogo}
                        alt="BBBB Logo"
                        className="mx-auto"
                        priority
                    />
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
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
            {/* Use useRef for focus management */}
            <div
                ref={menuRef}
                className={`navbar ${isNavOpen ? 'active' : ''}`}
            >
                <ul className="flex flex-col md:flex-row">
                    <li><Link href="/" className="navLink block p-2" tabIndex={isNavOpen ? 0 : -1}>Home</Link></li>
                    <li><Link href="/about" className="navLink block p-2" tabIndex={isNavOpen ? 0 : -1}>About</Link></li>
                    <li><Link href="/contact" className="navLink block p-2" tabIndex={isNavOpen ? 0 : -1}>Contact</Link></li>
                </ul>
            </div>
            {/* Overlay */}
            {isNavOpen && (<div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setIsNavOpen(false)}></div>)}
        </nav>
    );
}

export default Nav;