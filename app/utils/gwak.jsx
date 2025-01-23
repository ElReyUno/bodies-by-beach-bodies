import React, { useState, useEffect } from 'react';

const Gwak = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null); // Reset error state on each fetch attempt

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    // Handle non-2xx HTTP responses as errors
                    let message = `HTTP error! status: ${response.status}`
                    try {
                        const errorBody = await response.json();
                        if (errorBody.message) {
                            message = `${message}, details: ${errorBody.message}`;
                        }
                    } catch (e) {
                        console.error("error parsing error body")
                    }

                    throw new Error(message);
                }

                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
                setData(null)
                console.error("Error Fetching Data", err)
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            // You can use abort controller here
        };

    }, [url]); // Effect dependency on url prop

    if (loading) {
        return <div>Loading data...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>No data available</div>
    }

    return (
        <div>
            {/* Render the fetched data */}
            {typeof data === 'object' ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
                <p>{String(data)}</p>
            )}

        </div>
    );
};

export default Gwak;