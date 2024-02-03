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
            const userData = await authService.phoneLogin(data)
            if(userData) {
                setUserId(userData)
                setToggleVerify(true)
            }
        } catch(error) {
            setError(error.message)
        }
    }

    const verify = async(info) => {
        setError("")
        try {
            const userObj = {userId: userId, secretCode: info.secretCode}
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
            setError(error.message)
        }
    }


  return (
    <div className='w-full h-[500px] py-10 flex flex-col justify-evenly gap-10 bg-center bg-no-repeat text-center' style={{backgroundImage: "url('./zodiac-wheel.png')"}}>

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
                        className= "w-1/2 md:w-[500px] mx-auto p-3 border-2 border-black rounded-2xl"
                        {...register("number", {
                            required: true,
                        })}
                        />
                <Button type="submit" 
                        className="w-auto px-6 py-2 mx-auto my-4 text-center border bg-[#b0a178] text-white border-[#b0a178] hover:bg-[#b0a178] rounded-3xl"
                        >
                            LOGIN
                        </Button>
                </form >)
                :
                (<form onSubmit={handleSubmit(verify)} className='flex flex-col justify-center'>
                    <div className='w-1/2 mx-auto mb-2 flex justify-evenly gap-2'>
                     <Input
                         maxLength={6}
                         className= "w-[200px] h-10 text-center mx-auto p-1 outline outline-2 outline-yellow-500 focus:outline-yellow-800 rounded-xl"
                         {...register("secretCode", {
                             required: true,
                         })}
                         />
                         
                     </div>
                     {error && <p className="text-red-600 text-center font-bold text-lg my-8">{error}</p>}
                
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
