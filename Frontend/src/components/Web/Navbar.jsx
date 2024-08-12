import React from 'react';
import { ModeToggle } from '../mode-toggle';
import { NavLink } from 'react-router-dom';
import { Home, LogIn, UserPlus, Building, UserCheck, FactoryIcon, Trello } from 'lucide-react'; // Importing icons from Lucide React

const Navbar = () => {
    const LinksData = [
        {
            title: 'Home',
            link: '/',
            icon: <Home className="mr-2 w-4 h-4" /> // Increased margin-right
        },
        {
            title: 'Login',
            link: '/login',
            icon: <LogIn className="mr-2 w-4 h-4" /> // Increased margin-right
        },
        {
            title: 'Register',
            link: '/register',
            icon: <UserPlus className="mr-2 w-4 h-4" /> // Increased margin-right
        },
        {
            title: 'Properties',
            link: '/user/properties',
            icon: <Building className="mr-2 w-4 h-4" /> // Increased margin-right
        },
        {
            title: 'Agents',
            link: '/user/agents',
            icon: <UserCheck className="mr-2 w-4 h-4" /> // Increased margin-right
        },
    ];

    return (
        <nav className='w-full h-16 flex flex-row justify-between items-center border-b-2 border-primary px-4 fixed top-0 left-0 bg-background z-10'>
            <div className='flex items-center h-full'>
                <span className='text-2xl font-bold flex items-center'>
                    <Trello className="mr-2 w-6 h-6 text-orange-500" /> 
                    estateEra
                </span>
            </div>
            <ul className='flex flex-row items-center font-medium text-sm gap-4'>
                {LinksData.map((data, index) => (
                    <li key={index} className='list-none'>
                        <NavLink
                            to={data.link}
                            className={({ isActive }) => isActive ? "text-primary flex items-center" : "flex items-center"}
                        >
                            {data.icon} {data.title}
                        </NavLink>
                    </li>
                ))}
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
