import React from 'react';
import "./Image.css";

export const Image = ({ src, alt = '', className }) => {
    return (
        <img className={className} src={src} alt={alt} />
    );
};

