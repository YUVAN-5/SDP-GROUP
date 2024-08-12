import React from 'react';
import backg from '@/assets/images/bg2.png';

import { ArrowRight, HomeIcon, Search } from 'lucide-react';

export const Home = () => {

  const cards = [
    { title: 'Buy & Sell Property', description: 'Whether you’re seeking to buy or sell, our expert team in trade are with you every step  the process, ensuring a seamless procedure and the transparent communication at every stage.',img:'https://ik.imagekit.io/eg5dbqcea/ser1.png?updatedAt=1721977004252' },
    { title: 'Real Estate Investment', description: 'Based on our real estate expertise and leading market intelligence, we provide our clients with solutions to their Real Estate Investments.',img:'https://ik.imagekit.io/eg5dbqcea/ser2.png?updatedAt=1721977004636' },
    { title: 'Marketing  Management', description: 'Our team of qualified professionals will efficiently execute a project right from the ground up and give the best desired results.',img:'https://ik.imagekit.io/eg5dbqcea/ser3.png?updatedAt=1721977004255' },
    { title: 'Construction', description: 'Our endeavor is to deploy a quality team of construction workers in view of delivering on a stipulated time frame.',img:'https://ik.imagekit.io/eg5dbqcea/ser4.png?updatedAt=1721977004542' }
  ];

  return (
    <div className='overflow-y-hidden'>
      <section className='relative w-full h-[35rem]'>
        <img src={backg} className='w-full h-full object-cover ' alt="Background" />
        <div className='absolute top-[12rem] left-[12rem] w-[30rem] text-white  overflow-y-hidden'>
          <h6 className='font-bold text-5xl'>Discover a place</h6>
          <h6 className='font-bold text-5xl'>you'll love to live</h6>
          <div className="flex items-center mt-10">
            <div className="relative w-full max-w-md ">
              <input type="text" className="w-[21rem] h-[60px] px-4 py-2 border-red-400 rounded-l-xl text-black focus:outline-none focus:ring-1 focus:ring-black" placeholder="Search by City,State" />
              <button className="absolute h-full w-[60px] px-4 py-2 bg-red-600 text-white rounded-r-xl hover:bg-red-800 ">
                 <i><Search/></i>
              </button>
           </div>
         </div>
        </div>
      </section>

      <section className='bg-white'>


        <div className='flex flex-col justify-center items-center gap-3 h-[12rem] '>
           <h6 className='text-4xl font-bold text-gray-600'>Explore homes on Cityscape</h6>
           <h6 className='text-l w-[40rem] text-center'>Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</h6>
        </div>
        <div className=' h-[27rem] flex flex-row justify-center items-center' >
          <div className=' w-1/2 flex flex-col gap-5 justify-center items-start ml-[10rem]'>
            <h6 className='text-4xl'>Local Expertise For Luxury Home</h6>
            <h6 className='text-l max-w-[35rem]'>Cityscape agents have years of experience buying and selling high-end homes. Get the highest level of service from our best agents. Trust us to find your dream property or sell your home for the best price.</h6>
            <button className='bg-red-600 w-[9rem] h-[2.5rem] text-white font-bold flex items-center justify-center space-x-2'>
               <span>Get Started</span>
               <ArrowRight />
            </button>
          </div>
          <div className='w-[70rem] flex justify-start items-start '>
              <img src={'https://ik.imagekit.io/eg5dbqcea/r-architecture-2gDwlIim3Uw-unsplash.jpg?updatedAt=1721984406805'} className='h-[31rem] w-[49rem] p-[5rem] rounded-xl'/>
          </div>
        </div>



        <div className=' h-[27rem] flex flex-row justify-center items-center bg-gray-100'>
          <div className='w-[70rem] flex justify-start items-start '>
              <img src={'https://ik.imagekit.io/1in7nqs7x/mohamed-b-SXQ1S5qtXmM-unsplash.jpg?updatedAt=1722226184278'} className='h-[31rem] w-[49rem] p-[5rem] rounded-xl'/>
          </div>
          <div className=' w-1/2 flex flex-col gap-5 justify-center items-start mr-20'>
            <h6 className='text-4xl'>Sell for top price and save thousands on fees</h6>
            <h6 className='text-l max-w-[35rem]'>Our agents have the experience to price, market, and sell your home for the best price possible. Plus, Redfin listings get seen by 70% more buyers. And you get it all for half the listing fee other brokerages often charge</h6>
            <button className='bg-red-600 w-[9rem] h-[2.5rem] text-white font-bold flex items-center justify-center space-x-2'>
               <span>Sell Home</span>
               <ArrowRight />
            </button>
          </div>
        </div>



        <div className=' h-[27rem] flex flex-row justify-center items-center' >
          <div className=' w-1/2 flex flex-col gap-5 justify-center items-start ml-[10rem]'>
            <h6 className='text-4xl'>Find your perfect rental on Cityscape</h6>
            <h6 className='text-l max-w-[35rem]'>Whether you’re searching for houses, apartments, or condos, it's easy to find a place you'll love.</h6>
            <div className="flex items-center ">
              <div className="relative w-full max-w-md ">
                <input type="text" className="w-[21rem] h-[50px] px-4  border border-red-400 rounded-l-xl focus:outline-none" placeholder="Search by City,State" />
                <button className="absolute h-full w-[50px] px-4 border border-red-400 bg-red-600 text-white rounded-r-xl hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-black">
                 <i><Search/></i>
                </button>
              </div>
             </div>
          </div>
          <div className='w-[70rem] flex justify-start items-start '>
              <img src={'https://ik.imagekit.io/1in7nqs7x/alina-perekatenkova-fDYUqiGKe7g-unsplash.jpg?updatedAt=1722226305943'} className='h-[31rem] w-[49rem] p-[5rem] rounded-xl'/>
          </div>
        </div>

      </section>

      <section className='bg-stone-50'>
      <div className='h-[10rem] w-full flex flex-col gap-5 items-center justify-center'>
          <h6 className='text-3xl  text-red-500 '>WHAT YOU GET</h6>
          <h6 className='text-5xl text-gray-600 font-bold '>Our Services</h6>
      </div>
      <div className="flex gap-10 justify-center items-start p-6">
      {cards.map((card, index) => (
        <div key={index} className="relative h-[22rem]  w-[15rem] max-w-s rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center bg-white">
          <img className="w-[6rem] h-[6rem] object-cover" src={card.img} alt={`Placeholder ${index + 1}`} />
          <div className="px-4 py-3 flex flex-col gap-3 items-center ">
            <div className=" item-center text-lg text-red-600 mb-1">{card.title}</div>
            <p className="text-blue-950 text-sm px-1 text-justify">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>

    <section className='bg-gray-100'>
    <div className='flex items-center justify-center flex-col pt-10 gap-3'>
    <h6 className='text-gray-600 text-4xl'>Our Community Strength</h6>
    <h6 className=' text-l text-center w-[50rem]'>Our customers exhibit remarkable strength through their resilience and adaptability, consistently overcoming challenges with innovative solutions and unwavering determination.</h6>
    <div className="flex gap-8 justify-center items-start p-6">
        <div className="relative h-[10rem]  w-[15rem] max-w-s rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 items-center ">
            <div className=" item-center text-lg text-red-600 mb-1"><h6  className='text-4xl'>500+</h6></div>
            <p className="text-blue-950 text-sm px-1 text-justify"><h6 className='text-2xl'>Customers</h6></p>
          </div>
        </div>
        <div className="relative h-[10rem]  w-[15rem] max-w-s rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 items-center ">
            <div className=" item-center text-lg text-red-600 mb-1"><h6  className='text-4xl'>2000+</h6></div>
            <p className="text-blue-950 text-sm px-1 text-justify"><h6 className='text-2xl'>Properties</h6></p>
          </div>
        </div>
        <div className="relative h-[10rem]  w-[15rem] max-w-s rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 items-center ">
            <div className=" item-center text-lg text-red-600 mb-1"><h6 className='text-4xl'>150+</h6></div>
            <p className="text-blue-950 text-sm px-1 text-justify"><h6 className='text-2xl'>projects</h6></p>
          </div>
        </div>

    </div>
    </div>
    </section>
    </div>
  );
}
