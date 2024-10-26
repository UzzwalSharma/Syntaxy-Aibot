import React from 'react';
import { useState } from 'react';
import { FaBars, FaHome, FaUserAlt, FaRobot, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-60' : 'w-20'} transition-all duration-300 ease-in-out text-center flex flex-col shadow-lg`}
      >
        <div className="flex justify-between items-center pr-2 pt-2">
          <h1 className={`text-xl font-bold ${!isOpen && 'hidden'} transition-opacity duration-300 ease-in-out`}>Syntax Squid's Bot</h1>
          <FaBars onClick={toggleSidebar} className="cursor-pointer text-2xl hover:text-red-400 transition-colors duration-300" />
        </div>
        <ul className="mt-10">
          <li className="mb-6">
            <a href="/" className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-700">
              <FaHome className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-opacity duration-300 ease-in-out`}>Home</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="/profile" className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-700">
              <FaUserAlt className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-opacity duration-300 ease-in-out`}>Profile</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="/chatbot" className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-700">
              <FaRobot className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-opacity duration-300 ease-in-out`}>Chatbot</span>
            </a>
          </li>
          <li className="mt-auto">
            <a href="/logout" className="flex items-center p-2 rounded-lg transition-all duration-300 hover:bg-gray-700">
              <FaSignOutAlt className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-opacity duration-300 ease-in-out`}>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;