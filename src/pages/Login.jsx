import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import { login as authLogin } from '../store/authSlice'
import {useForm} from "react-hook-form"
import Input from '../components/Input'
import Button from '../components/Button'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
      setError("")

      try {
        const session = await authService.login(data)
        if(session){
          const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
        }
      } catch (error) {
        console.log(error)
        setError(error.message)
      }
    }

  return (
    <div className='w-full h-auto md:h-[500px] py-10 flex justify-center gap-12 bg-center' style={{backgroundImage: "url('./zodiac-wheel.png')"}}>

      <div className='w-5/6 h-auto md:h-full md:w-4/5 flex flex-col justify-evenly md:justify-center
         text-center mb-16'>

        {/* <div className='w-1/2 mx-auto'>
          <img className='w-full h-full' src='./zodiac-wheel.png'/>
        </div> */}

        {/* <div className='w-5/6 md:pl-4 h-full mx-auto flex flex-col justify-center text-center'> */}

          <div className='w-full h-auto my-4 flex flex-col justify-center'>
            <h1 className='text-6xl font-semibold pb-6'>Login To Your Account</h1>
            <p className='text-xl font-semibold'>Don&apos;t have any account?&nbsp; <Link onClick={() => navigate('/signup')} className='text-blue-600'>Sign Up</Link></p>
          </div>
          
          <div className='w-full h-auto mx-auto text-center'>
            {error && <p className="text-red-600 text-center font-bold text-lg my-8">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='h-auto flex flex-col justify-center'>
              <div className='space-y-5'>
                <Input
                className="w-1/2 p-3 rounded-2xl bg-yellow-200"
                placeholder="Enter your email"
                type="email"
                labelStyle="font-bold text-lg"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                {/* </div>
                
                <div className='h-auto w-full md:mb-4 text-center'> */}
                 <Input
                 className= "w-1/2 p-3 bg-yellow-200 rounded-2xl"
                type="password"
                labelStyle="font-bold text-lg"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                    validate: {
                      matchPatern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value) ||
                      "Invalid Password",
                  }
                })}
                /> 
                </div>
                
                <Button
                type="submit"
                className="w-auto px-6 py-2 mx-auto my-4 text-center border border-[#b0a178] hover:bg-[#b0a178] rounded-3xl font-bold"
                >LOGIN</Button>
        </form>
          </div>
        

      {/* </div> */}
      </div>
      

      
    </div>
  )
}

export default Login