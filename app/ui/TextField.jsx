import React, { useState } from 'react';

function TextField({
    id,
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    required = false,
    disabled = false,
    className = "",
    ...props
}) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`text-field-container ${className}`}>
            {label && (
                <label htmlFor={id} className={`text-field-label ${isFocused ? 'focused' : ''}`}>
                    {label}
                    {required && <span className="text-red-500"> *</span>}
                </label>
            )}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`text-field-input ${error ? 'error' : ''}`}
                required={required}
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default TextField;