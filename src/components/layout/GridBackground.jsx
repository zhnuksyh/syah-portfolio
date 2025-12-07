import React from 'react';

const GridBackground = () => (
    <div className="fixed inset-0 pointer-events-none z-0">
        {/* Grid: 40px square grid with very low opacity to add texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Vignette: Radial gradient to focus attention to center and soften edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(250,249,246,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_50%,rgba(18,18,18,0.6)_100%)]"></div>
    </div>
);

export default GridBackground;
