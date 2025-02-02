"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [query, setQuery] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const storedHistory = localStorage.getItem('searchHistory');
        if (storedHistory) {
            setSearchHistory(JSON.parse(storedHistory));
        }
    }, []);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !== '') {
            const updatedHistory = [query, ...searchHistory.slice(0, 4)]; // Limit to 5 items
            setSearchHistory(updatedHistory);
            localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
            router.push(`/search/results?query=${query}`);
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
            {searchHistory.length > 0 && (
                <div>
                    <h3>Search History</h3>
                    <ul>
                        {searchHistory.map((historyQuery, index) => (
                            <li key={index}>{historyQuery}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Search;