import { Link } from 'react-router-dom';
import { FaUserCircle, FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const UserSidebar = () => {
  return (
    <div className="fixed h-full w-64 bg-primary-darkBg text-primary-darkText flex flex-col justify-between">
      <div>
        <div className="flex items-center p-4">
          <FaUserCircle className="text-4xl" />
          <span className="ml-2 text-2xl">SKYSCRAPER</span>
        </div>
        <nav className="flex flex-col p-4">
          <Link to="/user/profile" className="flex items-center mb-4 hover:text-primary-secondary">
            <FaUserCircle className="mr-3" /> Profile
          </Link>
          <Link to="/user/my-properties" className="flex items-center mb-4 hover:text-primary-secondary">
            <FaHome className="mr-3" /> My Properties
          </Link>
          <Link to="/user/agents" className="flex items-center mb-4 hover:text-primary-secondary">
            <FaUsers className="mr-3" /> Agents
          </Link>
        </nav>
      </div>
      <div className="p-4">
        <Link to="/logout" className="flex items-center hover:text-primary-secondary">
          <FaSignOutAlt className="mr-3" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
