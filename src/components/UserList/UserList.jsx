// src/components/UserList/UserList.js
import React from 'react';
import UserListItem from './UserListItem';

const UserList = ({ users, onEditUser, onDeleteUser, usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="w-full h-16 border-gray-200 bg-gray-50  border-t py-8">
              <th className="text-left text-gray-50">Icon</th>
              <th className="text-left pl-4">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Address</th>
              <th className="text-left">Company</th>
              <th className="text-left text-gray-50">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserListItem 
                key={user.id} 
                user={user} 
                onEdit={() => onEditUser(user)} 
                onDelete={() => onDeleteUser(user.id)} 
                index={index}  // Pass index to UserListItem for alternating row background
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-4">
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number ? 'bg-yellow-500 text-white' : 'bg-gray-200'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
