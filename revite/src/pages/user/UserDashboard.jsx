import React from 'react';
import { Link } from 'react-router-dom';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { useTheme } from '../../components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';
import Avatar from '../../assets/img/avatar.png';

const UserDashboard = () => {
  const { theme } = useTheme();

  // Dummy Data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Payments',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const barChartData = {
    labels: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    datasets: [
      {
        label: 'Property Values',
        data: [500000, 350000, 450000, 600000, 700000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const pieChartData = {
    labels: ['Residential', 'Commercial', 'Industrial'],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 bg-black text-white w-64 h-full py-7 px-2 dark:bg-gray-800">
        <div className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-extrabold">SKYSCRAPER</span>
        </div>
        <nav className="mt-6">
          <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Overview</Link>
          <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Properties</Link>
          {/* <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Reports</Link> */}
          {/* <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Settings</Link> */}
          <Link to="/" className="block py-2.5 px-4 mt-96 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">LOGOUT</Link>
          </nav>
      </div>

      {/* Fixed Topbar */}
      <div className="fixed top-0 left-64 right-0 bg-white dark:bg-gray-900 p-4 shadow-md z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold"></h1>
          <div className="flex items-center">
            <span className="mr-3 text-gray-700 dark:text-gray-300">Hello, Yuvan</span>
            <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 mt-16 flex-1 p-10 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Properties</h3>
            <p className="text-2xl">5</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Active Listings</h3>
            <p className="text-2xl">3</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Recent Sales</h3>
            <p className="text-2xl">4</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-2xl">$2,300,000</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payments Overview</h2>
            <div className="relative h-64">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Property Values</h2>
            <div className="relative h-64">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Property Types Distribution</h2>
          <div className="relative h-64">
            <Pie data={pieChartData} options={chartOptions} />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul className="text-gray-700 dark:text-gray-300">
            <li className="my-2">Added new property: Ocean View House</li>
            <li className="my-2">Updated status for: Downtown Apartment</li>
            <li className="my-2">Sold property: Mountain Cabin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
