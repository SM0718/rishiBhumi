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
    <div>
        

            
    
    <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 20 March 2024 </h1>					
                       					
  <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	রক্তচাপের ব্যাপারে একটু সাবধান থাকুন। অশান্তি থেকে দূরে থাকুন। ব্যয় বাড়তে পারে। ব্যবসার ব্যাপারে উচ্চপদস্থ কোনও ব্যক্তির সঙ্গে আলোচনা করতে পারেন। প্রেমের জন্য বাড়িতে বিবাদ হতে পারে। চাকরির স্থানে কাজের চাপ বৃদ্ধি পাবে। ব্যবসায় বাড়তি লাভ হতে পারে। প্রিয়জনের কাছ থেকে আঘাত পেতে পারেন। বন্ধুদের সঙ্গে অর্থব্যয় হতে পারে। দূরে কোথাও ভ্রমণের ব্যাপারে আলোচনা হতে পারে। শরীরে কষ্ট বৃদ্ধি পেতে পারে। কোনও স্ত্রীলোকের দ্বারা ক্ষতি হওয়ার সম্ভাবনা রয়েছে। বাড়তি খরচের জন্য চাপ বাড়তে পারে।  	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	চিকিৎসার খরচ বাড়তে পারে। সঙ্গীতে সাফল্য পেতে পারেন। সংসারে ব্যয় বৃদ্ধি। কাউকে খারাপ কথা বলায় অনুশোচনা হতে পারে। লিভারের সমস্যা বাড়তে পারে। প্রিয়জনের ব্যাপারে কোনও খারাপ খবর বাড়িতে আসতে পারে। বৃথাভ্রমণ হতে পারে। সামাজিক কাজের দায়িত্ব বাড়তে পারে। নেশার প্রতি আসক্তি বৃদ্ধি পাবে। অবান্তর কথার জন্য বিবাদ হতে পারে। কোনও কারণে সম্মান নষ্ট হতে পারে। সন্তানের ব্যবহারে মনে আঘাত পাবেন। সেবামূলক কাজে শান্তিলাভ।  	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	গাড়ি একটু সাবধানে চালান। অর্শ-জাতীয় রোগ বাড়তে পারে। পড়াশোনার ক্ষেত্রে সুনাম বাড়তে পারে। প্রতিবেশীদের সঙ্গে বিবাদে না যাওয়াই ভাল হবে। সন্তানের জন্য বাড়তি খরচ হতে পারে। একটু সাবধানে চলাফেরা করা দরকার, আঘাত লাগতে পারে। স্ত্রীর প্রতি অভিমান হতে পারে। কাজের চাপের জন্য শারীরিক কষ্ট বৃদ্ধি। সম্পত্তির ব্যাপারে খরচ বাড়তে পারে। উপহার পাওয়ায় আনন্দ। মিথ্যা অপবাদ কপালে জুটতে পারে। প্রেমে আনন্দ লাভ। বাড়তি খরচের জন্য বাড়িতে বিবাদ। আত্মীয়-শোক আসতে পারে। ব্যবসা-ভাগ্য মধ্যম।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	কুসঙ্গ থেকে দূরে থাকুন। লোকে দুর্বলতার সুযোগ নিতে পারে। সন্তানের ভাল কাজের জন্য গর্ববোধ। ব্যবসায় সমস্যা বাড়তে পারে। বন্ধুদের দিক থেকে খারাপ কিছু ঘটতে পারে। বাইরের অশান্তি বাড়িতে আসতে পারে। ব্যবসায় ঝুঁকি থাকলেও লাভ বাড়বে। যুক্তিপূর্ণ কথা সুনাম বাড়াতে পারে। স্ত্রীর সঙ্গে বিবাদের জন্য ভ্রমণ বাতিল হতে পারে। খারাপ কথা বলার জন্য অনুশোচনা। জ্যোতিষচর্চা থেকে আয় হতে পারে। বিলাসিতা বৃদ্ধির জন্য বাড়িতে বিবাদ। ব্যবসার জন্য নতুন পরিকল্পনা।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	বাতের যন্ত্রণা বাড়তে পারে। কাজের ব্যাপারে ভাল যোগাযোগ হতে পারে। পাওনা আদায়ের জন্য বেশি কষ্ট পেতে হবে না। দাম্পত্য জীবন সুখে কাটতে পারে। ব্যবসায় একটু চাপ বাড়তে পারে। বুদ্ধির ভুলে কাজে ত্রুটি হতে পারে। স্ত্রীর জন্য মায়ের সঙ্গে বিবাদ ও মনঃকষ্ট। প্রেমের ব্যাপারে আনন্দ পাবেন, তবে চিন্তাও বাড়বে। পিতার সঙ্গে আলোচনায় লাভবান হবেন। আপনার পছন্দমতো কাজ পেয়ে যেতে পারেন। ব্যবসায় নতুন যোগাযোগ হতে পারে। বন্ধুস্থানীয় কারও কাছ থেকে উপকার পাবেন। অতিরিক্ত লোভ আপনাকে ডোবাতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	 ভ্রমণের জন্য খরচ বাড়তে পারে। কোনও উঁচু স্থান থেকে পড়ে যেতে পারেন। সন্তানের জন্য উদ্বেগ বাড়তে পারে। কর্মস্থানে ব্যস্ততার কারণে শারীরিক কষ্ট বৃদ্ধি। পড়াশোনার জন্য কোনও উচ্চপদস্থ ব্যক্তির সঙ্গে আলোচনা। পিঠের যন্ত্রণা বৃদ্ধি পাবে। নতুন কাজের বিষয়ে সুনাম বাড়তে পারে। ব্যবসায় আয় বাড়বে। সেবামুলক কাজে সাফল্য লাভ। কারও সঙ্গে তর্ক থেকে দূরে থাকুন। ব্যবসায় পুরনো অশান্তি ফিরে আসতে পারে। দরকারি আলোচনা আজকের মধ্যে সেরে ফেলুন। ভুল সংশোধনের সুযোগ পেতে পারেন। অনিচ্ছা সত্ত্বেও কারও সঙ্গে বন্ধুত্ব করতে হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	বাড়িতে চুরির সম্ভাবনা, সাবধান থাকুন। দাম্পত্য কলহ নিয়ে যন্ত্রণা।শারীরিক কষ্টের কারণে কাজের প্রতি অনীহা আসতে পারে। সন্তানের কারণে আনন্দ লাভ। পিতার চিকিৎসায় খরচ বৃদ্ধি।  সম্পত্তি নিয়ে সুরাহা হওয়ার সম্ভাবনা। অসুস্থতার কারণে মানসিক চাপ। ব্যবসায় অশান্তি হতে পারে। দূরে বাসরত কোনও আত্মীয়ের খবর পেতে পারেন। প্রেমে অশান্তি বৃদ্ধি পেতে পারে। পেটের সমস্যায় ভোগান্তি। নিজের লক্ষ্যে স্থির থাকুন, লাভবান হতে পারেন। কোনও দুশ্চিন্তা সারা দিন আপনাকে তাড়িয়ে বেড়াবে। পড়াশোনায় অমনোযোগ দেখা দেবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	চাকরির স্থানে উন্নতির সুযোগ আসতে পারে। ব্যবসায় মহাজনের সঙ্গে তর্ক হতে পারে। বন্ধুদের সঙ্গে সম্পর্ক নিয়ে জটিলতা বাড়তে পারে। কোনও মহিলার প্রতি আসক্তি বৃদ্ধি। বেকারদের জন্য কাজের ভাল যোগাযোগ হতে পারে। ব্যবসায় ক্ষতি হওয়ার সম্ভাবনা। খরচ বৃদ্ধি পাওয়ার জন্য মাথাগরম। কোনও প্রাজ্ঞ ব্যক্তির সঙ্গে ধর্ম নিয়ে আলোচনা করার সুযোগ পাবেন। প্রতিবেশীদের ঝামেলায় বেশি কথা না বলাই শ্রেয়। প্রেমের ব্যাপারে নির্ভয়ে এগোতে পারেন। লিভারে একটু সমস্যা দেখা দেবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	কাজের চাপ বাড়তে পারে। শারীরিক কষ্টের কারণে কাজের সময় নষ্ট। স্ত্রীর সঙ্গে সম্পর্কের উন্নতি ঘটবে। ব্যবসায় বিবাদ থেকে সাবধান থাকুন। সন্তানের জন্য খরচ বাড়তে পারে। নিজের মতে কিছু করার জন্য কর্মস্থানে বিবাদ বৃদ্ধি। বেকারদের জন্য চাকরির সুযোগ আসতে পারে। আশানুরূপ আয় বৃদ্ধির যোগ। প্রতিবেশীদের সঙ্গে বিবাদে যাবেন না। পেটের সমস্যার জন্য দুপুরের পরে কাজের ক্ষতি। কারও কাছ থেকে দামি কোনও উপহার না নেওয়াই ভাল হবে। শরীরের কোথাও যন্ত্রণা বৃদ্ধি পেতে পারে এবং আলস্য বাড়বে। আপনার আচরণে পরিবারের সকলে আনন্দ পাবেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	ব্যয় বাড়তে পারে। দুর্ঘটনা থেকে সাবধান থাকা দরকার। অতিথিসেবায় শান্তিলাভ। শত্রুভয় বাড়তে পারে। চিকিৎসার খরচ বৃদ্ধি। কর্মস্থানে সম্মান বাড়তে পারে। পিতার জন্য বিপদ থেকে উদ্ধার। প্রিয়জনের জন্য মনঃকষ্ট বৃদ্ধির সম্ভাবনা। দূরের বন্ধুর সঙ্গে যোগাযোগ হতে পারে। সহকর্মীদের সঙ্গে ভাল ব্যবহারের জন্য সুনাম পাবেন। চাকরির স্থানে কিছু পরিবর্তন দেখতে পাবেন। স্ত্রীর জন্য মানসিক চাপ বাড়তে পারে বা অশান্তি হতে পারে।  	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	কাজের ব্যাপারে উদ্যোগী হতে হবে। সামাজিক সম্মান পাবেন। একাধিক পথে আয় বাড়তে পারে। একটু সাবধানে চলাফেরা করুন, বিপদের যোগ রয়েছে। কোনও একটি কাজ নিয়ে ব্যস্ত হতে হবে। শিল্পীদের জন্য ভাল সময়। রক্তচাপ ও পেটের সমস্যা বাড়তে পারে। পড়াশোনায় অসুবিধা দেখা দিতে পারে। ব্যবসায় লাভ বৃদ্ধি পাবে। ভ্রমণে না যাওয়াই ভাল হবে, কষ্ট বাড়তে পারে। প্রিয়জনের কারণে ব্যবসায় অশান্তি হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	গানবাজনার প্রতি আগ্রহ বাড়তে পারে। কোনও আত্মীয়কে নিয়ে বিবাদ হতে পারে। প্রেমের ব্যাপারে অভিমান বাড়তে পারে। চাকরির স্থানে উন্নতির সুযোগ কাজে লাগান। বন্ধুদের কারণে বিপদে পড়তে পারেন। আগুন থেকে বিপদের সম্ভাবনা দেখা যাচ্ছে। তর্কে জয়লাভ করায় আনন্দ। আর্থিক চাপ বাড়তে পারে। সংসারের জন্য অনেক করেও বদনাম জুটবে। মাথার যন্ত্রণা বাড়তে পারে। পিতা-মাতার চিকিৎসার খরচ বাড়তে পারে। দাম্পত্য বিবাদ বিচ্ছেদ পর্যন্ত যেতে পারে। অসৎ কাজের জন্য মনঃকষ্ট। ব্যবসায় একটু পরিবর্তন দেখা দিতে পারে। কর্মস্থানে উন্নতির সুযোগ আসতে পারে।	</p>

        
    </div>
  )

    <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 20 March 2024 </h1>	
}



export default Blog


    

