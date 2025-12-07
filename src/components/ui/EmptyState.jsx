import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({ message = "Coming Soon..." }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-2xl bg-gray-50/50 dark:bg-[#1a1a1a]/50">
            <div className="bg-white dark:bg-[#252525] p-4 rounded-full mb-4 shadow-sm">
                <PackageOpen size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">{message}</p>
        </div>
    );
};

export default EmptyState;
