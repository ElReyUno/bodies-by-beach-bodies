import React, { useRef, useState, useEffect } from 'react';

const VideoComponent = ({
    src,
    type,
    controls = true,
    autoPlay = false,
    loop = false,
    muted = false,
    preload = 'metadata',
    className = '',
    poster,
    width,
    height,
    style,
    onPlay,
    onPause,
    onEnded,
    onError,
    fallback,
    forwardedRef
}) => {

    const videoRef = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onerror = (event) => {
                setError(event);
                onError?.(event);
            };

        }

        return () => {
            if (videoRef.current) {
                videoRef.current.onerror = null;
            }
        };
    }, [onError]);



    const handlePlay = () => {
        onPlay?.();
    };

    const handlePause = () => {
        onPause?.();
    };

    const handleEnded = () => {
        onEnded?.();
    };

    const derivedType = type || (src && src.endsWith('.mp4') ? 'video/mp4' : src && src.endsWith('.webm') ? 'video/webm' : undefined);


    if (error) {
        console.error("Error loading video", error)
        return fallback || <div>Video could not be loaded</div>
    }
    return (
        <video
            ref={forwardedRef || videoRef}
            src={src}
            type={derivedType}
            controls={controls}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            preload={preload}
            className={`video-component ${className}`}
            poster={poster}
            width={width}
            height={height}
            style={style}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
        >
            {/*Fallback content for unsupported browsers or if the source is invalid*/}
            {fallback}
        </video>
    );
};

export default VideoComponent;