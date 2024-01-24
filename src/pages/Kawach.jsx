import React from 'react'
import { kawachDetails } from '../infos/kawach.js'
import { useNavigate } from 'react-router-dom'

function Kawach() {

  const navigate = useNavigate()

  return (
    <div className='w-full h-auto flex flex-wrap justify-center gap-4 my-8'>
      {
        kawachDetails.map((item) => (
          <div onClick={() => navigate(`/kawach/${item.slug}`)} className='w-[250px] h-[250px] 
          flex flex-col justify-end bg-center bg-cover bg-no-repeat rounded-2xl 
          cursor-pointer hover:scale-95' style={{backgroundImage: `url(${item.kawachPic})`}} key={item.slug}>
            <div className='p-4 bg-slate-700/50 rounded-b-2xl'>
              <p className='text-center text-white font-semibold '>{item.kawachName}</p>
            </div>
            
          </div>
        ))
      }
    </div>
  )
}

export default Kawach