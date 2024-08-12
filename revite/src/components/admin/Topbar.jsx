// import { FaSearch, FaMoon, FaSun } from 'react-icons/fa';
// import { useState } from 'react';
// import { ModeToggle } from '../ModeToggle'

// const Topbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={`flex items-center justify-between p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
//       <div className="flex items-center w-full">
//         <FaSearch className="text-gray-400 mr-3" />
//         <input
//           type="text"
//           placeholder="Search"
//           className={`p-2 w-full rounded-md ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'}`}
//         />
//       </div>
//       <div className="flex items-center">
//         <img
//           src="https://via.placeholder.com/150"
//           alt="Avatar"
//           className="w-10 h-10 rounded-full mr-3"
//         />
//         <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-semibold mr-5`}>Admin</span>
//         {/* <button onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
//         </button> */}
//         <div className="hidden sm:block">
//               <ModeToggle />
//             </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import { ModeToggle } from '../ModeToggle';

const Topbar = () => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-lightBg text-lightText flex items-center justify-between px-6">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
        />
      </div>
      <div className="flex items-center">
        <div className="flex items-center space-x-4">
          <img src="/avatar.png" alt="Admin Avatar" className="w-8 h-8 rounded-full" />
          <span>Admin Name</span>
          <button className="ml-4 p-2 rounded-full bg-primary text-white">
            <FiUser />
          </button>
        </div>
        <ModeToggle/>
      </div>
    </div>
  );
};

export default Topbar;
