import React from 'react';

const SkillCard = ({ icon: Icon, name, colorClass, iconColor }) => (
    <div className={`aspect-square flex flex-col items-center justify-center p-1.5 rounded-lg border border-transparent transition-all group ${colorClass} hover:scale-[1.05]`}>
        <div className={`mb-1 transition-colors ${iconColor}`}>
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <span className="text-[10px] font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">{name}</span>
    </div>
);

export default SkillCard;
