import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
            {children}
        </button>
    );
};

export default Button;