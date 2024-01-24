import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo({className, ...props}) {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/")} className={`w-[150px] sm:w-[200px] m-0 p-2 cursor-pointer ${className}`} {...props}>
        <img className='w-auto h-auto' src='/logo.png'/>
    </div>
    
  )
}

export default Logo