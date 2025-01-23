"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const router = useRouter();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (query.trim()) {
            const res = await fetch(`/api/search?q=${query}`);
            if (res.ok) {
                const data = await res.json();
                if (data.length > 0) {
                    setResults(data);
                    setNotFound(false);
                } else {
                    setResults([]);
                    setNotFound(true);
                }
            } else {
                setResults([]);
                setNotFound(true);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                    className="border rounded p-2 focus:outline-none"
                />
                <button type="submit" aria-label="search" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
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
            </form>
            {notFound && <p>No results found</p>}
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;