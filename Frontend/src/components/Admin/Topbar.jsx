import React from 'react';
import { Bell, Home } from 'lucide-react'; // Import the home and notification icons
import { ModeToggle } from '../mode-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className='sticky top-0 h-[6vh] w-full flex justify-center items-center shadow-sm shadow-primary z-10 bg-background'>
      <div className='w-[95%] h-full flex items-center justify-end gap-4'>
        {/* Right corner: Home, Notification, ModeToggle, and Avatar */}
        <Home size={20} className='cursor-pointer' onClick={() => navigate('/')} />
        <Bell size={20} className='cursor-pointer' />
        <ModeToggle className='border-0 focus:outline-none focus:shadow-none' />
        <div className='flex flex-col items-center'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
