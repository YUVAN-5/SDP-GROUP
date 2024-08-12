// import { Link } from 'react-router-dom'; 
// import { FaHome, FaEnvelope, FaBuilding, FaUsers, FaUserTie, FaCalendarAlt, FaStar, FaSignOutAlt } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="fixed top-0 left-0 h-full w-64 bg-darkBg text-darkText flex flex-col  justify-between p-4 ">
//       <div>
//         <div className="text-2xl font-bold mb-8">SKYSCRAPER</div>
//         <nav>
//           <ul className="space-y-8">
//             <li>
//               <Link to="/dashboard" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaHome />
//                 <span>Dashboard</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/mails" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaEnvelope />
//                 <span>Mails</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/property" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaBuilding />
//                 <span>Property</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/users" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaUsers />
//                 <span>Users</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/agents" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaUserTie />
//                 <span>Agents</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/appointments" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaCalendarAlt />
//                 <span>Appointments</span>
//               </Link>
//             </li>
//             <li>
//               <Link to="/reviews" className="flex items-center space-x-2 hover:text-primary transition">
//                 <FaStar />
//                 <span>Reviews</span>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div>
//         <Link to="/logout" className="flex items-center space-x-2 hover:text-secondary transition">
//           <FaSignOutAlt />
//           <span>Logout</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiMail, FiList, FiUsers, FiUser, FiCalendar, FiStar, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-darkBg text-darkText flex flex-col">
      <div className="flex items-center justify-center h-20 bg-secondary">
        <span className="text-2xl font-bold">SKYSCRAPER</span>
      </div>
      <div className="flex-grow">
        <nav className="mt-10">
          <Link to="/dashboard" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiHome className="mr-3" />
            Dashboard
          </Link>
          <Link to="/mails" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiMail className="mr-3" />
            Mails
          </Link>
          <Link to="/properties" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiList className="mr-3" />
            Property
          </Link>
          <Link to="/users" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiUsers className="mr-3" />
            Users
          </Link>
          <Link to="/agents" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiUser className="mr-3" />
            Agents
          </Link>
          <Link to="/appointments" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiCalendar className="mr-3" />
            Appointments
          </Link>
          <Link to="/reviews" className="flex items-center py-3 px-6 hover:bg-primary hover:text-white">
            <FiStar className="mr-3" />
            Reviews
          </Link>
        </nav>
      </div>
      <div className="mb-4">
        <Link to="/logout" className="flex items-center py-3 px-6 hover:bg-secondary hover:text-white">
          <FiLogOut className="mr-3" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
