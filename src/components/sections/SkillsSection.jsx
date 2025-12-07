import React from 'react';
import { Globe, Cpu, Layers, Database, Server, Layout, Terminal, Box, Code } from 'lucide-react';
import SkillCard from '../ui/SkillCard';

const SkillsSection = () => (
    <section id="skills" className="mb-32">
        <h2 className="text-xl font-semibold mb-8">Skills & Tools</h2>

        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {/* Inline definition for prototyping, but ideally moved to constants.js */}
            <SkillCard
                icon={() => (
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" fillOpacity="0.1" />
                        <path d="M14.25 5.5h-4.5c-1.5 0-2.5 1-2.5 2.5v2h4v-1h3v4h-7v2.5c0 1.5 1 2.5 2.5 2.5h4.5c1.5 0 2.5-1 2.5-2.5v-2h-4v1h-3v-4h7v-2.5c0-1.5-1-2.5-2.5-2.5z" />
                    </svg>
                )}
                name="Python"
                colorClass="bg-[#3776AB]/5 dark:bg-[#3776AB]/10"
                iconColor="text-[#3776AB] dark:text-[#3776AB]"
            />

            <SkillCard icon={Globe} name="React" colorClass="bg-[#61DAFB]/5 dark:bg-[#61DAFB]/10" iconColor="text-[#00B4D8] dark:text-[#61DAFB]" />
            <SkillCard icon={Cpu} name="PyTorch" colorClass="bg-[#EE4C2C]/5 dark:bg-[#EE4C2C]/10" iconColor="text-[#EE4C2C] dark:text-[#EE4C2C]" />
            <SkillCard icon={Layers} name="TensorFlow" colorClass="bg-[#FF6F00]/5 dark:bg-[#FF6F00]/10" iconColor="text-[#FF6F00] dark:text-[#FF6F00]" />
            <SkillCard icon={Database} name="SQL" colorClass="bg-[#336791]/5 dark:bg-[#336791]/10" iconColor="text-[#336791] dark:text-[#60A5FA]" />
            <SkillCard icon={Server} name="Docker" colorClass="bg-[#2496ED]/5 dark:bg-[#2496ED]/10" iconColor="text-[#2496ED] dark:text-[#2496ED]" />
            <SkillCard icon={Layout} name="Figma" colorClass="bg-[#F24E1E]/5 dark:bg-[#F24E1E]/10" iconColor="text-[#F24E1E] dark:text-[#F24E1E]" />
            <SkillCard icon={Terminal} name="Bash" colorClass="bg-gray-100 dark:bg-gray-800" iconColor="text-gray-700 dark:text-gray-300" />
            <SkillCard icon={Box} name="K8s" colorClass="bg-[#326CE5]/5 dark:bg-[#326CE5]/10" iconColor="text-[#326CE5] dark:text-[#326CE5]" />
            <SkillCard icon={Code} name="C++" colorClass="bg-[#00599C]/5 dark:bg-[#00599C]/10" iconColor="text-[#00599C] dark:text-[#60A5FA]" />
        </div>
    </section>
);

export default SkillsSection;
