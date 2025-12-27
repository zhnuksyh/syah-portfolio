import React from 'react';

/**
 * XIcon (Twitter)
 * Custom SVG to match the specific "X" branding not always available in standard libraries.
 */
export const XIcon = ({ size = 24, className }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

/**
 * ChessPawn
 * Symbolism: Strategy, humble beginnings, potential for promotion.
 */
/**
 * ChessPawn
 * Detailed outline style (Flaticon inspired)
 */
export const ChessPawn = ({ size = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19.16 53H44.84" />
        <path d="M44.84 53C47.01 53 47.96 54.19 47.78 55.43C47.6 56.66 46.54 59 44.84 59H19.16C17.46 59 16.4 56.66 16.22 55.43C16.03 54.19 16.99 53 19.16 53Z" />
        <path d="M22.5 42H41.5" />
        <path d="M41.5 42L44.84 53H19.16L22.5 42Z" />
        <path d="M28.09 30H35.91" />
        <path d="M35.91 30C39.46 30 40.52 35.8 41.5 42H22.5C23.48 35.8 24.54 30 28.09 30Z" />
        <circle cx="32" cy="15" r="10" />
    </svg>
);

/**
 * ChessKnight
 * Detailed outline style (Flaticon inspired)
 */
export const ChessKnight = ({ size = 24, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M16 53H48" />
        <path d="M48 53C50.17 53 51.12 54.19 50.94 55.43C50.76 56.66 49.7 59 48 59H16C14.3 59 13.24 56.66 13.06 55.43C12.87 54.19 13.83 53 16 53Z" />
        <path d="M27 25C27 25 24 23 24 18C24 13 28 8 35 6C42 4 48 8 48 8C48 8 50 12 48 18C46 24 43 27 41 29L39 42L42 53H22L25 42C25 42 27.5 38 27 34C26.5 30 25 30 23 32C21 34 18 34 18 34" />
        <circle cx="36" cy="18" r="2" fill="currentColor" />
    </svg>
);

/**
 * HuggingFaceIcon
 */
export const HuggingFaceIcon = ({ size = 24, className }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM9 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM9 15c0-1 1.5-2 3-2s3 1 3 2H9Zm3 4c-3 0-5.5-2-6.5-6h13c-1 4-3.5 6-6.5 6Z" />
    </svg>
);

/**
 * AcademiaIcon
 * Outline style to match Lucide icons
 */
export const AcademiaIcon = ({ size = 24, className }) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12.015 15.684l-3.327-1.488-.002-3.21 3.329 1.487 3.328-1.487.001 3.21-3.329 1.488zM12.008 19.336l-7.986-3.57V8.23l7.986 3.57 7.987-3.57v7.535l-7.987 3.571zm-.006-15.65L2.316 6.845 12 11.232l9.682-4.387-9.674-4.391z" />
    </svg>
);
