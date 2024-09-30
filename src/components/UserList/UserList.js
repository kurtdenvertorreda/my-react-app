// components/UserList/UserList.js
import React from 'react';
import UserListItem from './UserListItem';

const UserList = ({ users, setSelectedUser, deleteUser }) => {
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full h-16 border-gray-300 border-b py-8">
              <th className="text-left pl-4">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Address</th>
              <th className="text-left">Company</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserListItem 
                key={user.id} 
                user={user} 
                setSelectedUser={setSelectedUser} 
                deleteUser={deleteUser} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
