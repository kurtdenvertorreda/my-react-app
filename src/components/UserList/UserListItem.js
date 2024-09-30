// src/components/UserList/UserListItem.js
import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

const UserListItem = ({ user, onEdit, onDelete }) => {
  return (
    <tr className="h-24 border-gray-300 border-b">
      <td className="pl-4">{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
      <td>{user.company.name}</td>
      <td>
        <button 
          onClick={onEdit}
          className="text-yellow-500 hover:text-blue-600 mr-2"
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button 
          onClick={onDelete}
          className="text-yellow-500 hover:text-red-600"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

export default UserListItem;