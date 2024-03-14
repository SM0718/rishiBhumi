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
                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 14 March 2024 </h1>
                       
  <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	কর্তাব্যক্তির ভুল ধরায় পদোন্নতির আশা হোঁচট খেতে পারে।  উত্তরাধিকার সূত্রে পাওয়া সম্পত্তির ভোগ দখল নিয়ে বিরোধ বাড়তে পারে। এই কারণে ভ্রমণের চিন্তা বাতিল করতে হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	অপ্রিয় সত্য কথনের প্রবণতা থেকে সর্বক্ষেত্রে বিড়ম্বনা দেখা দিতে পারে। বন্ধুর বিপদে অন্যত্র থাকার জন্য সাহায্য করা সম্ভব নাও হতে পারে। পদস্থ ব্যক্তি কে ভীতির কোন কারণ দেখা যায় না।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	আলস্য বা উদাসীনতায় বড় যোগ হাতছাড়া হতে দেওয়া উচিত হবে না। শেয়ার বা ফটকায় বাড়তি বিনিয়োগ রাশ টানা দরকার নচেৎ ক্ষতির আশঙ্কা।  পুরনো অসুখ  আবার চাগাড় দিতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	ব্যবসায়িক ক্ষেত্রে অস্থিরতা ক্রমাগত বেড়ে চলায় দুশ্চিন্তা সীমা ছাড়াতে পারে। বিকল্প কর্মসংস্থানের চেষ্টা চালিয়ে যাওয়া দরকার। সন্তানের স্বাস্থ্য নিয়ে উদ্বিগ্ন থাকতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	শত্রুভাবাপণ্য সহকর্মীদের সঙ্গে সমঝোতা হয়ে যেতে পারে। দাম্পত্য জীবনে কলহের অবসান বন্ধুর পরামর্শে ও সহায়তায়। পরিস্থিতির কারণে নিকট জনের সঙ্গে যোগাযোগ থাকবে। দন্তক্ষয় ভোগাবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	সম্পত্তি নিয়ে ভাই বোনের সঙ্গে লড়াইয়ে অর্থ ও সময় নষ্ট, সম্পর্কে অবনতি। পেশা পরিবর্তনের চিন্তা আপাতত স্থগিত রাখাই ভালো। আয়-ব্যয়ের মধ্যে সমতা রাখা কঠিন হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	মানসিক শক্তির জোরে বিপদ থেকে উদ্ধার। পৈত্রিক ব্যবসা সম্প্রসারণের জন্য অর্থের সংস্থান না-ও হতে পারে। পরিচিত কারো সঙ্গে অনৈতিক কর্ম নিয়ে ভুল বোঝাবুঝি হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	ব্যক্তিগত প্রশিক্ষণে সাফল্য, কর্মে বিশেষ সাফল্য। দূরে বদলির সম্ভাবনা।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	বন্ধুর অনৈতিক কাজকর্মের জেরে আত্মগ্লানি ও সম্পর্কে শীতলতা। দৈনন্দিন প্রতিকূলতা যাই থাকুক না কেন বিপরীত গন্তব্য বা ঠাট্টা না করাই ভালো  শারীরিক সমস্যা অল্পবিস্তার ভোগাবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	কর্মক্ষেত্রে উন্নতি হবে। প্রশাসনিক দায়িত্ব বৃদ্ধিতে মানসিক চাপ বাড়বে। পুরনো বন্ধুকে অবিশ্বাস করে আফসোস করতে হতে পারে। আপনার প্রভাব কেউ স্বীকার না করলেও পরোক্ষভাবে শ্রদ্ধা করবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	বন্ধুর স্থানীয় সহ কর্মীদের সহায়তায় শত্রুপক্ষের তৎপরতা দমন করে কর্মস্থলে অগ্রগতি অব্যাহত। নতুন পরিকল্পনায় নামার আগে সব দিক বিবেচনা করা একান্ত দরকার।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	নতুন পরিকল্পনায় উপার্জন বৃদ্ধির সম্ভাবনা। শুভ যোগাযোগ কাজে লাগাতে পারলে সাফল্যের সম্ভাবনা। কর্ম পরিবর্তনের সুযোগ ও অর্থনৈতিক উন্নতির সূচনায় সঞ্চয় বৃদ্ধির পরিকল্পনা।	</p>

               
                    
                    <hr>
                    <br>                    
                    <h1 className='font-semibold text-3xl float-left pr-2'>হোলি বা দোল উৎসব</h1>
 
                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
