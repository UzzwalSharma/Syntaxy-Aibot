import React, { useState } from 'react';
import { FaBars, FaHome, FaUserAlt, FaRobot, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen p-5 ${isOpen ? 'w-64' : 'w-20'} transition-width duration-300 ease-in-out`}>
        <div className="flex justify-between items-center">
          <h1 className={`text-xl font-bold ${!isOpen && 'hidden'} transition-all`}>My Chatbot</h1>
          <FaBars onClick={toggleSidebar} className="cursor-pointer text-2xl" />
        </div>
        <ul className="mt-10">
          <li className="mb-6">
            <a href="/" className="flex items-center">
              <FaHome className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-all`}>Home</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="/profile" className="flex items-center">
              <FaUserAlt className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-all`}>Profile</span>
            </a>
          </li>
          <li className="mb-6">
            <a href="/chatbot" className="flex items-center">
              <FaRobot className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-all`}>Chatbot</span>
            </a>
          </li>
          <li className="mt-auto">
            <a href="/logout" className="flex items-center">
              <FaSignOutAlt className="text-xl mr-4" />
              <span className={`${!isOpen && 'hidden'} transition-all`}>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow p-10">
        <h2 className="text-3xl">Main Content Here</h2>
        {/* Rest of your content */}
      </div>
    </div>
  );
};

export default Sidebar;
