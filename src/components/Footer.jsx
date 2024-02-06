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
    {
      name: "Blog",
      slug: "/blog"
    }
  ];

  return (
    <footer className='w-full h-auto flex flex-col gap-6 justify-evenly p-6 bg-gradient-to-r from-[#2F4F4F] to-[#3E5E5E] rounded-t-xl'>

      <div className='w-full flex flex-col md:flex-row gap-6 justify-start'>
        <div className='mx-auto'>
        <Logo />
      </div>

      <ul className='w-full md:w-auto h-auto flex flex-col gap-4 px-4 mx-auto text-center md:text-left'>
        <li>
          <h1 className='text-2xl font-semibold'>Explore RishiBhumi</h1>
        </li>
        {headings.map((item) => (
          <li  key={item.name}>
            <NavLink to={item.slug} className={({isActive}) => `${isActive? "text-white font-semibold" : "text-[#b0a178]"} hover:text-[#b0a178]`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='w-full md:w-auto h-auto flex flex-col gap-4 px-4 mx-auto text-center md:text-left'>
        <div>
          <h1 className='text-2xl font-semibold'>Contact Us</h1>
        </div>
        <div className='leading-loose'>
          <p><b>Email:- </b><span className='text-white'>contact@rishibhumi.com</span></p>
          <p><b>Phone No:- </b><span className='text-white'>9330032500</span></p>
          <p><b>Address:- </b><span className='text-white'>5, Words Institution Street, Kolkata - 700006</span></p>

        </div>
      </div>

      <div className='mx-auto'>
        <h1 className='text-2xl font-semibold'>Important Links</h1>
        <div className='mt-2 flex flex-col leading-loose text-center md:text-left'>
          <NavLink to={'/privacy-policy'} className={({isActive}) => `${isActive? "text-white font-semibold" : "text-[#b0a178]"} hover:text-[#b0a178]`}>Privacy Policy</NavLink>
          <NavLink to={'/terms'} className={({isActive}) => `${isActive? "text-white font-semibold" : "text-[#b0a178]"} hover:text-[#b0a178]`}>Terms Of Service</NavLink>
          <NavLink to={'/refund'} className={({isActive}) => `${isActive? "text-white font-semibold" : "text-[#b0a178]"} hover:text-[#b0a178]`}>Refund Policy</NavLink>
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
