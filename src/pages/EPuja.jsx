import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button';

function EPuja() {

  const navigate = useNavigate()
  const { slug } = useParams();
  const temple = [
    {
      place: "Dakshineswar Kali Temple",
      img: "./Dakshineswar.jpg",
      price: 1001,
      slug: "dakshineswar"
    },
    {
      name: "Kalighat Kali Temple",
      img: "./Kalighat.jpg",
      price: 1501,
      slug: "kalighat"
    },
    {
      name: "Taraknath Temple",
      img: "./Tarakeswar.jpg",
      price: 1501,
      slug: "tarakeswar"
    },
    {
      name: "Bhoothnath Mandir",
      img: "./BabaButhnath.jpg",
      price: 501,
      slug: "baba-bhutnath"
    },
    {
      name: "Tarapith Mandir",
      img: "./Tarapit.jpg",
      price: 1501,
      slug: "tarapit"
    },
    {
      name: "Mahesh Lord Jagannath Temple",
      img: "./JaganathTemple.jpg",
      price: 799,
      slug: "jagannath"
    },
  ].filter((item) => slug === item.slug)


  return (
    <div className='w-full h-auto p-4'>
      {
        temple && (
          <div className='w-full h-full flex flex-col md:flex-row gap-4 my-8'>
            <div className='w-5/6 mx-auto'>
              <img src={`/${temple[0].img}`} alt={temple[0].name} className='rounded-xl'/>
            </div>
            <div>
              <h1 className='font-bold text-3xl mb-8'>{temple[0].name}</h1>
              <Button onClick={() => navigate(`/add-details/${slug}`)} className={`w-full p-3 bg-[#f0df20] rounded-xl animate-bounce hover:bg-green-500`}>
                Book Now @ Rs {temple[0].price}
              </Button>
              <p>
                Book a Mandir Puja from anywhere around the world. Simply contact us directly through <Link className='text-green-500 bg-green-200 rounded-lg px-1' to={`whatsapp://send?phone=+919330032500&text=For%20${temple[0].place}%20Booking!`}>Whatsapp</Link> and share your requirements.We will execute accordingly. 
              </p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default EPuja
