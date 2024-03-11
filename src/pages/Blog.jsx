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

                       
                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 11 March 2024 </h1>
                       
                         		     <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	অতিরিক্ত উচ্চাকাঙ্ক্ষার অসঙ্গত প্রকাশ কর্মস্থলে বিপদ থেকে আনতে পারে, ক্ষমতা ও পরাক্রম বৃদ্ধি পেলেও পেলেও তা অপপ্রয়োগ করবেন না।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	পৈত্রিক ব্যবসার লগ্নিতে আপাতত রাশ টানা দরকার, নচেৎ ক্ষতির আশঙ্কা। প্রশংসা ও নিন্দা কোনটাতেই কিছু মনে করবেন না, যা উপযুক্ত মনে করবেন তাই করুন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	কর্মস্থলে অকারণ তর্কের মারাত্মক দাম দিতে হতে পারে। জাতিশত্রুর হাত থেকে বিষয়সম্পত্তি রক্ষা করতে আইনি ব্যবস্থা নেওয়া দরকার।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	দূরে বদলির নির্দেশ ভাগ্যদ্বয়ের উজ্জ্বল ইঙ্গিত বয়ে আনতে পারে। অকারণ বিবাদ বিতর্ক এড়িয়ে চলার চেষ্টা করা দরকার। উদ্বোধনী শক্তির প্রকাশের দ্বারা প্রতিভার স্বীকৃতি পেতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	কর্মদক্ষতা ও নিষ্ঠা সত্ত্বেও ফল না-পাওয়ায় হতাশা বাড়বে। বিকল্প কর্মসংস্থানের চেষ্টা চালিয়ে যাওয়া দরকার। হঠকারী সিদ্ধান্ত না নেওয়াই ভালো, নচেৎ বিপত্তি দেখা দিতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	কর্মস্থলে বহু দিনের সমস্যার মোকাবিলা করে কর্তৃপক্ষের সুনজরে পড়তে পারেন। সম্পত্তি কেনার ক্ষেত্রে গুরুজনের সঙ্গে মতান্তর ও মনান্তরে মানসিক ক্লেশ।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	কারণে অকারণে  অপ্রিয় সত্যকথনে ঘরে-বাইরে শত্রুবৃদ্ধির ঝুঁকি না-নেওয়াই ভালো। নিজের কর্ম কৃতিত্বের জন্য কর্তৃপক্ষের সুনজরে করতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	অনৈতিক পথে উপার্জন বৃদ্ধির প্রলোভন এড়াতে না পারলে বিপদ দেখা দিতে পারে। আইন আদালত এড়িয়ে আলোচনার মাধ্যমে আত্মীয়-স্বজনের সঙ্গে সম্পত্তিগত বিবাদ মিটে যেতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	বিষয় সম্পত্তি সংক্রান্ত বিষয়ক মামলার ফল সন্তোষজনক হতে পারে।  কাউকে ধার দিলে তা ফেরত পাওয়া কঠিন হতে পারে, সভা -সমিতিতে যুক্তিপূর্ণ বক্তৃতায় শ্রোতাদের মন জয় করতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	বুদ্ধি বলে ও সময়োচিত সাহসে শত্রুর চাল ভেস্তে দিতে পারেন। গুরুজনের হঠাৎ স্বাস্থ্যের অবনতিতে উদ্বেগ বহুব্যয়ে  নাজেহাল ও কাজকর্ম ব্যাহত হতে পারে। এই কারণে ভ্রমণের চিন্তা বাতিল।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	জ্ঞাতি পড়শির  বাগড়ায় গৃহ নির্মাণের সম্পত্তি সংস্কারের পরিকল্পনায় বাধা। ব্যবসায়িক কারণে ঋণ নিয়ে চিন্তা বাড়তে পারে। গুরুজনের সঙ্গে বিতর্ক বিবাদে না যাওয়াই ভালো।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	অংশীদারের কারসাজি ও কর্মীদের সঙ্গে সংঘাতে নিম্নগতি চিন্তা বাড়বে। স্বজনের অনৈতিক কাজের প্রতিবাদ করার সংসারে অশান্তি বাড়বে। সংক্রমণজনিত জ্বর-সর্দি-কাশি ও পাকাশয়ের সমস্যাগুলোতে দুর্ভোগ।	</p>

                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
