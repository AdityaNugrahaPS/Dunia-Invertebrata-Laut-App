import React from 'react';
import { Leaf } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-white/90 backdrop-blur-sm shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Leaf className="w-6 h-6 text-green-600" />
                        <span className="ml-2 font-bold text-gray-800">WildLife</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;