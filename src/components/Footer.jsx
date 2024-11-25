import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    const teamMembers = [
        { name: "Alya Bestari", ig: "alyabestari_" },
        { name: "Insani Rahmah Handayarani", ig: "saniam.a_" },
        { name: "Raihanah Yulistia", ig: "ryulistia_" },
        { name: "Vera Rahmayani", ig: "verarahmayani_" },
    ];

    return (
        <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 font-['source-code-pro',_Menlo,_Monaco,_Consolas,_'Courier_New',_monospace]">
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                {/* Top Section */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 tracking-tight">
                        Our Team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 tracking-wide">
                        Connect with our amazing team members
                    </p>
                </div>

                {/* First Row - 4 Team Members */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <a
                                href={`https://instagram.com/${member.ig}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg w-full"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Instagram className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-sm font-semibold text-gray-800 dark:text-white text-center mb-1 tracking-wide">
                                    {member.name}
                                </h4>
                                <span className="text-xs text-pink-500 dark:text-pink-400 group-hover:text-purple-500 transition-colors duration-300 tracking-wider">
                                    @{member.ig}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Second Row - Centered Nurjanah */}
                <div className="flex justify-center mb-8">
                    <div className="w-full max-w-[250px]">
                        <a
                            href="https://instagram.com/nnrjnaahh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg w-full"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <Instagram className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white text-center mb-1 tracking-wide">
                                Nurjanah
                            </h4>
                            <span className="text-xs text-pink-500 dark:text-pink-400 group-hover:text-purple-500 transition-colors duration-300 tracking-wider">
                                @nnrjnaahh
                            </span>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left mb-4 md:mb-0 tracking-wide">
                            © 2024 All Rights Reserved
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sm text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300 tracking-wide">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-500 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 transition-colors duration-300 tracking-wide">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;