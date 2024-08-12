import React from 'react'
import Navbar from '@/components/web/Navbar'
import Footer from '@/components/web/Footer'
import { Outlet } from 'react-router-dom'
const weblayout = () => {
  return (
    <div className='h-screen w-screen overflow-x-auto justify-center items-center p-0 m-0'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default weblayout
