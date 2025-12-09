import React from 'react';
import * as Icons from 'lucide-react';

/**
 * Renders a Lucide icon dynamically based on its name.
 * Fallback to 'Circle' if icon name not found.
 */
const IconRenderer = ({ name, size = 18, className = "" }) => {
    const LucideIcon = Icons[name] || Icons.Circle;

    return <LucideIcon size={size} className={className} />;
};

export default IconRenderer;
