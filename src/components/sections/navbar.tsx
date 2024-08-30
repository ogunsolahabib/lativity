'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react'; // Assuming you're using lucide-react for icons
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-6">
                    <div className="flex items-center">
                        {/* Logo */}
                        <a href="/" className="flex-shrink-0 flex items-center">
                            <Image width={50} height={50} src="/images/logo.png" alt="Lativity Logo" />

                        </a>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden sm:mx-auto sm:px-2 sm:flex space-x-3 md:space-x-8">
                        <a href="#" className="border-l_blue text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</a>
                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">About</a>
                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Services</a>
                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Portfolio</a>
                        <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden sm:flex sm:items-center">
                        <a className="btn--primary" href="#project-form">
                            Discuss a project
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-l_blue"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <a href="#" className="bg-l_blueborder-l_blue text-l_blue block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</a>
                        <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About</a>
                        <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Services</a>
                        <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Portfolio</a>
                        <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</a>
                    </div>
                    <div className="p-6 border-t border-gray-200">
                        <a className="btn--primary" href="#project-form">
                            Discuss a project
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;