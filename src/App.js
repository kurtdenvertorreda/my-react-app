// App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import { fetchUsers, createUser, updateUser, deleteUser } from './services/Api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = async (userData) => {
    try {
      const response = await createUser(userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (id, updatedUserData) => {
    try {
      await updateUser(id, updatedUserData);
      setUsers(users.map(user => user.id === id ? { ...user, ...updatedUserData } : user));
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Users List</h3>
            <UserForm 
              addUser={handleAddUser} 
              updateUser={handleUpdateUser} 
              selectedUser={selectedUser} 
              setSelectedUser={setSelectedUser} 
            />
            <UserList 
              users={users} 
              setSelectedUser={setSelectedUser} 
              deleteUser={handleDeleteUser} 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;