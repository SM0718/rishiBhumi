import React from 'react'
import {NavLink} from 'react-router-dom'
import Logo from './Logo'


function Footer() {

  let currentDate = new Date();

  const headings = [
    {
      name: "Home",
      slug: "/"
    },
    {
      name: "Weekly Pooja",
      slug: "/weekly-pooja"
    },
    {
      name: "Exclusive Pooja",
      slug: "/exclusive-pooja"
    },
    {
      name: "Kawach",
      slug: "/kawach"
    },
    {
      name: "Crystals",
      slug: "/crystals"
    },
  ];

  return (
    <footer className='w-full h-auto flex flex-col gap-6 justify-evenly p-6 bg-[#666666] rounded-t-xl'>

      <div className='w-full flex flex-col md:flex-row gap-6 justify-start'>
        <div className='mx-auto'>
        <Logo />
      </div>

      <ul className='w-full md:w-auto h-auto flex flex-col gap-4 px-4 mx-auto'>
        <li>
          <h1 className='text-2xl'>Explore RishiBhumi</h1>
        </li>
        {headings.map((item) => (
          <li  key={item.name}>
            <NavLink to={item.slug} className={({isActive}) => `${isActive? "text-[#b0a178] font-semibold" : "text-black"} hover:text-[#b0a178]`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='w-full md:w-auto h-auto flex flex-col gap-4 px-4 mx-auto'>
        <div>
          <h1 className='text-2xl'>Contact Us</h1>
        </div>
        <div>
          <p><b>Email:- </b>abhiseksabui@gmail.com</p>
          <p><b>Phone No:- </b>9330032500</p>
        </div>
      </div>

      </div>

      <div className='w-full border-t-2 border-white p-4'>
      <p className='text-center font-semibold text-white'>&copy;{currentDate.getFullYear()}, RISHI BHUMI PVT LTD</p>
      </div>
      

    </footer>
  )
}

export default Footer