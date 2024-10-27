import React from "react";

const Heading = () => {
  const links = [
    { title: "Home", bgColor: "bg-blue-500" },
    { title: "About", bgColor: "bg-green-500" },
    { title: "Services", bgColor: "bg-yellow-500" },

    { title: "Contact", bgColor: "bg-pink-500" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 space-x-4">
          {/* Navbar Links */}
          {links.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`${link.bgColor} text-white border border-white px-3 py-1 rounded-lg transition duration-200 hover:opacity-80 text-sm sm:text-base`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Heading;
