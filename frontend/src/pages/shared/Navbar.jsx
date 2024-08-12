// import { ModeToggle } from '@/components/Mode-Toggle'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/images/logo1.png'

export const Navbar = () => {

    const links =[
        {
          title:'Buy',
          link:'/buy'
        },
        {
          title:'Rent',
          link:'/rent'
        },
        // {
        //   title:'Sell',
        //   link:'/sell'
        // },
        {
          title:'Agents',
          link:'/agent'
        }
       
    ]
    const Auth =[
        {
            title:'Login',
            link:'/login'
        },
        {
            title:'Register',
            link:'/register'
        }
    ]
  return (

    <div className='w-full h-[8vh] flex flex-row justify-center items-center sticky top-0 bg-white shadow-md z-50 '>
        <div className='w-2/6 flex flex-row items-center text-2xl font-bold '>
          <NavLink to='/'>
          <img src={logo} className="h-[5rem] w-[17rem] mr-2 ml-20" />
          </NavLink>
        </div>
        <div className='w-3/6 flex flex-row items-center text-xl font-bold gap-10 ml-60'>
        {
          links.map((data,index) => (
            <li key={index} className='list-none'>
                <NavLink to={data.link}>
                  {data.title}
                </NavLink>
               </li>
            )
        )}
        </div>
        <div className='w-1/6 flex flex-row  items-center text-xl font-bold gap-10 mr-20'>
        {
            Auth.map((data,index) => (
               <li key={index} className='list-none'>
                <NavLink to={data.link}>
                  {data.title}
                </NavLink>
               </li>
            )
        )}
        {/* <ModeToggle/> */}
        </div>
        

    </div>

  )

}
