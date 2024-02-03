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
          {product? (<img className='w-[350px] h-[250px] sm:h-[350px] rounded-2xl' src={`/${product[0].pic}`} alt={product[0].name} />)
          : null
      }
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-4 '>
          <h1 className='font-bold text-3xl'>{product[0].name}</h1>
          
          <span className='my-2'>
            <Button onClick={() => handelCLick()} className={`w-full p-3 bg-[#B1A178] rounded-xl animate-bounce hover:bg-[#CCC0B0]`}>
              Book Now for Rs {product[0].price}
            </Button>
          </span>

          <span className='text-xl font-semibold'>
            Upcomming {product[0].name} at - {product[0].timing}
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
          <p className='w-full md:w-[350px] text-xl'>{product[0].use}</p>
        </div>
        </div>

      </div>

      

    </div>
    
  )
}

export default SelectWeeklyPuja
