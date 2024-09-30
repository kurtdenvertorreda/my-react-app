// src/components/UserList/UserListItem.js
import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';

const UserListItem = ({ user, onEdit, onDelete, index }) => {
  return (
    <tr className={`h-24 border-gray-300  rounded-lg ${
      index % 2 === 0 ? 'bg-white' : 'bg-transparent'
    }`}>
      <td className="pl-4 rounded-l-lg">
        <img 
          src="https://s3-alpha-sig.figma.com/img/7f02/c446/9c5672219055d43b0ffb2caf907f4b0d?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FkrogzTow0uvxTYZItvcTlAA7k8DZHTEVXBFJX9TSeg0TvN74U8NBZDFUj0zuG04zAWxLgQ77vkLNmgovNf1ENqnoPXfDik1wgQicnAAQRoPnbm6mmZMJ6aZz0XIepPM8byYFwPbNbagUrUNqGSOwd9fZRw9tEonJoU-jff2klMGCS261rHhclrCyVuXpg7tEBdvhA9EkcruLiK51WC~4VoDbtjRA4zXMLgtU80TEh4AhgFuUhqIhTC3qtz7DZartxSz9d4EhcEyXDP7~zbIu0ID80IK2rI1jrnpqVMamOwdDmLwCIMYUjwrdRSQXHYgNm1EOOtTT6wDLcytRLn86g__" 
          alt="User Icon" 
          className="h-10 w-10 rounded-lg mr-4 object-cover"
        />
      </td>
      <td className="pl-4">{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</td>
      <td>{user.company.name}</td>
      <td className="rounded-r-lg">
        <button 
          onClick={onEdit}
          className="text-yellow-500 hover:text-yellow-300 mr-2"
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
