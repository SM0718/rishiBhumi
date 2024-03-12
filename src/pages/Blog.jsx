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

                       
                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 12 March 2024 </h1>
                       
                         		      <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	শুভানুধ্যায়ীর হস্তক্ষেপে কর্মস্থলে গুরুত্বপূর্ণ সমস্যার সমাধান হতে পারে। প্রিয়জনের বিয়ের আলোচনার ভেস্তে যাওয়ায় দুশ্চিন্তা বাড়বে।  পারিবারিক দায়িত্ব পালন করে অপবাদ জুটতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	সহকর্মীদের অপপ্রচার সত্ত্বেও কর্মস্থলে স্বীকৃতির উজ্জ্বল সম্ভাবনা। দু:স্থ প্রিয়জনের দেখভালের দায়িত্ব নিতে হতে পারে ও সংসারে অশান্তি বাড়তে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	শত্রুর মোকাবিলায় এখনই আইনি সাহায্য নেওয়া দরকার। আলস্য বা উদাসীনতায় শুভ হোক হাতছাড়া হতে দেওয়া ঠিক হবে না। চুরি বা পকেটমারিতে অর্থ হানি হতে পারে ।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	কর্মসূত্রে ভিন রাজ্যে এমনকি বিদেশে যাওয়ারও সুযোগ আসতে পারে। বিলাসদ্রব্য ব্যবসায় বাড়তি বিনিয়োগের শুভ সময়। শুভ প্রভাব আপনার  চিন্তা শক্তিকে আরও গঠনমূলক ক্ষেত্রে পৌঁছে দিতে পারে। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	সময়োচিত সাহসও বুদ্ধি বলে বিপদ থেকে রক্ষা।  বন্ধু বলে যাকে বিশ্বাস করবেন, সে বিশ্বাস নাও রাখতে পারে। আপনার  দক্ষতা ও পরিশ্রমে ধাতব্য প্রতিষ্ঠানের উন্নতি হতে পারে 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	বন্ধু যতই ঘনিষ্ট হোক আর্থিক সচেতন থাকা দরকার। কারও প্রভাবে কোন কাজে তাড়াহুড়ো করবেন না।  পাওনা অর্থ চেষ্টা করে পেয়ে যেতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	ব্যবসায় ক্রমবর্ধমান জটিলতা মানসিক অস্থিরতা বাড়িয়ে দিতে পারে।  সৃষ্টিশীল কাজে নতুনত্বের কম বেশি স্বীকৃতি পাওয়ার সম্ভাবনা। তুচ্ছ কারণে প্রিয়জনের সঙ্গে বিষাদে মানসিক শান্তি নষ্ট হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	ভাই বোনের সঙ্গে সম্পত্তিগত বিবাদ আদালত পর্যন্ত গড়াতে পারে। সংস্থা পরিবর্তনের চেষ্টা আপাতত না করাই ভালো। স্বাস্থ্য নিয়ে বিশেষ চিন্তার কোন কারণ দেখা যায় না।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	সম্পত্তি সংস্কার ও নতুন নির্মাণ জ্ঞাতিদের বাগরায় আটকে যেতে পারে, কোমর থেকে নিচের দিকে ব্যথা বেদনার প্রকোপ বৃদ্ধিতে চলাফেরা অসুবিধে ও কাজকর্মে বাধা।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	দেরিতে হলেও নামি প্রতিষ্ঠানে উচ্চশিক্ষার সুযোগ হাতছাড়া করা উচিত হবে না।  পারিপার্শ্বিক বাধায় নতুন কোন পদক্ষেপ নেওয়া সম্ভব হবে না। পায়ের হাড় বাড়ায় চলাফেরা অসুবিধা।  	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	স্বামী স্ত্রী উভয়ের চেষ্টায় সাংসারিক সমস্যার সমাধান ও শ্রী বৃদ্ধি।  নিজের যোগ্যতা নিজেই বুঝে নেবেন পরবর্তী পদক্ষেপ কি হওয়া উচিত। স্বাস্থ্য ভালো থাকবে। 	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	কর্মক্ষেত্রে প্রশাসনিক দায়িত্ব বৃদ্ধির সঙ্গে সঙ্গে দূরে বদলির সম্ভাবনা।  কিছুদিন শেয়ার বা ফটকায় অতিরিক্ত বিনিয়োগ না করাই ভালো। নচেৎ ক্ষতির আশঙ্কা।	</p>

                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
