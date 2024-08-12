

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Line, Bar, Pie } from 'react-chartjs-2';
// // import 'chart.js/auto';
// // import { useTheme } from '../../components/ThemeProvider';
// // import { ModeToggle } from '@/components/ModeToggle';
// // import Avatar from '../../assets/img/avatar.png';

// // const Dashboard = () => {
// //   const { theme } = useTheme();

// //   // Dummy Data
// //   const lineChartData = {
// //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// //     datasets: [
// //       {
// //         label: 'Payments',
// //         data: [65, 59, 80, 81, 56, 55, 40],
// //         fill: false,
// //         backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
// //         borderColor: 'rgba(255, 159, 64, 1)', // Orange color
// //       },
// //     ],
// //   };

// //   const barChartData = {
// //     labels: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
// //     datasets: [
// //       {
// //         label: 'Properties Value',
// //         data: [500000, 350000, 450000, 600000, 700000],
// //         backgroundColor: 'rgba(255, 159, 64, 0.6)', // Orange color
// //       },
// //     ],
// //   };

// //   const pieChartData = {
// //     labels: ['Residential', 'Commercial', 'Industrial'],
// //     datasets: [
// //       {
// //         data: [55, 30, 15],
// //         backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
// //       },
// //     ],
// //   };

// //   const chartOptions = {
// //     maintainAspectRatio: false,
// //     responsive: true,
// //   };

// //   return (
// //     <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} h-screen`}>
     
// //       <div className="fixed top-0 left-0 bg-black text-white w-64 h-full py-7 px-2 dark:bg-gray-800">
// //         <div className="text-white flex items-center space-x-2 px-4">
// //           <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 200 100">
// //             <rect x="10" y="30" width="20" height="70" fill="#3498db" />
// //             <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
// //             <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
// //             <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
// //             <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
// //             {/* <text x="150" y="95" fontFamily="Arial, sans-serif" fontSize="60" fill="#FFFFFF"></text> */}
// //           </svg>
// //             <div className="text-white flex items-center space-x-2 px-4">
// //           <span className="text-2xl font-bold">SKYSCRAPER</span>
// //         </div>
// //         </div>
// //         <nav className="mt-6">
// //           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Overview</Link>
// //           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">Properties</Link>
// //           <Link to="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500">Agents</Link>
// //           <Link to="/" className="block py-2.5 px-4 mt-60 rounded transition duration-200 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-800">LOGOUT</Link>
// //         </nav>
        
// //       </div>

// //       {/* Fixed Topbar */}
// //       <div className="fixed top-0 left-64 right-0 bg-white dark:bg-gray-900 p-4 shadow-md z-10">
// //         <div className="flex justify-between items-center">
// //           <h1 className="text-3xl font-bold"></h1>
// //           <div className="flex items-center">
// //             <span className="mr-3 text-gray-700 dark:text-gray-300">ADMIN</span>
// //             <img className="w-10 h-10 rounded-full" src={Avatar} alt="Avatar" />
// //             <ModeToggle />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content Area */}
// //       <div className="ml-64 mt-16 flex-1 p-10 overflow-y-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h3 className="text-xl font-semibold">Total Properties</h3>
// //             <p className="text-2xl">150</p>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h3 className="text-xl font-semibold">Active Agents</h3>
// //             <p className="text-2xl">20</p>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h3 className="text-xl font-semibold">Recent Sales</h3>
// //             <p className="text-2xl">5</p>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h3 className="text-xl font-semibold">Total Revenue</h3>
// //             <p className="text-2xl">$1,200,000</p>
// //           </div>
// //         </div>
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">Payments</h2>
// //             <div className="relative h-64">
// //               <Line data={lineChartData} options={chartOptions} />
// //             </div>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">Properties Overview</h2>
// //             <div className="relative h-64">
// //               <Bar data={barChartData} options={chartOptions} />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">User Accounts</h2>
// //             <table className="w-full text-gray-700 dark:text-gray-300">
// //               <thead>
// //                 <tr>
// //                   <th className="py-2">UserId</th>
// //                   <th className="py-2">Name</th>
// //                   <th className="py-2">payment</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 <tr>
// //                   <td className="py-2">1</td>
// //                   <td className="py-2">user-1</td>
// //                   <td className="py-2">done</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="py-2">2</td>
// //                   <td className="py-2">user-2</td>
// //                   <td className="py-2">pending..</td>
// //                 </tr>
// //                 <tr>
// //                   <td className="py-2">3</td>
// //                   <td className="py-2">user-3</td>
// //                   <td className="py-2">done</td>
// //                 </tr>
               
