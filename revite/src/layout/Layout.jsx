import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTheme } from '../../components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';
import Avatar from '../../assets/img/avatar.png';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} h-screen`}>
      <div className="fixed top-0 left-0 bg-black text-white w-64 h-full py-7 px-2 dark:bg-gray-800">
        <div className="text-white flex items-center space-x-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 200 100">
            <rect x="10" y="30" width="20" height="70" fill="#3498db" />
            <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
            <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
            <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
            <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
          </svg>
          <span className="text-2xl font-bold">SKYSCRAPER</span>
        </div>
        <nav className="mt-6">
          <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Dashboard</Link>
          <Link to="/properties" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">Properties</Link>
          <Link to="/agents" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Agents</Link>
          <Link to="/" className="block py-2.5 px-4 mt-60 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">LOGOUT</Link>
        </nav>
      </div>

      <div className="fixed top-0 left-64 right-0 bg-white dark:bg-gray-900 p-4 shadow-md z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold"></h1>
          <div className="flex items-center">
            <span className="mr-3 text-gray-700 dark:text-gray-300">ADMIN</span>
            <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="ml-64 mt-16 flex-1 p-10 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
