import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Success() {

    const navigate = useNavigate()

  return (
    <div className="w-full flex flex-col content-center my-20">
        <h1 className='text-center text-3xl text-bold py-4'>Order Has Been Successfully Placed</h1>
        <Button onClick={() => navigate("/")} className={"w-[200px] mx-auto p-2 text-xl text-semibold rounded-xl bg-green-400"}>
            Go back to Homepage
        </Button>
    </div>
  )
}

export default Success