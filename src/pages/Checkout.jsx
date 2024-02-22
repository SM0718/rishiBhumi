import React, {useState, useEffect} from 'react'
import { cartItems } from '../infos/cartItems'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';

function Checkout() {
  const {slug} = useParams()
  const [details, setDetails] = useState({})
  const navigate = useNavigate()
  const product = cartItems.filter((item) => slug === item.slug)
  const documentId = useSelector((state) => state.auth.documentId)
  const userInfo = async() => {
    try {
      const data = await appwriteService.getUserInfo(documentId)
      if(data) {
        setDetails(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    userInfo()
  }, [])
  

  return (
      <div className='w-full h-auto p-2 my-4 flex'>
        <div className='w-5/6 mx-auto border-4 rounded-xl'>

        <div className='py-6 flex flex-col justify-evenly'>
          
          <div className='flex-col gap-4'>
            <h1 className='py-2 text-xl font-bold text-center'>Product/Service Of Your Choice</h1>
            <img className='w-[200px] h-[200px] mx-auto rounded-xl' src={`/${product[0].pic}`} alt={product[0].name}/>
            <h3 className='text-xl font-semibold text-center py-2'>{product[0].name}</h3>
        </div>
        
        <div className='flex-col pt-4 gap-4 mx-auto'>
          <h1 className='py-2 text-xl font-bold mx-auto text-center'>Delivery Details</h1>
          <p><span className='text-xl font-semibold'>Name:</span> {details.name}</p>
          <p><span className='text-xl font-semibold'>Address:</span> {details.address}</p>
          <p><span className='text-xl font-semibold'>Phone No:</span> {details.phone}</p>
          <p><span className='text-xl font-semibold'>Email Id:</span> {details.email}</p>
          <p><span className='text-xl font-semibold'>Price:</span> Rs {product[0].price}</p>
        </div>
        
        </div>
        
        <div className='flex flex-wrap justify-center gap-4 pb-4'>
          <Button className={"w-auto h-10 p-2 bg-yellow-700 text-white rounded-xl"}>
            <Link
            to={"https://phon.pe/l6mi9hiw"}>Checkout
            </Link>
          </Button>
        </div>
        </div>
        
        
      </div>
  )
}

export default Checkout
