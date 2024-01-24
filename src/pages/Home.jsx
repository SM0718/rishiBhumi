import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function Home() {

  const navigate = useNavigate()

  const slider = [
    {
      place: "Dakshineswar Kali Temple",
      img: "./Dakshineswar.jpg",
      slug: "dakshineswar"
    },
    {
      place: "Kalighat Kali Temple",
      img: "./Kalighat.jpg",
      slug: "kalighat"
    },
    {
      place: "Taraknath Temple",
      img: "/Tarakeswar.jpg",
      slug: "tarakeswar"
    },
    {
      place: "Bhoothnath Mandir",
      img: "./BabaButhnath.jpg",
      slug: "baba-bhutnath"
    },
    {
      place: "Tarapith Mandir",
      img: "./Tarapit.jpg",
      slug: "tarapit"
    },
    {
      place: "Mahesh Lord Jagannath Temple",
      img: "./JaganathTemple.jpg",
      slug: "jagannath"
    },
  ]

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

  return (
    <div className='w-full h-auto p-8'>
      <Slider {...settings}>
      {
        slider.map((items) => (
          <div onClick={() => navigate(`/e-pooja/${items.slug}`)} className='h-[250px] md:h-[500px] w-auto p-2 cursor-pointer' key={items.place}>
            <img className='h-full w-5/6 mx-auto rounded-2xl' src={items.img}/>
            <p className='text-center font-bold p-4'>Book an E-Puja at {items.place}</p>
            </div>
        ))
      }
    </Slider>
    

        <div className='w-full h-auto my-14 flex flex-wrap justify-center gap-6'>

          <div onClick={() => navigate('/weekly-pooja')} className='w-[250px] h-[250px] 
          flex flex-col justify-end bg-center bg-cover bg-no-repeat rounded-2xl 
          cursor-pointer hover:scale-95' style={{backgroundImage: `url(./weekly-pooja.jpg)`}}>
            <div className='p-4 bg-slate-700/50 rounded-b-2xl'>
              <p className='text-center text-white font-semibold '>Weekly Pooja</p>
            </div>
          </div>

          <div onClick={() => navigate('/exclusive-pooja')} className='w-[250px] h-[250px] 
          flex flex-col justify-end bg-center bg-cover bg-no-repeat rounded-2xl 
          cursor-pointer hover:scale-95' style={{backgroundImage: `url(./special-pooja.jpg)`}}>
            <div className='p-4 bg-slate-700/50 rounded-b-2xl'>
              <p className='text-center text-white font-semibold '>Exclusive Pooja</p>
            </div>
          </div>

          <div onClick={() => navigate('/kawach')} className='w-[250px] h-[250px] 
          flex flex-col justify-end bg-center bg-cover bg-no-repeat rounded-2xl 
          cursor-pointer hover:scale-95' style={{backgroundImage: `url(./Kawach.png)`}}>
            <div className='p-4 bg-slate-700/50 rounded-b-2xl'>
              <p className='text-center text-white font-semibold '>Kawach</p>
            </div>
          </div>

          <div onClick={() => navigate('/crystals')} className='w-[250px] h-[250px] 
          flex flex-col justify-end bg-center bg-cover bg-no-repeat rounded-2xl 
          cursor-pointer hover:scale-95' style={{backgroundImage: `url(./Crystals.jpg)`}}>
            <div className='p-4 bg-slate-700/50 rounded-b-2xl'>
              <p className='text-center text-white font-semibold '>Crystals</p>
            </div>
          </div>

        </div>

        <div className='w-full flex flex-col gap-8 my-20'>

          <h1 className='text-4xl font-bold mx-auto'>About RishiBhumi</h1>

          <div className='leading-loose'>
            <p>Welcome to RishiBhumi, where celestial energies align with your spiritual journey,
             and the cosmos unveils its secrets to guide you on the path of harmony and prosperity.
              We are more than just an astrology website; we are your cosmic companion, offering a 
              unique blend of traditional wisdom and modern convenience.</p>

          <p>
          At RishiBhumi, we specialize in bringing the sacred rituals of puja to your fingertips.
           Our experienced and knowledgeable priests perform personalized pujas through video calls,
            creating an immersive and meaningful experience for you, no matter where you are in the world.
             Whether you seek divine blessings for a specific purpose or simply wish to connect with higher
              energies, our virtual puja services cater to your spiritual needs.
          </p>

          <p>
          Explore our Weekly Puja services, carefully curated to synchronize with the celestial energies of each day. These rituals are designed to bring balance, positivity, and abundance into your life, creating a weekly sanctuary for spiritual rejuvenation.
          Immerse yourself in the divine with our collection of Special Pujas, crafted to address specific aspects of your life, from health and wealth to love and success. Our skilled priests perform these rituals with utmost dedication, channeling the cosmic forces to manifest positive changes in your life.
          </p>

          <p>
          Discover the power of spiritual tools with our exclusive range of products, including Kawach and Crystals. Our authentic and energized products are carefully selected to enhance your spiritual journey and provide you with a tangible connection to the divine. Whether you are seeking protection, guidance, or positive energy, our products are designed to resonate with your spiritual aspirations.
          </p>

          <p>
          At RishiBhumi, we strive to make spirituality accessible and convenient. We believe that everyone deserves a connection to the divine, and our services and products are designed to bring the sacred within reach. Step into the world of celestial wisdom, explore the beauty of ancient rituals, and let the cosmos guide you towards a life of fulfillment.
          </p>

          <p>
          Embark on a transformative journey with RishiBhumi, where spirituality meets modernity, and the celestial realm becomes a part of your everyday life. Choose from our array of services and products, and let the magic of the cosmos unfold in your life. Welcome to a world where the stars align to fulfill your spiritual desires.
          </p>
          </div>
          
        </div>

    </div>
  )
}

export default Home