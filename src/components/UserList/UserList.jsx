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
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 border-gray-300 border-b py-8">
              <th className="text-left text-white">Icon</th>
              <th className="text-left pl-4">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Address</th>
              <th className="text-left">Company</th>
              <th className="text-left text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserListItem 
                key={user.id} 
                user={user} 
                onEdit={() => onEditUser(user)} 
                onDelete={() => onDeleteUser(user.id)} 
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