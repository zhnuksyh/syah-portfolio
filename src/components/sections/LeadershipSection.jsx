import React from 'react';
import { Users, Star, Award } from 'lucide-react';

const LeadershipSection = () => (
    <section id="leadership" className="mb-32">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <Users size={20} className="text-gray-400" />
            Involvement & Leadership
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

            {/* Software Engineering Society */}
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                    <Star size={20} />
                </div>
                <h3 className="font-semibold mb-1">Software Engineering Society (UTM)</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">President (2024 - 2025)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    Effectively led the organization and oversaw strategic planning to achieve organizational goals.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 list-disc ml-4">
                    <li>Director (2025): Organized Annual Grand Meeting.</li>
                    <li>Secretary (2024): Managed records and communication.</li>
                </ul>
            </div>

            {/* Student Representative Council */}
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg flex items-center justify-center mb-4">
                    <Award size={20} />
                </div>
                <h3 className="font-semibold mb-1">Student Representative Council (UTM)</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Exco Student Welfare (2023 - 2024)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    Actively advocated for student welfare and successfully organized support initiatives.
                </p>
                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 list-disc ml-4">
                    <li>Director (2024): Initiated Scholarship Hunter project.</li>
                    <li>Deputy Director (2024): Organized events like Eid Al-Fitr Celebration.</li>
                </ul>
            </div>

            {/* Maybank Foundation */}
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Award size={20} />
                </div>
                <h3 className="font-semibold mb-1">Maybank Foundation</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Academic Scholar & Ambassador</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Awarded for academic excellence and leadership potential. Represented Maybank to promote initiatives.
                </p>
            </div>

            {/* Pembimbing Rakan Siswa */}
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Users size={20} />
                </div>
                <h3 className="font-semibold mb-1">Pembimbing Rakan Siswa (UTM)</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">Acting President (2024)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Led the organization and ensured smooth operations. Previously Vice President and Director for student development workshops.
                </p>
            </div>

        </div>
    </section>
);

export default LeadershipSection;
