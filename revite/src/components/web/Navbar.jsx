import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle'
import Skyline from '../../assets/img/skylinelogo.webp'

const Navbar = () => {
    const Linksdata=[
        {
            title:'HOME',
            link:'/'
        },
        {
            title:'ABOUT',
            link:'/aboutus'
        },
        {
            title:'LOGIN',
            link:'/login'
        },
        {
            title:'PROPERTIES',
            link:'/property'
        },
        {
            title:'REGISTER',
            link:'/register'
        }
        
    ]
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center font-semibold border-b-2 border-orange-500 letter-spacing '>
    <div className='h-full w-3/4 flex flex-row p-20 items-center text-2xl '>
    {/* <img src={Skyline} className='w-48 h-20'/>  */}
        SKYSCRAPER
      </div>
    <div className='h-full w-3/4 flex flex-row justify-center items-center gap-20 '>
      {
        Linksdata.map((data,index)=>(
            <li key={index} className='list-none'>
                <NavLink to={data.link}>

                    {data.title}
                </NavLink>

            </li>
        ))
      }
      <ModeToggle/>

      </div>
    </div>
  )
}

export default Navbar

