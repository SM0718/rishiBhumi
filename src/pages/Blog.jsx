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
        return <span>{`${formattedDate}`}</span>
    }
    
  return (
    <div className='w-full h-auto py-2 px-2'>
        <div className='my-10'>
            {
                !loader? blog.map((item, index) => (
                    <>
                    
                    <h2>	মেষ রাশি:	</h2>
                    <p>	 শুভ সময়, পড়াশুনায় শুভ, কেরিয়ারএ উন্নতি, নতুন সুযোগ আসবে, ভাই বোন পাড়া প্রতিবেশী দের সাথে সুসম্পর্ক , মানসিক চাঞ্চল্য কেটে সুখ আসবে। অতীতের স্মৃতি আসবে ফিরে।  	</p>
                        
                    <div key={item.raashi} className='flex flex-col pb-4 leading-loose'>
                        <h1 className='font-semibold text-2xl float-left pr-2'>{`${item.raashi} `}(Published on: <BlogDate date={item.$createdAt}/>):</h1>
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
