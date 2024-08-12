import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

const UserTopbar = ({ adminName, onThemeToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    onThemeToggle();
  };

  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-primary-lightBg dark:bg-primary-darkBg flex items-center justify-between px-6">
      <div className="flex items-center">
        <FaSearch className="mr-4 text-primary-lightText dark:text-primary-darkText" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none placeholder-primary-lightText dark:placeholder-primary-darkText"
        />
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-primary-lightText dark:text-primary-darkText">{adminName}</span>
        <div onClick={handleThemeToggle}>
          {darkMode ? <FaSun className="cursor-pointer" /> : <FaMoon className="cursor-pointer" />}
        </div>
      </div>
    </div>
  );
};

export default UserTopbar;
