import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { weeklyPooja } from '../infos/weeklyPooja'
import Button from '../components/Button';

function SelectWeeklyPuja() {

      
    const { slug } = useParams();
    const navigate = useNavigate();
    const product = weeklyPooja.filter((item) => `${slug}` === item.slug)

    const handelCLick = () => {
      navigate(`/add-details/${slug}`)
    }

  return (

    <div className='flex flex-col mb-16'>

        <div className='w-5/6 h-auto p-4 mx-auto my-8 flex flex-wrap justify-evenly gap-6'>
        <div className=''>
          {product? (<img className='w-[350px] h-[250px] sm:h-[350px] rounded-2xl' src={`/${product[0].pujaPic}`} alt={product[0].pujaName} />)
          : null
      }
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-4 '>
          <h1 className='font-bold text-3xl'>{product[0].pujaName}</h1>
          
          <span className='my-2'>
            <Button onClick={() => handelCLick()} className={`w-full p-3 bg-[#f0df20] rounded-xl animate-bounce hover:bg-green-500`}>
              Book Now for Rs 251
            </Button>
          </span>
          <span>
    <p>
      <b>
        Want to know your Gotra or Raashi?, Contact Us on
      </b>
      <Link className='text-green-500 bg-green-200 rounded-lg mx-1 px-1' to={`whatsapp://send?phone=+919330032500&text=For%20Gotra%20and%20Raashi!`}>Whatsapp</Link> 
    </p>
     </span>
        </div>
      </div>

      <div className='w-5/6 md:w-3/4 mx-auto flex flex-wrap justify-start md:justify-center gap-8 md:gap-2'>

        <div className='w-full lg:w-auto mx-auto'>
            <div className='w-full leading-loose'>
              <h1 className=' font-bold text-xl'>Do you need to arrange anything?</h1>
            </div>

              <div className='w-full'>
                <ul className='list-disc'>
                  <li className='text-xl'>No, everything will be done by the Astrologer</li>
                  <li className='text-xl'>Eat satvik/vegetarian food</li>
                  <li className='text-xl'>Take a bath before starting the pooja</li>
                </ul>
              </div>
        </div>

        

      <div className='w-full lg:w-auto mx-auto leading-loose'>
        <div className='w-full md:w-auto md:mx-auto'>
          <h1 className='mb-2 font-bold text-xl'>Benefits:</h1>
          <p className='w-full md:w-[350px] text-xl'>{product[0].pujaUse}</p>
        </div>
        </div>

      </div>

      

    </div>
    
  )
}

export default SelectWeeklyPuja