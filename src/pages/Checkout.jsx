import React from 'react'
import { cartItems } from '../infos/cartItems'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

function Checkout() {
  const {slug} = useParams()
  const product = cartItems.filter((item) => slug === item.slug)
  return (
      <div className='w-full h-auto p-2'>
        <div>
            
        </div>
      </div>
  )
}

export default Checkout