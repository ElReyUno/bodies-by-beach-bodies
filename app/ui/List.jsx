import React from 'react';

function List({ items, renderItem, className = "", ariaLabel = "list" }) {
    if (!items || items.length === 0) {
        return <div className="text-center text-gray-500 py-4">No items to display.</div>;
    }

    return (
        <ul className={className} aria-label={ariaLabel}>
            {items.map((item, index) => (
                <li key={index}>
                    {renderItem(item, index)}
                </li>
            ))}
        </ul>
    );
}

export default List;