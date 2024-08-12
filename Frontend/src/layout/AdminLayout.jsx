import Leftbar from '@/components/Admin/Leftbar';
import Topbar from '@/components/Admin/Topbar';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {User} from '@/services/user';
import { authService } from '@/services/auth'; // Ensure this is correctly imported as well

const AdminLayout = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState(null);

  const checkAuth = async () => {
    if (!authService.isLoggedIn() || authService.getUserRole() !== 'ADMIN') {
      Navigate('/login');
    } else {
      const data = await User.getUsername();
      setUsername(data);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [Navigate]);

  return (
    <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
      <Leftbar />
      <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        <Topbar />
        <div className='h-[92vh] w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
