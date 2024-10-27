import { Icon } from "@iconify/react";
import React, { useState } from "react";

import LOGO from "../assets/460501538_122116695884475122_5254163446392055715_n.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center lg:h-40 h-16">
          {/* Brand Logo and Description */}
          <div className="flex items-center space-x-3">
            <img
              src={LOGO}
              alt="Brand Logo"
              className="lg:h-40 lg:w-40 w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold solaiman">আমরাই বাংলাদেশ</h1>
              <p className="text-sm text-gray-300 hidden sm:block">
                একটি সেবামূলক সংগঠন
              </p>
            </div>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <Icon icon="material-symbols:menu" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#" className="block text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              About
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="block text-gray-300 hover:text-white">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
