"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1)
    const router = useRouter();

    // Debouncing function so that we don't call API on every key stroke
    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout)
        }
    }

    const handleSearch = debounce(async (term) => {
        setIsLoading(true)
        try {
            const response = await fetch(`/app/api/search?query=${term}&page=${page}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data.results)
                setTotalPages(data.totalPages);
            } else {
                setResults([])
                setTotalPages(1)
            }
        } catch (error) {
            console.error("Error with fetch: ", error)
            setResults([])
            setTotalPages(1)
        } finally {
            setIsLoading(false)
        }
    });

    useEffect(() => {
        if (query) {
            handleSearch(query)
        }
    }, [query, page]);

    function handlePageChange(newPage) {
        setPage(newPage)
    }


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // we don't need the logic here because we are handling it with use effect
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
            {isLoading && <div>Loading...</div>}

            {results.length > 0 ? (
                <>
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>{result.title}</li>
                        ))}
                    </ul>

                    {totalPages > 1 && (
                        <div>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => handlePageChange(index + 1)}
                                    disabled={index + 1 === page}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    )}

                </>
            ) : (query ? <div>No Results</div> : null)}
        </div>
    );
};

export default Search;