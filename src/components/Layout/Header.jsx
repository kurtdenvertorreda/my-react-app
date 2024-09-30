import React from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/outline';
import { PlayIcon } from '@heroicons/react/outline';
const Header = ({ onAddNewUser }) => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white border-b-1 ">
      <div className="flex items-center">
        <button className="bg-white rounded-full p-2 focus:outline-none">
            <PlayIcon className="h-5 w-5 text-gray-300" />
        </button>
        </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <input
            className="bg-white rounded-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Search..."
          />
          <div className="absolute top-0 right-0 mt-2 mr-4 text-gray-300">
            <SearchIcon className="h-5 w-5" />
          </div>
        </div>
        <button className="flex mx-4 text-gray-300 focus:outline-none">
          <BellIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