// //               </tbody>
// //             </table>
// //           </div>
// //           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
// //             <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
// //             <ul className="text-gray-700 dark:text-gray-300">
// //               <li className="my-2">User 1 added a new property</li>
// //               <li className="my-2">User 2 updated property status</li>
// //               <li className="my-2">User 3 made a payment</li>
// //             </ul>
// //           </div>
// //         </div>
// //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
// //           <h2 className="text-xl font-semibold mb-4">Property Types</h2>
// //           <div className="relative h-64">
// //             <Pie data={pieChartData} options={chartOptions} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { useTheme } from '../../components/ThemeProvider';
// import { ModeToggle } from '@/components/ModeToggle';
// import Avatar from '../../assets/img/avatar.png';
// import PropertyManagement from '../../components/admin/PropertyManagement';

// const Dashboard = () => {
//   const { theme } = useTheme();

//   // Dummy Data
//   const lineChartData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//     datasets: [
//       {
//         label: 'Payments',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         backgroundColor: 'rgba(255, 159, 64, 0.6)', 
//         borderColor: 'rgba(255, 159, 64, 1)', 
//       },
//     ],
//   };

//   const barChartData = {
//     labels: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
//     datasets: [
//       {
//         label: 'Properties Value',
//         data: [500000, 350000, 450000, 600000, 700000],
//         backgroundColor: 'rgba(255, 159, 64, 0.6)', }
//     ],
//   };

//   const pieChartData = {
//     labels: ['Residential', 'Commercial', 'Industrial'],
//     datasets: [
//       {
//         data: [55, 30, 15],
//         backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
//       },
//     ],
//   };

//   const chartOptions = {
//     maintainAspectRatio: false,
//     responsive: true,
//   };

//   return (
//     <div className={`flex ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} h-screen`}>
     
//       <div className="fixed top-0 left-0 bg-black text-white w-64 h-full py-7 px-2 dark:bg-gray-800">
//         <div className="text-white flex items-center space-x-2 px-4">
//           <svg xmlns="http://www.w3.org/2000/svg" width="60" height="80" viewBox="0 0 200 100">
//             <rect x="10" y="30" width="20" height="70" fill="#3498db" />
//             <rect x="40" y="20" width="20" height="80" fill="#2980b9" />
//             <rect x="70" y="10" width="20" height="90" fill="#2ecc71" />
//             <rect x="100" y="40" width="20" height="60" fill="#27ae60" />
//             <rect x="130" y="50" width="20" height="50" fill="#f39c12" />
//             {/* <text x="150" y="95" fontFamily="Arial, sans-serif" fontSize="60" fill="#FFFFFF"></text> */}
//           </svg>
//             <div className="text-white flex items-center space-x-2 px-4">
//           <span className="text-2xl font-bold">SKYSCRAPER</span>
//         </div>
//       </div>
//         <nav className="mt-10">
//           <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
//             Dashboard
//           </Link>
//           <Link to="/dashboard/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
//             Profile
//           </Link>
//           <Link to="/dashboard/real-estate" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
//             Real Estate
//           </Link>
//           <Link to="/dashboard/settings" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
//             Settings
//           </Link>
//         </nav>
//       </div>

//       <div className="flex-1 p-10 overflow-y-auto ml-64 dark:bg-gray-900">
//         <header className="flex justify-between items-center mb-10">
//           <h1 className="text-4xl font-bold">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <div className="hidden sm:block">
//               <ModeToggle />
//             </div>
//             <img src={Avatar} alt="Avatar" className="w-12 h-12 rounded-full" />
//           </div>
//         </header>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Payments</h2>
//             <div className="h-64">
//               <Line data={lineChartData} options={chartOptions} />
//             </div>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Properties Value</h2>
//             <div className="h-64">
//               <Bar data={barChartData} options={chartOptions} />
//             </div>
//           </div>
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
//             <h2 className="text-2xl font-bold mb-4">Property Categories</h2>
//             <div className="h-64">
//               <Pie data={pieChartData} options={chartOptions} />
//             </div>
//           </div>
//         </div>
//         <PropertyManagement />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
//////////////////////////////////////////////

// import React from 'react';
// import { FiPieChart, FiActivity, FiBarChart } from 'react-icons/fi';

// const Dashboard = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <FiPieChart className="text-primary mb-4" />
//           <h2 className="text-lg font-semibold">Total Properties</h2>
//           <p className="text-2xl font-bold">120</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <FiActivity className="text-primary mb-4" />
//           <h2 className="text-lg font-semibold">Active Users</h2>
//           <p className="text-2xl font-bold">300</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <FiBarChart className="text-primary mb-4" />
//           <h2 className="text-lg font-semibold">Appointments Today</h2>
//           <p className="text-2xl font-bold">15</p>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">Performance</h2>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <img src="/performance-chart.png" alt="Performance Chart" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

//////////////////////

// components/Dashboard.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/dashboard');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchStats();
  }, []);

  if (!stats) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Render dashboard data here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Total Properties</h2>
          <p className="text-2xl font-bold">{stats.totalProperties}</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Dashboard;


