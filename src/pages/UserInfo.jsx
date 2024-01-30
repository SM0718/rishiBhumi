import React, {useState, useEffect, useCallback} from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import authService from '../appwrite/auth'
import { useForm } from "react-hook-form";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../store/authSlice';

function UserInfo() {

    const {slug} = useParams()
    const [error, setError] = useState("")
    const [posts, setPosts] = useState([])
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()
    const loginStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (!loginStatus) {
            navigate("/login")
        }
    }, [loginStatus])

    const createUser = async(data) => {
        setError("")
        try {
                
                const address = data.house + " " + data.stName + " " + data.city + " " + data.pincode
                const currentSession = await authService.getCurrentUser()
                    if(currentSession) {
                        await appwriteService.createUserInfo({...data, phone: currentSession.phone, address:address, userId: currentSession.$id})
                    }
        } catch (error) {
            setError(error.message)
        }
    }

    const getPosts = async() => {
        setError("")
        try {
            const currentSession = await authService.getCurrentUser()
            if(currentSession) {
                const customerData = await appwriteService.getUserData(currentSession.phone)
                if(customerData) {
                    setPosts(customerData.documents)
                }
            }
            
        } catch(error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getPosts()
    })

    const deleteDetail = async(postId) => {
        setError("")
        try {
            const deletePost = await appwriteService.deleteUserInfo(postId)
            
            if(deletePost) {
                getPosts()
            }
        } catch (error) {
            setError(error.message)
        }
        
    }

    const handelCLick = () => {
        navigate(`/checkout/${slug}`)
    }

  return (
    <>
    <div className='w-full h-auto flex flex-col justify-center p-2 my-8'>
        {
            (posts.length !== 0) && (<h1 className='mx-auto text-xl font-semibold text-center'>Choose An Address</h1>)
        }
        
        <div className='w-full h-auto px-2 mx-auto m-2 flex flex-wrap justify-start  gap-2'>
            
            {
                posts && 
                    posts.map((item) => (
                        <div key={item.$id} className='w-full md:w-[450px] h-[275px]  flex flex-col rounded-2xl border-2 border-b-8 border-yellow-400'>

                            <div className='w-full h-[200px] px-2 flex flex-col justify-evenly'>
                                <p>Name: {item.name}</p>
                                <p>Email: {item.email}</p>
                                <p>Phone No: {item.phone}</p>
                                <p>Address: {item.address}</p>
                                <p>{item.gotro? `Gotra: ${item.gotro}` : null}</p>
                                <p>{item.starSign? `Raashi: ${item.starSign}` : null}</p>
                            </div>

                            <div className='w-full text-center pb-1'>
                                <Button onClick={() => handelCLick()} className="w-2/5 p-2 mx-2 bg-[#f0df20] rounded-xl hover:bg-green-500 text-center">Use This</Button>
                                <Button onClick={() => deleteDetail(item.$id)} className="w-2/5 p-2 mx-auto bg-red-500 rounded-xl hover:bg-red-800 hover:text-red-500 text-center">
                                    Delete
                                </Button>
                            </div>
                                
                        </div>  
                    ))
            }
        </div>

        <div className='w-5/6 p-2 mx-auto rounded-2xl border-2 border-b-8 border-yellow-400'>
            <h1 className='text-xl font-semibold text-center'>Add New Details</h1>
            {error && <p className='text-red-500 text-lg font-semibold'>{error}</p>}
           <form onSubmit={handleSubmit(createUser)} className='w-full md:w-auto h-auto flex flex-col justify-center md:p-4'>
            <div className='w-full md:w-3/4 mx-auto p-4 flex flex-row sm:flex-col flex-wrap justify-evenly'>

                <div>
                    <Input
                    label="Name:"
                    placeholder="Name"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("name", { required: true })}
                />
                <Input
                    label="Email:"
                    placeholder="Email"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("email",   {
                     required: true,
                     validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }})}
                />
                <Input
                    label="DOB:"
                    placeholder="dd/mm/yyyy"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("dob", { required: true })}
                /> 
                <Input
                    label="Gotro:"
                    placeholder="Enter Gotro"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    {...register("gotro")}
                />
                <Input
                    label="Raashi:"
                    placeholder="Enter Raashi"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    {...register("starSign")}
                />
                </div>
                   
                   <div>
                    
                <Input
                    label="House No:"
                    placeholder="House No"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("house", { required: true })}
                />
                <Input
                    label="Street Name:"
                    placeholder="Street Name"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("stName", { required: true })}
                />
                <Input
                    label="City:"
                    placeholder="City"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("city", { required: true })}
                />
                <Input
                    label="Pincode:"
                    placeholder="Pincode"
                    className="w-full mb-6 p-2 bg-yellow-200 rounded-xl"
                    labelStyle="font-semibold text-xl"
                    required={true}
                    {...register("pincode", { required: true })}
                />
                   </div>

            </div>

                <Button 
                type='submit'
                className="w-full md:w-2/5 mx-auto p-4 bg-[#f0df20] rounded-2xl font-semibold"
                >
                    Save Details
                </Button>
        </form> 
        </div>
        

    </div>
    </>
    
  )
}

export default UserInfo
