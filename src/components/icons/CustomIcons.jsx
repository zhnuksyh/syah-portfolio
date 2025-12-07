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
export const ChessPawn = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2a3 3 0 0 0-3 3c0 .5.15.97.41 1.38A6.96 6.96 0 0 0 7.1 7.84L6.54 9.53l1.11 3.32A5.99 5.99 0 0 0 7 14c-1.1 0-2 .9-2 2v6h14v-6c0-1.1-.9-2-2-2-1.2 0-2.32.33-3.29.91l-1.6-4.8 1.68-1.68c.73.15 1.49.24 2.29.24 1.3 0 2.5-.22 3.44-.62l.56-1.68-1.1-1.17A7.03 7.03 0 0 0 14.59 5.38C14.85 4.97 15 4.5 15 4a3 3 0 0 0-3-3z" />
        <path d="M12 21v-4M8 21h8" />
    </svg>
);

/**
 * ChessKnight
 * Symbolism: Lateral thinking, non-linear movement, "The Backstory" hero icon.
 */
export const ChessKnight = ({ size = 24, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 22H5" />
        <path d="M13.5 2H10.5C9.39543 2 8.5 2.89543 8.5 4V14L5 18V22H19V18L15.5 14V8" />
        <path d="M10.5 6H13.5" />
    </svg>
);
