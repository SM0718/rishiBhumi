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
                         <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	 শুভ নয়। মানসিক চাপ, শারীরিক অসুস্থতা। তা সত্বেও রিওয়ার্ড -  অ্যাওয়ার্ড পাবার দিন। পড়াশুনায় ভালো, কম্পিটিটিভ পরীক্ষায় ভালো দিন। যাত্রায় শুভ নয়। পিতার শারীরিক অসুস্থতা।	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	 শুভ নয়। মানসিক দুশ্চিন্তা। মানসিক চাপ, দায়িত্ত্ব বাড়বে। অপমান। প্রেম -  প্রীতি -  ভালোবাসায় সুখ কম। হঠাৎ অর্থ প্রাপ্তি আছে। যাত্রা অশুভ।	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	  ব্যবসা ও রিটেল সার্ভিস এর জন্য ভালো l প্রেম প্রীতি -  ভালোবাসা শুভ। বাড়ির জন্য একটু দুশ্চিন্তা থাকবে। মানসিক থেকে অবসাদ হতে পারে। পড়াশুনায় বাধা।	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	 চাকরি তে পরিবর্তন। কম্পিটিটিভ পরীক্ষার জন্য শুভ। শারীরিক দিক থেকে একটু সমস্যা। বেশি করে জল খান। মামা মাসী পিসির বাড়ির থেকে শুভ। পড়াশুনায় শুভ। 	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	 অর্থ প্রাপ্তি ও অর্থ নাশ দুটোই হবে। প্রেম প্রীতি ভালোবাসা থেকে শুভ। পড়াশুনায় মনোযোগী। ধৈর্য রাখতে হবে।	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	 বাড়ি এবং মায়ের দিক থেকে চাঞ্চল্য কর পরিস্থিতি , কিন্তু সেটি শুভ। ভগবান দর্শন হবে। হঠাৎ প্রাপ্তি যোগ। ভাই বোন পাড়া প্রতিবেশী দের থেকে শুভ। বাড়ির পজিশন থেকে রিলিফ। 	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	 পড়াশুনায় উন্নতি। যাত্রা শুভ। নিজ চেষ্টায় উন্নতি। কোনো না কোনো ভাবে ঘুরতে যাবে, ইচ্ছা পূর্তি, ব্যবসায় ভালো, অর্থনৈতিক শুভ। 	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	 অর্থনৈতিক ভাবে শুভ। অসুস্থতা। খান পান এর থেকে শুভ। জল খান। টাকা পয়সা পাবেন। কুটুম আসবে। বিবাহ ও সন্তান প্রাপ্তির জন্য শুভ।	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	  অনেক দিন ধরে ধকল যাচ্ছে, সেটা ভালো হবে । অর্থ প্রাপ্তি যোগ। অতীত সমস্যার সমাধান, কাজে অনীহা, হঠাৎ করে মন বিশ্রাম চাইবে। 	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	 একটু খরচা বৃদ্ধি হবে। তবুও শুভ। অর্থ আসবে। প্রেম প্রীতি ভালোবাসাতে যুক্ত হবে। এক্সট্রা ম্যারিটাল অ্যাফেয়ার থেকে সাবধান। কমার্স এ যুক্ত পড়াশুনায় ভালো না। যাত্রা শুভ।	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	 সাড়ে   সাতি চলছে, তবুও অর্থ আসবে। খরচা হবে। পারিবারিক চাপ। পড়াশুনায় ও প্রেমের জন্য শুভ। আবার কোনো দুসংবাদ  আসতে পারে। 	</p>
                         <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	 ওভার কনফিডেন্স বাদ রাখুন। প্রাকটিক্যাল থাকুন। সত্য ও সৎ পথে থাকুন। পড়াশুনায় শুভ। নেগেটিভ কাজ করবেন না। নিজেদের ঠিক রাখুন। আধ্যাত্মিক থাকুন।	</p>

                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
