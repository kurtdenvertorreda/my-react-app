// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import Modal from './components/Modal/Modal';
import { fetchUsers, createUser, updateUser, deleteUser } from './services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    fetchUsers()
      .then(response => {
        setUsers(response.data);
        console.log('Users fetched successfully', { status: response.status });
      })
      .catch(error => {
        console.error('Error fetching users:', error.response?.status, error.message);
        toast.error('Failed to fetch users');
      });
  }, []);

// Calculate current users
const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleAddUser = async (userData) => {
    try {
      const response = await createUser(userData);
      setUsers([...users, response.data]);
      console.log('User added successfully', { status: response.status, data: response.data });
      toast.success('User added successfully');
      handleCloseModal();
    } catch (error) {
      console.error('Error adding user:', error.response?.status, error.message);
      toast.error('Failed to add user');
    }
  };

  const handleUpdateUser = async (id, updatedUserData) => {
    try {
      const response = await updateUser(id, updatedUserData);
      setUsers(users.map(user => user.id === id ? { ...user, ...response.data } : user));
      console.log('User updated successfully', { status: response.status, data: response.data });
      toast.success('User updated successfully');
      handleCloseModal();
    } catch (error) {
      console.error('Error updating user:', error.response?.status, error.message);
      toast.error('Failed to update user');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      console.log('User deleted successfully', { status: response.status });
      toast.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error.response?.status, error.message);
      toast.error('Failed to delete user');
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
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-gray-700 text-3xl font-medium">Users List</h3>
              <button 
                onClick={handleAddNewUser}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                ADD NEW USER
              </button>
            </div>
            <UserList 
              users={currentUsers} 
              onEditUser={handleEditUser} 
              onDeleteUser={handleDeleteUser}
              usersPerPage={usersPerPage}
              totalUsers={users.length}
              paginate={paginate}
              currentPage={currentPage}
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
      <ToastContainer />
    </div>
  );
};

export default App;
