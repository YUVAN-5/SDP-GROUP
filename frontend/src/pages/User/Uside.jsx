
import React from 'react';
import { Home, Info, PenLine, Mail, Star, User, ShieldCheck } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const Uside = () => {

  const navigate = useNavigate();
   const handleLogout =()=>{
        localStorage.clear();
        navigate('/');
   }

  return (
    <div className="flex">
      <div className="w-72 bg-neutral-300 fixed h-full overflow-x-hidden pt-2.5">
        <div className='flex justify-center items-center flex-col gap-3'>
          <Avatar className='h-[7rem] w-[7rem]'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <h6 className='text-xl font-bold'>User Name</h6>
        </div>

        <hr className="border-gray-400 my-4 mx-2.5" />

        <div className='mt-4'>
          <NavLink to='/udash'>
          <button className="text-black outline-none border-none w-11/12 ml-2.5 rounded-lg h-16 px-5 text-xl font-semibold hover:bg-gray-600 hover:text-white mb-1">
            <div className="flex items-center">
              <div className=""><Home /></div>
              <div className="pl-5">Dashboard</div>
            </div>
          </button>
          </NavLink>
          <NavLink to='/ucart'>
          <button className="bg-neutral-300 text-black outline-none border-none w-11/12 ml-2.5 rounded-lg h-16 px-5 text-xl font-semibold hover:bg-gray-600 hover:text-white mb-1" onClick={() => { Toggle() }}>
            <div className="flex items-center">
              <div className=""><Info /></div>
              <div className="pl-5">My&nbsp;Cart</div>
            </div>
          </button>
          </NavLink>
          <NavLink to='/urev'>
          <button className="bg-neutral-300 text-black outline-none border-none w-11/12 ml-2.5 rounded-lg h-16 px-5 text-xl font-semibold hover:bg-gray-600 hover:text-white mb-1">
            <div className="flex items-center">
              <div className=""><Star /></div>
              <div className="pl-5">Write&nbsp;Reviews</div>
            </div>
          </button>
          </NavLink>
          <button className="bg-neutral-300 text-black outline-none border-none w-11/12 ml-2.5 rounded-lg h-16 px-5 text-xl font-semibold hover:bg-gray-600 hover:text-white mb-1">
            <div className="flex items-center">
              <div className=""><Mail /></div>
              <div className="pl-5">Messages</div>
            </div>
          </button>
          <div className="mt-[9rem]">
            <NavLink to='/'>
            <button className="bg-neutral-300 text-black outline-none border-none w-11/12 ml-2.5 rounded-lg h-16 px-5 text-xl font-semibold hover:text-white hover:bg-red-800">
              <div className="flex items-center">
                <div className="pb-1.5"><User /></div>
                <div className="pl-5">Logout</div>
              </div>
            </button>
            </NavLink>
            <NavLink to='/alog'>
            <button className="bg-neutral-300 text-black outline-none border-none w-11/12 ml-2.5 rounded-lg h-16 px-5 text-xl font-semibold hover:text-white hover:bg-black" onClick={handleLogout}>
              <div className="flex items-center">
                <div className="pb-1.5"><ShieldCheck /></div>
                <div className="pl-5">Admin</div>
              </div>
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
