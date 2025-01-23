import React from 'react';
import Image from 'next/image';

function ImageComponent({
    src,
    alt,
    width,
    height,
    layout = 'responsive', // Default to 'responsive'
    objectFit = 'cover', // Default to 'cover'
    priority = false,
    className = '',
    ...props // Handle any other attributes
}) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={layout}
            objectFit={objectFit}
            priority={priority}
            className={className}
            {...props} // Spread remaining attributes
        />
    );
}

export default ImageComponent;