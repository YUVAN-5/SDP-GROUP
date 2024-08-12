

import { Search, Edit, Trash, Save, X, Plus } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Auser = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', location: '', email: '', phone: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', location: '', email: '', phone: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/auth/get');
      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        console.error('Expected an array but got:', response.data);
        setUsers([]); 
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    }
  };

  const handleDelete = async (index) => {
    try {
      const user = users[index];
      await axios.delete(`/api/auth/${user.email}`); 
      setUsers(users.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(users[index]);
  };

  const handleSave = async () => {
    try {
      const updatedUser = { ...formData };
      await axios.put(`/api/auth/${updatedUser.id}`, updatedUser); // Replace with your API endpoint
      const newUsers = [...users];
      newUsers[editingIndex] = updatedUser;
      setUsers(newUsers);
      setEditingIndex(null);
      setFormData({ name: '', location: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = async () => {
    try {
      const response = await axios.post('/api/auth/register', newUser); // Replace with your API endpoint
      setUsers([...users, response.data]);
      setNewUser({ name: '', location: '', email: '', phone: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mt-[2rem] mb-4">
        <div className="relative w-full max-w-md ml-[7rem]">
          <input
            type="text"
            className="w-[21rem] h-[50px] px-4 border border-blue-500 focus:outline-none rounded"
            placeholder="Search by Name, Location"
          />
          <button className="absolute h-full w-[50px] px-4 border border-blue-500 bg-blue-600 text-white hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-black rounded-r">
            <i><Search /></i>
          </button>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded ml-[23rem] hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="mr-2" /> Add User
        </button>
      </div>
      <table className="ml-[7rem] min-w-[60rem] bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white text-lg">
            <th className="py-4 px-4 border-b border-gray-300 text-center">S.No</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Name</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Location</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Email</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Phone</th>
            <th className="py-4 px-4 border-b border-gray-300 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200">
              <td className="py-4 px-4 border-b border-gray-300 text-center">{index + 1}</td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-1 rounded"
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="border p-1 rounded"
                  />
                ) : (
                  user.location
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-1 rounded"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center">
                {editingIndex === index ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-1 rounded"
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td className="py-4 px-4 border-b border-gray-300 text-center flex justify-center space-x-2">
                {editingIndex === index ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    >
                      <Save size={20} />
                    </button>
                    <button
                      onClick={() => setEditingIndex(null)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <X size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-green-500 hover:text-green-700 transition-colors duration-200"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash size={20} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded w-[25rem] shadow-lg">
            <h2 className="text-lg mb-4">Add New User</h2>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={newUser.name}
              onChange={handleNewUserChange}
              className="border p-2 mr-2 rounded w-full mb-2"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={newUser.location}
              onChange={handleNewUserChange}
              className="border p-2 mr-2 rounded w-full mb-2"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={newUser.email}
              onChange={handleNewUserChange}
              className="border p-2 mr-2 rounded w-full mb-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={newUser.phone}
              onChange={handleNewUserChange}
              className="border p-2 mr-2 rounded w-full mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleAddUser}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auser;




