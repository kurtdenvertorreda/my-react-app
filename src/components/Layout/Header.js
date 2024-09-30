// components/Layout/Header.js
import React from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
      <div className="flex items-center">
        <h2 className="text-2xl font-semibold text-gray-800">CRUD Operations</h2>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Search..."
          />
          <div className="absolute top-0 right-0 mt-2 mr-4 text-gray-500">
            <SearchIcon className="h-5 w-5" />
          </div>
        </div>
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <BellIcon className="h-6 w-6" />
        </button>
        <div className="relative">
          <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none">
            <img
              className="h-full w-full object-cover"
              src="/api/placeholder/32/32"
              alt="Your avatar"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;