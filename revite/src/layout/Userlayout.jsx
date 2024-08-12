import React from 'react'
import UserSidebar from '@/pages/user/UserSidebar';
import UserTopbar from '@/pages/user/UserTopbar';
import { Outlet } from 'react-router-dom';

const userlayout = () => {
  return (
    <div className="flex">
      <UserSidebar/>
      <div className="flex-1 ml-64">
        <UserTopbar />
        <div className="mt-16 p-4 overflow-y-scroll h-[calc(100vh-4rem)] bg-lightBg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default userlayout;
