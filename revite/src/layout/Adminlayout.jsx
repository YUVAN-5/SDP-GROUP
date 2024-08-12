import Sidebar from '../components/admin/Sidebar';
import Topbar from '../components/admin/Topbar';
import { Outlet } from 'react-router-dom';

const Adminlayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar adminName="Admin Name" />
        <div className="mt-16 p-4 overflow-y-scroll h-[calc(100vh-4rem)] bg-lightBg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Adminlayout;
