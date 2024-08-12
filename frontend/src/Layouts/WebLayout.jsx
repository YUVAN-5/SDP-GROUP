import { Navbar } from '@/pages/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const WebLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
