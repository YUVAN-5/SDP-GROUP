
import Footer from '@/pages/shared/Footer'
import { Navbar } from '@/pages/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
  return (
    <div >
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
