import { Icon } from "@iconify/react";
import React, { useState } from "react";

const StickySocialLinks = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle visibility state
  };

  return (
    <div>
      {isVisible && ( // Render links only if isVisible is true
        <div className="fixed top-1/4 left-0 z-50">
          <ul className="space-y-4">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61564253686277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-r-full hover:bg-blue-800 transition-colors"
              >
                <Icon icon="logos:facebook" width="40" height="40" />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/message/NAT5WEJZX7MBE1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-r-full hover:bg-green-600 transition-colors"
              >
                <Icon icon="logos:whatsapp-icon" width="40" height="40" />
              </a>
            </li>
          </ul>
          {/* Hide Button with Icon */}
          <button
            onClick={toggleVisibility}
            className="absolute w-[30px]  top-[-10px] right-[-30px] bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
            aria-label="Hide Social Links"
          >
            <Icon
              icon="system-uicons:cross"
              width="10"
              height="10"
              style={{ color: "#59d317" }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default StickySocialLinks;
