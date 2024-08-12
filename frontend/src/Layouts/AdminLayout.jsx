
import { Aside } from '@/pages/Admin/Aside'
import { Atop } from '@/pages/Admin/Atop'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
  return (
  <div className='h-screen w-screen flex flex-row overflow-hidden'>
    <div className=' h-[10rem] w-1/6'>
       <Aside/>
    </div>
    <div className='flex flex-col w-5/6 '>
      <div className=''>
        <Atop/>
      </div>
      <div className='pl-[2rem] h-screen'>
        <Outlet/>
      </div>
    </div>
  </div>
)
}

