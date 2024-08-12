

import { Uside } from '@/pages/User/Uside'
import { Utop } from '@/pages/User/Utop'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserLayout = () => {
  return (
  <div className='h-screen w-screen flex flex-row overflow-hidden'>
    <div className=' h-[10rem] w-1/6'>
       <Uside/>
    </div>
    <div className='flex flex-col w-5/6 '>
      <div className=''>
        <Utop/>
      </div>
      <div className='pl-[2rem] h-full'>
        <Outlet/>
      </div>
    </div>
  </div>
)
}


