import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from '../appwrite/auth.js'
import Button from './Button';
import Logo from './Logo';
import LogoutBtn from './LogoutBtn';

function Header() {

  // const [authStatus, setAuthStatus] = useState(false)
  const authStatus = useSelector((state) => state.auth.status)
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const toggleMenu = () => {
    setOpen(!open);
  };
// const checkLoginStatus = async() => {
//       try{
//         const userData = await authService.getCurrentUser()
//         if(userData) {
//             setAuthStatus(true)
//         }
//       } catch(error) {
//         alert(error.message)
//       }
      
//     }
//   useEffect(() => {
//     checkLoginStatus()
    
//   }, [])
  

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
    <>
    <header className='h-auto lg:h-30 w-full border-b-2 bg-white rounded-b-xl px-2 flex justify-between'>
      <Logo className="my-auto"/>

      <ul className='w-3/5 hidden xl:flex justify-evenly my-auto'>
        {headings.map((item) => (
          <li key={item.name}>
            <NavLink to={item.slug} className={({isActive}) => `${isActive? "text-[#b0a178] font-semibold " : "text-black"} hover:text-[#b0a178]`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

        { !authStatus?
          (<div className='w-auto my-auto hidden xl:flex justify-between gap-6'>
        
        <Button onClick={() => navigate('login')} className='px-6 py-2 w-auto bg-[#b0a178] hover:bg-white hover:outline hover:outline-1 hover:outline-[#b0a178] rounded-3xl'>
            Login
        </Button>
      </div>) :

      (<div className='w-auto my-auto hidden xl:flex justify-between gap-6'>
      <LogoutBtn className='px-6 py-2 w-auto border bottom-1 border-[#b0a178] hover:bg-[#b0a178] rounded-3xl' />
      </div>)
        }

    
      <div className="h-10 w-10 my-auto flex xl:hidden cursor-pointer" onClick={toggleMenu}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
        </svg>
      
    </div>

    </header>

    <ul className={`${open? 'flex flex-col' : 'hidden'} justify-end text-center xl:hidden border-b-4 border-yellow-300 rounded-b-xl `}>

    {headings.map((item) => (
            <NavLink to={item.slug} key={item.name} className={({isActive}) => `${isActive? "bg-[#b0a178] font-semibold hover:text-black" : "text-black"} hover:text-[#b0a178] hover:scale-95`}>
             <li key={item.name} className='px-6 py-2'>
               {item.name}
              </li>
            </NavLink>
        ))
        
        }

      {!authStatus?
          (<li className='px-2 py-2 outline outline-1 outline-[#e5e7eb] flex gap-2'>
        
        <Button onClick={() => navigate('login')} className='px-6 py-2 w-2/3 mx-auto bg-[#b0a178] hover:bg-white hover:outline hover:outline-1 hover:outline-[#b0a178] rounded-3xl'>
            Login
        </Button>
      </li>) :

      (<li className='px-6 py-2'>
      <LogoutBtn className='px-6 py-2 w-2/3 border bottom-1 border-[#b0a178] hover:bg-[#b0a178] rounded-3xl' />
      </li>)}

      </ul>
    </>
  );
}

export default Header;
