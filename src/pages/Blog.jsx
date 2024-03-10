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

                       
                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 10 March 2024 </h1>
                       
                         		    <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	 গতানুগতিকতা  এড়িয়ে অভিনব পন্থায় কর্মস্থলে সংস্থার মোকাবিলা।  পারিবারিক কোনো শুভ অনুষ্ঠানে দুর্বৃত্তের দৌরাত্ম্যের জন্য তালভঙ্গ। অগ্রপ্রশ্চাত বিবেচনা করে ক্ষেত্র বুঝে উদারতা দেখানো ভালো।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	 আমদানি রপ্তানি ব্যবসায় বাড়তি মূলধন বিনিয়োগ আপাতত স্থগিত রাখাই ভাল। কে কি ভাবল তা নিয়ে চিন্তা না করে শরীর বাঁচিয়ে কাজ করুন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	 মাত্রা ছাড়া উচ্চ বিলাস থেকে বিরম্বনা বাড়তে পারে। নিজের অস্তিত্বকে প্রতিষ্ঠা করার জন্য প্রতিকূল বাতাবরণ থেকে বেরিয়ে আসার চেষ্টা করুন। সন্তানের মনোভাবের সঙ্গে আপনাকে বানিয়ে চলতে হবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	 কর্মস্থলে জটিলতায় উদ্বেগ বাড়বে। সংস্থা পরিবর্তনের চেষ্টা চালিয়ে যাওয়া দরকার। সন্তানের উচ্চশিক্ষা ও গবেষণার বিলম্বিত সুযোগ দোটানায় ফেলে দিতে পারে। নিম্নাঙ্গের পীড়ার প্রকোপ বৃদ্ধিতে ও কাজকর্মে বাধা। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	 দুর্জনের  অপচেষ্টা রুখে দিয়ে প্রশংসা পেতে পারেন।  ব্যবসায় বাড়তি মূলধন বিনিয়োগ সত্ত্বেও হঠাৎ লোকসান দিশেহারা করে দিতে পারে।  মাতৃস্থানীয় কোন আত্মীয়ার প্রভাব আপনাকে স্বস্তিতে রাখবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	 কর্মক্ষেত্রে বহু শ্রম, দক্ষতা ও অধ্যবসায়ের স্বীকৃতির সম্ভাবনা। গুরুজনের স্বাস্থ্যের অবনতিতে উদ্বেগ, বহু ব্যয় ও কাজ কর্ম ব্যাহত হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	 সম্পত্তি সংক্রান্ত মামলার ফল অনুকূলে যাওয়ারই সম্ভাবনা, সন্তানের চালচলন আপনাকে মাঝেমধ্যে বিচলিত করতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	 ব্যবসা সম্প্রসারণে প্রতিপক্ষের বাগড়ায় আইনি ব্যবস্থা নিতে পারেন। একাধিক পদে বাড়তি আয়ের জন্য সম্পত্তি ক্রয়ের সুযোগ আসতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	 কর্ম ক্ষেত্রে সমস্ত বাধা-বিপত্তি কাটিয়ে অগ্রগতি অব্যাহত।  অংশীদারের কূটচালে ব্যবসায় নিম্নগতি চিন্তা বাড়িয়ে দিতে পারে। প্রিয়জনের বিয়ের প্রাথমিক কথাবার্তা শুরু করা যেতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	 সন্তানের অধ্যয়নগত সাফল্যে গর্ববোধ করবেন। বিশিষ্ট ব্যক্তির সঙ্গে যোগাযোগে জটিল বিষয়ের মীমাংসা করে ফেলতে পারেন। শরীর নিয়ে অল্প বিস্তার সমস্যা লেগে থাকবে, কিন্তু চিন্তার কোন কারণ দেখা যায় না।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	 কর্মস্থলে পরিস্থিতি খারাপ হতে থাকায় মানসিক অস্থিরতা বাড়বে। বিকল্প কর্মসংস্থানের চেষ্টা চালিয়ে যাওয়া দরকার। পুরনো বন্ধুর সঙ্গে হঠাৎ দেখা হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	 অতিরিক্ত কাজের চাপে শারীরিক ক্লান্তি ও মানসিক অবসাদ ঘিরে ধরতে পারে।  বন্ধু বলে যাকে বিশ্বাস করেন তার সঙ্গে পুনরায় যোগাযোগ হলেও তেমন গ্রহণযোগ্য নাও হতে পারে।	</p>

                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
