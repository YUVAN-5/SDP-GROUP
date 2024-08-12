import React, { useState } from 'react';
import { Edit, Trash2, Plus, X } from 'lucide-react';

const AdminClient = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    registrationDate: ''
  });

  const roles = ['Owner', 'Tenant'];

  const handleAddUserClick = () => {
    setShowModal(true);
    setNewUser({
      ...newUser,
      role: roles[Math.floor(Math.random() * roles.length)]
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewUser({
      name: '',
      email: '',
      phone: '',
      role: '',
      registrationDate: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSaveUser = () => {
    const newUserWithInvoice = {
      ...newUser,
      invoice: `INV00${users.length + 1}`
    };
    setUsers([...users, newUserWithInvoice]);
    handleCloseModal();
  };

  return (
    <div className="relative">
      <div className={`p-6 min-h-screen ${showModal ? 'opacity-50 pointer-events-none' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Users</h1>
          <button
            onClick={handleAddUserClick}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            <Plus className="mr-2" />
            Add
          </button>
        </div>
        <div className="w-full border-blue-500 rounded-lg overflow-hidden">
          <table className="min-w-full bg-background">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Invoice</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Registration Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.invoice}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{user.registrationDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg overflow-hidden w-1/3">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-semibold text-black">Add User</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <X />
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="text-black mt-1 block w-full h-10 rounded-md shadow-md bg-gray-100  focus:ring-opacity-50 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="text-black mt-1 block w-full h-10 rounded-md shadow-md bg-gray-100 focus:ring-opacity-50 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                    className="text-black mt-1 block w-full h-10 rounded-md shadow-md bg-gray-100 focus:ring-opacity-50 focus:ring-2 focus:ring-green-700 focus:outline-none"
                    pattern="\d*"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">Role</label>
                  <select
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    className="text-black mt-1 block w-full h-10 rounded-md shadow-md bg-gray-100 focus:ring-opacity-50 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  >
                    {roles.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black">Registration Date</label>
                  <input
                    type="date"
                    name="registrationDate"
                    value={newUser.registrationDate}
                    onChange={handleInputChange}
                    className="text-black mt-1 block w-full h-10 rounded-md shadow-md bg-gray-100 focus:ring-opacity-50 focus:ring-2 focus:ring-green-700 focus:outline-none"
                  />
                </div>
              </form>
            </div>
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminClient;
