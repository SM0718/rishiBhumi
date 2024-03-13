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

            
                    <>     
                    <div className='flex flex-col pb-4 leading-loose'>

                       
                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 13 March 2024 </h1>
                       
 <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	কুটুম্বিতা নিয়ে ছোটখাট সমস্যা নিয়ে স্বজন বিরোধ, সম্পর্কে শীতলতা। আপনার মানসিকতার সাথে খাপ খাবে এমন কোনো কাজের যোগাযোগ হতে পারে। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	অন্যের সহায়তা পাবেন। কিন্তু সেটা ধরে রাখতেই হবে। পরিচিত ব্যক্তি আপনার জন্য সুসংবাদ বহন করে নিয়ে আসবে এবং আপনি খুশি হবেন। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	কর্মস্থলে বাড়তি আয়ের যোগ। স্ত্রীর স্বাস্থ্য নিয়ে চিন্তা হতে পারে। বিকেলে অবস্থার পরিবর্তনের যোগ। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	বেকারদের সুযোগ আসতে পারে। প্রতিপদে শত্রু থেকে সতর্ক থাকতে হবে। শরীর ঠিক থাকবে। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	কর্মস্থলে কজের চাপ বেশি থাকলেও আয়ের যোগ আছে। শরীর নিয়ে গোলযোগের সম্ভবনা।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	আজ সব রকম বিবাদ এড়িয়ে চলুন। কর্মপ্রার্থীদের সুযোগ। অর্থ প্রাপ্তি যোগ। স্বাস্থ্য চলনসই।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	নিজের চেষ্টায় কর্মস্থলে সাফল্য যোগ। ব্যবসায় লাভ বাড়বে। নতুন কাজের যোগ আছে। গৃহ শান্তি বজায় থাকবে।  শরীর চলনসই। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	শারীরিক কষ্ট পাবার যোগ আছে। বিদ্যায় মনযোগের অভাবে কিছু সমস্যা হতে পারে। মাএর স্বাস্থ্য এর যত্ন নিন। নিজের স্বাস্থ্য চলনসই। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	সারাদিন কর্মব্যস্ততায় কাটবে। স্ত্রীর স্বাস্থ্য নিয়ে অস্থিরতা। কর্মস্থলে কিছু সাফল্য যোগ। প্রেমে বাধা নেই।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	স্বজনবর্গদের সাথে সম্পত্তিগত বিবাদে মানসিক অস্থিরতা বাড়বে। কর্মক্ষেত্রে অতিরিক্ত প্ররিশ্রম ও বাড়তি দাযিত্তের চাপে দৈহিক দুর্বলতা ও মানসিক অবসাদ গ্রাস করতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	মৌলিক চিন্তা ও পরিকল্পনা সফল হতে পারে। লাগামছাড়া ক্রোধ ও অহেতুক উত্তেজনা কমানো প্রয়োজন, নচেৎ বিরক্তি ও বিড়ম্বনা দেখা দিতে পারে। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	নতুন উদ্যম ও কর্ম পরিকল্পনায় সাফল্য। অতিরিক্ত ভাব প্রবণতা থেকে বাস্তববাদী হলেই মঙ্গল। কোমর থেকে নীচের দিকে বাতজ ব্যথা বেদনা বৃদ্ধিতে চলাফেরায় অসুবিধা ও কাজকর্মে বাধা।	</p>
	     
                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
