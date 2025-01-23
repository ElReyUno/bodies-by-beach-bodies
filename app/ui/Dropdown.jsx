import React, { useState, useRef, useEffect } from 'react';

function Dropdown({
    options,
    onSelect,
    placeholder = 'Select an option',
    initialValue = null,
    className = '',
    buttonClassName = '',
    menuClassName = '',
    ariaLabel = "dropdown",
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedValue(option.value);
        onSelect(option.value);
        setIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    return (
        <div className={`relative inline-block ${className}`} ref={dropdownRef} aria-label={ariaLabel}>
            <button
                type="button"
                className={`px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${buttonClassName} w-full flex justify-between items-center`}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span>{selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}</span>
                <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                <ul
                    className={`absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-full ${menuClassName}`}
                    role="listbox"
                >
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleOptionSelect(option)}
                            role="option"
                            aria-selected={selectedValue === option.value}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;