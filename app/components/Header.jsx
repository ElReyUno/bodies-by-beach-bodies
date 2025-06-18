import React from 'react';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <Nav />
            <a
                className="logo-container focus:outline-none"
                aria-label="Go to home page"
                href="/"
                style={{ backgroundImage: "url('../public/img/Logo.webp')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', width: 300, height: 50 }}
            >
                {/* Optionally, add text or leave empty for just the background image */}
            </a>
            {/* Other header elements like your logo, etc., would go here */}
        </header>
    );
}