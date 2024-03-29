import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {crystalDetails} from '../infos/crystals'
import Button from '../components/Button';

function SelectCrystal() {

  const { slug } = useParams();
  const navigate = useNavigate();
  const product = crystalDetails.filter((item) => `${slug}` === item.slug)
  

  return (
    <>
      <div className='flex flex-col mb-16'>

<div className='w-5/6 h-auto p-4 mx-auto my-8 flex flex-wrap justify-evenly gap-6'>
<div className=''>
  {product? (<img className='w-[350px] h-[250px] sm:h-[350px] rounded-2xl' src={`/${product[0].crystalPic}`} alt={product[0].crystalName} />)
  : null
}
</div>

<div className='w-full md:w-1/2 flex flex-col gap-4 '>
  <h1 className='font-bold text-3xl'>{product[0].crystalName}</h1>
  
  <span className='my-2'>
    <Button onClick={() => navigate(`/add-details/${slug}`)} className={`w-full p-3 bg-[#B1A178] rounded-xl animate-bounce  hover:bg-[#CCC0B0]`}>
      Book Now for Rs {product[0].crystalPrice}
    </Button>
  </span>
  <div>
  <p>{product[0].crystalDesc}</p>
  <br />
  </div>
  <div className='w-full md:w-3/4 flex flex-col justify-start'>
<div className='w-full my-2'>
  <h1 className='mb-2 text-xl'>Benefits:</h1>
  <p className='w-full text-lg'>{product[0].crystalUses.first}</p>
  <p className='w-full text-lg'>{product[0].crystalUses.second}</p>
  <p className='w-full text-lg'>{product[0].crystalUses.third}</p>
  <p className='w-full text-lg'>{product[0].crystalUses.fourth}</p>
</div>

</div>

  
</div>

</div>
<div className='w-5/6 mx-auto px-4 my-4'>
    <h1>Disclamer</h1>
    <p>If you choose to use a any crystal bracelet for its perceived benefits, it's essential to do so with an open mind and to rely on it as a complementary practice rather than a substitute for professional medical or psychological advice. Always consult with healthcare professionals for any health-related concerns.</p>
  </div>
<span>
    <p className='text-center'>
      <b className='pr-1'>
        Contact For Bulk Order:-  
      </b>
       contact@rishibhumi.com
       </p>
     </span>



</div>
    </>
  )
}

export default SelectCrystal
