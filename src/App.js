// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import Modal from './components/Modal/Modal';
import { fetchUsers, createUser, updateUser, deleteUser } from './services/Api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleAddUser = async (userData) => {
    try {
      const response = await createUser(userData);
      setUsers([...users, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleUpdateUser = async (id, updatedUserData) => {
    try {
      await updateUser(id, updatedUserData);
      setUsers(users.map(user => user.id === id ? { ...user, ...updatedUserData } : user));
      handleCloseModal();
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

  const handleAddNewUser = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onAddNewUser={handleAddNewUser} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Users List</h3>
            <UserList 
              users={users} 
              onEditUser={handleEditUser} 
              onDeleteUser={handleDeleteUser} 
            />
          </div>
        </main>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <UserForm 
          addUser={handleAddUser} 
          updateUser={handleUpdateUser} 
          selectedUser={selectedUser} 
          onClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export default App;