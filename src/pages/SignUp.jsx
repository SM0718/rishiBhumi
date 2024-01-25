import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import Input from '../components/Input'
import Button from '../components/Button'

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const [userId, setUserId] = useState("")
    const {register, handleSubmit} = useForm()
    const [toggleVerify, setToggleVerify] = useState(false)

    const create = async(data) => {
        setError("")
        try{
            console.log(data)
            const userData = await authService.phoneLogin(data)
            if(userData) {
                setUserId(userData)
                setToggleVerify(true)
            }
        } catch(error) {
                alert(error.message)
        }
    }

    const verify = async(info) => {
        try {
            console.log("Inside Verify", info, info.secretCode, userId)
            const secretCode = `${info.first}${info.second}${info.third}${info.fourth}${info.fifth}${info.sixth}`
            const userObj = {userId: userId, secretCode: secretCode}
            const verifyNumber = await authService.phoneSession(userObj);
            if(verifyNumber){
                const userData = await authService.getCurrentUser()
                if(userData) 
                {
                    dispatch(login(userData))
                    navigate("/")
                };
                
            }
        } catch(error) {
            alert(error.message)
        }
    }

  return (
    <div className='w-full h-[500px] py-10 flex flex-col justify-evenly gap-10 bg-center text-center' style={{backgroundImage: "url('./zodiac-wheel.png')"}}>

        <div className='w-full h-auto my-4 flex flex-col justify-center'>
            <h1 className='text-6xl font-semibold pb-6'>Login To Your Account</h1>
            <p className='text-xl font-semibold'>Login using OTP&nbsp;</p>
          </div>
        {error && <p className="text-red-600 text-center font-bold text-lg my-8">{error}</p>}
        <div>
        
{   !toggleVerify? 
                (<form onSubmit={handleSubmit(create)} className='flex flex-col justify-center'>
                
                <Input
                        label="Enter your Number"
                        labelStyle = "font-bold mb-2 md:px-2 text-xl"
                        placeholder="Enter Your Number"
                        className= "w-1/2 md:w-[500px] mx-auto p-3 bg-yellow-200 rounded-2xl"
                        {...register("number", {
                            required: true,
                        })}
                        />
                <Button type="submit" 
                        className="w-auto px-6 py-2 mx-auto my-4 text-center border border-[#b0a178] hover:bg-[#b0a178] rounded-3xl font-bold"
                        >
                            LOGIN
                        </Button>
                </form >)
                :
                (<form onSubmit={handleSubmit(verify)} className='flex flex-col justify-center'>
                    <div className='w-1/2 mx-auto mb-2 flex justify-evenly gap-2'>
                <Input  
                        maxLength={1}
                        className= "w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] text-center mx-auto p-1 bg-yellow-200 outline outline-2 outline-yellow-500 rounded-xl"
                        {...register("first", {
                            required: true,
                        })}
                        />
                <Input
                        maxLength={1}
                        className= "w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] text-center mx-auto p-1 bg-yellow-200 outline outline-2 outline-yellow-500 rounded-xl"
                        {...register("second", {
                            required: true,
                        })}
                        />
                <Input  
                        maxLength={1}
                        className= "w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] text-center mx-auto p-1 bg-yellow-200 outline outline-2 outline-yellow-500 rounded-xl"
                        {...register("third", {
                            required: true,
                        })}
                        />
                <Input
                        maxLength={1}
                        className= "w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] text-center mx-auto p-1 bg-yellow-200 outline outline-2 outline-yellow-500 rounded-xl"
                        {...register("fourth", {
                            required: true,
                        })}
                        />
                <Input  
                        maxLength={1}
                        className= "w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] text-center mx-auto p-1 bg-yellow-200 outline outline-2 outline-yellow-500 rounded-xl"
                        {...register("fifth", {
                            required: true,
                        })}
                        />
                <Input
                        maxLength={1}
                        className= "w-[36px] sm:w-[46px] h-[36px] sm:h-[46px] text-center mx-auto p-1 bg-yellow-200 outline outline-2 outline-yellow-500 rounded-xl"
                        {...register("sixth", {
                            required: true,
                        })}
                        />
                    </div>
                
                <Button type="submit" 
                        className="w-auto px-6 py-2 mx-auto my-4 text-center border border-[#b0a178] hover:bg-[#b0a178] rounded-3xl font-bold"
                        >
                            Verify
                        </Button>
                </form>)
}
        </div>
    </div>
  )
}

export default SignUp
