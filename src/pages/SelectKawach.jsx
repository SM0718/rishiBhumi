import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { kawachDetails } from '../infos/kawach'
import Button from '../components/Button';

function SelectKawach() {

    const { slug } = useParams();
    const navigate = useNavigate()
    const product = kawachDetails.filter((item) => `${slug}` === item.slug)

    const handelCLick = () => {
      navigate(`/add-details/${slug}`)
    }

  return (
    <div className='flex flex-col mb-16'>

        <div className='w-5/6 h-auto p-4 mx-auto my-8 flex flex-wrap justify-evenly gap-6'>
        <div className=''>
          {product? (<img className='w-[350px] h-[250px] sm:h-[350px] rounded-2xl' src={`/${product[0].kawachPic}`} alt={product[0].kawachName} />)
          : null
      }
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-4 '>
          <h1 className='font-bold text-3xl'>{product[0].kawachName}</h1>
          
          <span className='my-2'>
            <Button onClick={() => handelCLick()} className={`w-full p-3 bg-[#f0df20] rounded-xl animate-bounce hover:bg-green-500`}>
              Order for just Rs {product[0].kawachPrice} {`(Free Delivery)`}
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

          <span>
            <p className='my-2'>{product[0].kawachDesc}</p>
          </span>

          <div>
            <h1>Disclamer</h1>
            <p>If you choose to use a any crystal bracelet for its perceived benefits, it's essential to do so with an open mind and to rely on it as a complementary practice rather than a substitute for professional medical or psychological advice. Always consult with healthcare professionals for any health-related concerns.</p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-3/4 mx-auto flex flex-col justify-start gap-8 md:gap-2'>
  <div className='w-full my-4 mx-4'>
  <h1 className='mb-2 font-bold text-xl'>Benefits:</h1>
  <p className='w-full text-xl'>{product[0].kawachUse.first}</p>
  <p className='w-full text-xl'>{product[0].kawachUse.second}</p>
  <p className='w-full text-xl'>{product[0].kawachUse.third}</p>
</div>

</div>

      

    </div>
  )
}

export default SelectKawach
