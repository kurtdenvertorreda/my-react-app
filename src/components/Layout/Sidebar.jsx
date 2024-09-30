// components/Layout/Sidebar.js
import React from 'react';
import { HomeIcon, AcademicCapIcon, UsersIcon, CreditCardIcon, DocumentReportIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-[#f3e8db] text-black h-screen">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-18 mt-5">
        <h1 className="text-2xl font-bold uppercase">CRUD Operations</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center py-6">
      <img
        src="https://s3-alpha-sig.figma.com/img/7f02/c446/9c5672219055d43b0ffb2caf907f4b0d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FkrogzTow0uvxTYZItvcTlAA7k8DZHTEVXBFJX9TSeg0TvN74U8NBZDFUj0zuG04zAWxLgQ77vkLNmgovNf1ENqnoPXfDik1wgQicnAAQRoPnbm6mmZMJ6aZz0XIepPM8byYFwPbNbagUrUNqGSOwd9fZRw9tEonJoU-jff2klMGCS261rHhclrCyVuXpg7tEBdvhA9EkcruLiK51WC~4VoDbtjRA4zXMLgtU80TEh4AhgFuUhqIhTC3qtz7DZartxSz9d4EhcEyXDP7~zbIu0ID80IK2rI1jrnpqVMamOwdDmLwCIMYUjwrdRSQXHYgNm1EOOtTT6wDLcytRLn86g__" // Replace with your image URL
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
        />
        <h2 className="mt-4 text-xl font-semibold">Karthi Madesh</h2>
        <span className="text-yellow-500 font-medium">Admin</span>
        </div>

      {/* Menu Items */}
      <ul className="flex flex-col space-y-2">
        <li>
          <a href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-yellow-500 hover:text-white transition duration-300 rounded-md">
            <HomeIcon className="h-6 w-6 mr-3" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-yellow-500 hover:text-white transition duration-300 rounded-md">
            <AcademicCapIcon className="h-6 w-6 mr-3" />
            <span>Course</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-6 py-3 text-gray-500 bg-yellow-500 text-white rounded-md">
            <UsersIcon className="h-6 w-6 mr-3" />
            <span>Users</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-yellow-500 hover:text-white transition duration-300 rounded-md">
            <CreditCardIcon className="h-6 w-6 mr-3" />
            <span>Payment</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-yellow-500 hover:text-white transition duration-300 rounded-md">
            <DocumentReportIcon className="h-6 w-6 mr-3" />
            <span>Report</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-yellow-500 hover:text-white transition duration-300 rounded-md">
            <CogIcon className="h-6 w-6 mr-3" />
            <span>Settings</span>
          </a>
        </li>
      </ul>

      {/* Logout */}
      <div className="mt-auto">
        <a href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-yellow-500 hover:text-white transition duration-300 rounded-md">
          <LogoutIcon className="h-6 w-6 mr-3" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
