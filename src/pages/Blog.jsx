import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'

function Blog() {
    const [blog, setBlog] = useState([])
    const [loader, setLoader] = useState(true)
    const currentDate = new Date();
    const day = currentDate.getDate();

    const blogData = async() => {
        try {
            const data = await appwriteService.getBlogData(day.toString());
            if(data) {
                if(data.total > 0) {
                    setBlog(data.documents);
                    setLoader(false)
                } else {
                    alert("New Predictions Are Being Uploaded")
                }
                
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
      blogData()
    }, [])
    
  return (
    <div className='w-full h-auto py-10'>
        <div className='w-full flex justify-between'>
        <div className='w-full h-0 my-auto border border-black'/>    
            <span className='flex gap-2 px-2'>
                <p className='text-xl'>Today's</p>
                <p className='text-xl'>Predictions</p>
            </span>
        <div className='w-full h-0 my-auto border border-black'/>
        </div>
        <div className='my-10'>
            {
                !loader? blog.map((item) => (
                    <div key={item.raashi} className='flex flex-col pb-4 leading-loose'>
                        <h1 className='font-semibold text-2xl float-left pr-2'>{item.raashi}:</h1>
                        <p>{item.predictions}</p>
                    </div>
                )) : (
                    <div className='w-full flex flex-col justify-center content-center gap-10 my-10'>
                        <div className='w-16 h-16 mx-auto rounded-full border-2 border-t-black animate-spin'/>
                    </div>
                )
            }
            <h1>Hello World</h1>
            <p>Predictions</p>
        </div>
    </div>
  )
}

export default Blog
