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

                       <h1  className='font-semibold text-2xl float-left pr-3'>  মহাশিবরাত্রি সময় - 08/03/2024 </h1>

<p>মহাশিবরাত্রি ব্রতের নিয়ম - শিবরাত্রির আগের দিন নিরামিষ আহার গ্রহণ করে,  রাতে বিছানায় না শুয়ে খড় বা কম্বলে শুতে হয়। ব্রতের দিন উপবাসী থেকে গঙ্গা মাটি বা শুদ্ধ মাটি দিয়ে চারটি শিব গড়ে তাতেই চার প্রহরে একটি করে শিবের পূজা করতে হয়। প্রতিষ্ঠিত শিব থাকলে তাতেই চার প্রহরে চারবার পূজা করতে হয়। প্রথম পহরে দুগ্ধ দ্বারা, দ্বিতীয় প্রহরে দধি দ্বারা, তৃতীয় প্রহরে ঘৃত দ্বারা ও আখের রস দ্বারা ও চতুর্থ প্রহরে মধু ও কুশের জল দ্বারা স্নান করাতে হয়। ব্রতের দিন সারা রাত্রি জাগরণ করে পরদিন ব্রত কথা শুনে, ব্রাহ্মণ ভোজন করিয়ে এবং সাধ্যমত দক্ষিণা দিয়ে পারণ করতে হয়।
   ব্রতের উপকরণ -  গঙ্গা মাটি বা শুদ্ধ মাটি, বিল্বপত্র,  গঙ্গাজল, ফুল, দুগ্ধ, দধি, ঘৃত মধু ও কলা।
   প্রথম প্রহর - সকাল 6 টা থেকে 9 টা। 
   দ্বিতীয় প্রহর - সকাল 9 টা থেকে দুপুর 12 টা 
   তৃতীয় প্রহর - দুপুর 12 টা থেকে 3 টা 
   চতুর্থ প্রহর - দুপুর 3 টা থেকে 6 টা।
    ব্রতের ফল - যজ্ঞের মধ্যে যেমন অশ্বমেধ যজ্ঞ, তীর্থের মধ্যে যেমন গঙ্গা, তেমনি ব্রতের মধ্যে শ্রেষ্ঠ ব্রত হল শিব চতুর্দশী ব্রত। এই ব্রত পালন করলে ধর্ম, অর্থ, কাম, মোক্ষ চতুর্ভুজ ফল লাভ হয়ে থাকে।
    ব্রতকথা - বহুকাল আগে বারাণসীতে একটি ব্যাধ ছিল। দিনরাত্রি সে শুধু জীব হত্যা করত। একদিন ব্যাধ শিকার করতে গিয়ে অনেক পশুপক্ষী মেরে সন্ধ্যা ঘনিয়ে আসতেই বাড়ির দিকে রওনা হল। কিছুটা এগোতেই রাত্রি হয়ে গেল, অন্ধকার রাত্রি পথ দেখা যায় না। সে তখন এক গাছের নিচে আশ্রয় নিল। কিন্তু গভীর জঙ্গল হিংস্র জন্তু-জানোয়ারের ডাক শুনে সে ভয়ে একটা গাছে উঠে তার ডালে মাংসের ঝোলাটা বেঁধে, সেই ডালে বসে রইল গাছের ডালে বসে রইলো। সেই গাছটি ছিল বেল গাছ, গাছের নিচে ছিল শিবলিঙ্গ। ব্যাধ গাছের ডালে বসে নড়েচড়ে উঠতেই শিশির ভেজা একটি বেলপাতা খসে পড়ল সেই শিবলিঙ্গের মাথায়। সেদিন ছিল শিব চতুর্দশী। ব্যাধ ছিল উপবাসী। তাই শিবের মাথায় বেল পাতা পড়তেই শিব সন্তুষ্ট হলেন। ব্যাধ  কিছুই জানতো না তবু তার শিব চতুর্দশী ব্রতের ফল লাভ হল। সকালে ব্যাধ বাড়ি ফিরে এল। সবাই তার জন্য ভাবছিল, ব্যাধ ফিরে আসতেই তাকে তার বউ খেতে দিল। এমন সময় একজন অতিথি এলে ব্যাধ কি ভেবে তার খাবার গুলি অতিথিকে খেতে দিল। তাতে তার পারণের ফললাভ হল। কিছুদিন বাদে অসুস্থ হয়ে মারা গেল যমদূতরা তাকে নিয়ে যাবার জন্য এলো এমন সময় সেখানে শিবদূতরাও এল দুজনে যুদ্ধ বেঁধে গেল। যমদূতরা হেরে গেল। মৃতদেহ নিয়ে শিবদূতরা কৈলাসের দিকে রওনা হল,  যমদূতরাও তাদের পিছনে পিছনে ধাওয়া করল।  কৈলাসের দ্বারে নন্দী পাহারা দিচ্ছিল সে যমদূতদের কাছে শিব রাত্রির কথা বলল। যমদুতরা ফিরে গিয়ে যমকে সব জানালো। যম বললেন হ্যাঁ যে শিব বা বিষ্ণুর ভক্ত আর যে শিব চতুর্দশী ব্রত করে এবং যে বারানসিধামে মারা যায় তার ওপর আমার কোন অধিকার থাকে না। তারপর থেকে এই ব্রতের কথা চারিদিকে প্রচার হল।
    বি: দ্র: -  হাতে বেল পাতা নিয়ে পাঠ করবেন।
    আপনারা আমাদের মাধ্যমে রুদ্রাভিষেক করাতে পারেন। এই পূজা করলে রোগ থেকে আরোগ্য লাভ , অতুলনীয় ধন্ সম্পত্তি লাভ, এবং মনের মত মনের মানুষ লাভ হয়।
    </p>
                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 6 March 2024 </h1>
                       
                         		 <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	 দিনের বেলা খুব শুভ নয়, রাতের বেলা শুভ। কেরিয়ার এ উন্নতি, টাকা পয়সা আসবে। বাড়িতে কুটুম আসবে। নতুন আসবাবপত্র বাড়িতে আসতে পারে। যাত্রা শুভ।  	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	 যে চাপটা দুদিন ধরে ছিল, সেটা কমবে। সঠিক সিদ্ধান্ত দিনের  বেলা না নিয়ে রাতের বেলা নিন। যাত্রায় শুভ, পাড়া প্রতিবেশী দের শুভ বার্তালাপ দেখাচ্ছে। ফিস্ট হতে পারে। প্রেম রোমান্স এ শুভ রাতে। ভাগ্যে উন্নতি। 	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	 ব্যবসায় উন্নতি, কিন্তু শারীরিক সমস্যা, মানসিক চাপ। হঠাৎ অর্থ প্রাপ্তি যোগ, ভালো খাওয়া দাওয়া হবে। প্রেম ও পড়াশুনায় বাধা।	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	 বিবাহের জন্য প্রস্তুতি নেওয়ার দিন। প্রেম বিবাহ। ভাই বোন দের নিয়ে চাপ। ব্যবসায় ও চাকুরী তে শুভ।	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	  কর্মজীবনে নতুন সুযোগ আসতে চলেছে। শত্রু নাশ হবে, রিওয়ার্ড - অ্যাওয়ার্ড পেতে পারেন, মাসী - পিসি দের সাথে সুসম্পর্ক, সন্তানের দিক থেকে শুভ, পড়াশুনা শুভ, পরস্ত্রী ও পরপুরুষ থেকে সাবধান।	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	 মোটের উপর শুভ, পড়াশুনায় বাধা, প্রেমে কোনো রূপ সিদ্ধান্ত নেবেন না। শরীর স্বাস্থ্য কদিন ধরে খারাপ যাচ্ছিল, তারা সুস্থ হয়ে উঠবেন। এন্টারটেন্ট এর দিন। খেলাধুলা ভালো হবে। 	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	 বাড়িতে আসবাবপত্র বা মোবাইল কিনতে পারেন। এসি কিনবেন। গহনা কিনতে পারেন। পরিবারে আনন্দ থাকবে, সুবাতাবরণ থাকবে। গান - বাজনা শুভ। প্রেমে শুভ। কেরিয়ার ভালো। 	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	 খেলাধুলায় ভালো, কম্পিটিটিভ পরীক্ষার জন্য শুভ। কিছু অর্থ আগমন হবে। ভাই, বোনদের সাথে সুসম্পর্ক হবে। বাবা মা এর থেকে চাপ আসবে। প্রেমে শুভ। নিমন্ত্রণ পাবেন। বাড়িতে চাপ। বসের সাথে কথা কাটাকাটি করবেন না। ব্যবসায় ভালো। 	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	 অর্থ আসতে পারে। কুটুম আসবে বাড়িতে। ভালো রান্না হবে বাড়িতে। শরীরকে যত্ন নিন, মা এর সমস্যা। রক্তের সমস্যা হলে ডক্টর দেখান। শশুর বাড়িতে যাত্রা ।  	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	  চাপা প্রবলেম থেকে মুক্তি, অর্থ আসতে পারে। প্রেম প্রীতি শুভ। ভাই বোনের সাথে ভালো সম্পর্ক। পড়াশুনায় ভালো। কেরিয়ার এ সুযোগ।	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	  রাতের বেলা খরচা। খাওয়া দাওয়া ভালো হবে। পরিবারে সমস্যা হতে পারে । যাত্রা হবে। শারীরিক দুর্বল। প্রেমে বাধা। পিতামাতা নিয়ে চিন্তা। 	</p>
                                 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	 অর্থ আসতে পারে। রিলেশন এ খুব ভালো সময়। প্রেমে প্রপোজ করুন পজিটিভ উত্তর আসতে পারে। পড়াশুনায় ফোকাস হারাবেন না। রিস্ক কিছু নেবেন না। ইচ্ছা পূর্তি হবে। </p>	

                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
