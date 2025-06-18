"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '../../components/Layout';

function ResultsContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchResults = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`../../api/search?query=${query}`);
                if (response.ok) {
                    const data = await response.json();
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [query]);

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
            {isLoading && <div>Loading...</div>}
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            <a href={`/page/${result.id}`} className="text-blue-500 underline">
                                <h3>{result.title}</h3>
                            </a>
                            <p>{result.content}</p>
                            <small>{result.date}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No Results</div>
            )}
        </>
    );
}

export default function Results() {
    return (
        <Layout>
            <Suspense fallback={<div>Loading search...</div>}>
                <ResultsContent />
            </Suspense>
        </Layout>
    );
}