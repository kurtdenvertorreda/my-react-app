// components/Layout/Sidebar.js
import React from 'react';
import { HomeIcon, AcademicCapIcon, UsersIcon, CreditCardIcon, DocumentReportIcon, CogIcon } from '@heroicons/react/outline';


const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-[#f3e8db]">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-white">CRUD Operations</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><HomeIcon className="h-6 w-6" /></span>
            <span className="text-sm font-medium">Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><AcademicCapIcon className="h-6 w-6" /></span>
            <span className="text-sm font-medium">Course</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><UsersIcon className="h-6 w-6" /></span>
            <span className="text-sm font-medium">Users</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><CreditCardIcon className="h-6 w-6" /></span>
            <span className="text-sm font-medium">Payment</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><DocumentReportIcon className="h-6 w-6" /></span>
            <span className="text-sm font-medium">Report</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><CogIcon className="h-6 w-6" /></span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;