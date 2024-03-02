import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'

function Blog() {
    const [blog, setBlog] = useState([])
    const [loader, setLoader] = useState(true)
    

    const blogData = async() => {
        try {
            const data = await appwriteService.getBlogData();
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

    const BlogDate = (date) => {
        const currentDate = new Date(date.date);
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
        return <p className='text-xl'>{`${formattedDate}`}</p>
    }
    
  return (
    <div className='w-full h-auto py-2 px-2'>
        <div className='my-10'>
            {
                !loader? blog.map((item, index) => (
                    <>
                        {
                        ((index+1)%13 === 0 || index===0)? <div className='w-full flex justify-between pb-4'>
                                                <div className='w-full h-0 my-auto border border-black'/>    
                                                    <span className='flex gap-2 px-2'>
                                                        <BlogDate date={item.$createdAt}/>
                                                    </span>
                                <div className='w-full h-0 my-auto border border-black'/>
                                            </div> : <></>
                        }
                    

                    <div key={item.raashi} className='flex flex-col pb-4 leading-loose'>
                        <h1 className='font-semibold text-2xl float-left pr-2'>{item.raashi}:</h1>
                        <p>{item.predictions}</p>
                    </div>
                    </>
                    
                )) : (
                    <div className='w-full flex flex-col justify-center content-center gap-10 my-10'>
                        <div className='w-16 h-16 mx-auto rounded-full border-2 border-t-black animate-spin'/>
                    </div>
                )
            }

        </div>
    </div>
  )
}

export default Blog
