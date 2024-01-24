import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
    <Button onClick={() => navigate(`/add-details/${slug}`)} className={`w-full p-3 bg-[#f0df20] rounded-xl animate-bounce hover:bg-green-500`}>
      Book Now for Rs {product[0].crystalPrice}
    </Button>
  </span>
  <div>
  <p>{product[0].crystalDesc}</p>
  <br />

  <div>
    <h1>Disclamer</h1>
    <p>If you choose to use a any crystal bracelet for its perceived benefits, it's essential to do so with an open mind and to rely on it as a complementary practice rather than a substitute for professional medical or psychological advice. Always consult with healthcare professionals for any health-related concerns.</p>
  </div>
</div>
</div>

</div>

<div className='w-full md:w-3/4 mx-auto flex flex-col justify-start gap-8 md:gap-2'>
<div className='w-full my-2'>
  <h1 className='mb-2 font-bold text-xl'>Benefits:</h1>
  <p className='w-full text-xl'>{product[0].crystalUses.first}</p>
  <p className='w-full text-xl'>{product[0].crystalUses.second}</p>
  <p className='w-full text-xl'>{product[0].crystalUses.third}</p>
  <p className='w-full text-xl'>{product[0].crystalUses.fourth}</p>
</div>

</div>



</div>
    </>
  )
}

export default SelectCrystal