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
			      <h1 className='font-semibold text-3xl float-left pr-2'>হোলি বা দোল উৎসব</h1>
  <h1 className='font-semibold text-2xl float-left pr-2'>*24 03 2024 - 09:43 am to 25 03 2024 - 11: 48 am* </h1>

<p><h3>চলুন জেনে নিই এর মাহাত্ম্য, পেছনের ইতিহাস।</h3>

<h3>দোল কি?</h3>  
 দোলযাত্রা -কে অনেকে সংক্ষেপে দোল বলে থাকেন।ফাগুন মাসের পূর্ণিমা তিথিতে (প্রচলিত পঞ্জিকা অনুসারেঃ ১৪ তম রাতের পরবর্তী দিন) দোলযাত্রা নামক অনুষ্ঠানটি অনুষ্ঠিত হয়। যাকে অনেকে "বসন্তোৎসব" -ও বলে থাকে। দোলযাত্রা একটি হিন্দু বৈষ্ণবীয় উৎসব। এটি  বিভিন্ন স্থানে (বহিঃবঙ্গে) "হোলি উৎসব" নামে-ও পরিচিত। পরস্পর সম্পর্কযুক্ত। আবার, এই পূর্ণিমা তিথিতেই শ্রী চৈতন্য মহাপ্রভু জন্মগ্রহণ করেন বলে একে গৌর-পূর্ণিমা নামেও অভিহিত করা হয়।<br><br>
<h3>উদ্ভব কিভাবে?</h3>
এটি বৈষ্ণব মতানুসারীদের অন্যতম প্রধান ধর্মীয় উৎসব হিসেবে বিবেচিত হয়।বৈষ্ণব বিশ্বাস অনুযায়ী, এই ফাল্গুনী পূর্ণিমা তিথিতে বা দোল পূর্ণিমার দিন বৃন্দাবনের নন্দ কাননে ভগবান শ্রীকৃষ্ণ আবির ও গুলাল নিয়ে তার সখী রাধিকা দেবী ও অন্যান্য ৩৩ কোটি (লক্ষ / হাজার) গোপী-গণের সাথে রং ছুরো-ছুরির খেলায় মেতেছিলেন!!!যার অনুকরণ থেকেই দোল খেলার উৎপত্তি হয়।<br><br>
<h3> কি-ভাবে পালিত হয়?</h3>
দোলযাত্রা -র দিন সকালে ভগবান কৃষ্ণ ও রাধিকাদেবীর বিগ্রহ আবির ও গুলালে স্নান করিয়ে দোলায় চড়িয়ে কীর্তনগান সহকারে শোভাযাত্রায় বের করা হয়। এরপর ভক্তরা আবির ও গুলাল নিয়ে পরস্পর রং ছুড়ো-ছুরি করেন। অনেকেই শ্রী চৈতন্য মহাপ্রভু -এর আবির্ভাব-তিথি উপলক্ষ্যে উপবাস থাকেন।দোলের পূর্বদিন খড়, কাঠ, বাঁশ ইত্যাদি জ্বালিয়ে এক বিশেষ বহ্নি-উৎসবের আয়োজন করা হয়। একেহোলিকা-দহন বা মেড়া-পোড়া নামে অভিহিত করা হয়।উত্তর ভারতে হোলি উৎসবটি বাংলার দোলযাত্রার পরদিন পালিত হয়।<br><br>

<h3>এর সার্বজনীনতা কি???</h3>

সম্ভবতঃ সনাতন হিন্দু ধর্মীয় আচার আচরণ-গুলোর মধ্যে সবচেয়ে সার্বজনীন উৎসব হিসেবে এটি-ই স্বীকৃত। এই দোলযাত্রা উৎসবের একটি ধর্মনিরপেক্ষ দিকও রয়েছে। এই দিন সকাল থেকেই নারী-পুরুষ / ধর্ম-বর্ণ নির্বিশেষে আবির ও গুলাল নিয়ে রং ছুরো-ছুরির খেলায় মত্ত হয়।শান্তিনিকেতনে বিশেষ নৃত্যগীতের মাধ্যমে বসন্তোৎসব পালনের রীতি রবীন্দ্রনাথ ঠাকুরের সময়কাল থেকে দৈত্যরাজ হিরণ্যকিশপুর কাহিনি আমরা সকলে জানি। ভক্ত প্রহ্লাদ অসুর বংশে জন্ম নিয়েও পরম ধার্মিক ছিলেন। তাঁকে যখন বিভিন্নভাবে চেষ্টা করেও হত্যা করা যাচ্ছিল না তখন হিরণ্যকিশপুর বোন হোলিকা প্ৰহ্লান্দকে কোলে নিয়ে আগুলে প্রবেশের সিদ্ধান্ত নেন। কারণ হোলিকা এই বর পেয়েছিল যে আগুনে তার কোন ক্ষতি হবে না। কিন্তু অন্যায় কাজে শক্তি প্রয়োগ করায় হোলিকা প্রহ্লাদকে নিয়ে আগুনে প্রবেশ করলে বিষ্ণুর কৃপায় প্রহ্লাদ অগ্নিকুণ্ড থেকেও অক্ষত থেকে যায় আর ক্ষমতার অপব্যবহারে হোলিকার বর নষ্ট হয়ে যায় এবং হোলিকা পুড়ে নিঃশেষ হয়ে যায়, এই থেকেই হোলি কথাটির উৎপত্তি অন্যদিক বসন্তের পূর্ণিমার এই দিনে ভগবান শ্রীকৃষ্ণ কেশি নামক অসুরকে বধ করেন। কোথাও কোথাও অরিষ্টাসুর নামক অসুর বধের কথাও আছে। অন্যায়কারী, অত্যাচারী এই অসুরকে বধ করার পর সকলে আনন্দ করে। এই অন্যায় শক্তিকে ধ্বংসের আনন্দ মহাআনন্দে পরিণত হয়। অঞ্চল ভেদে হোলি বা দোল উদযাপনের ভিন্ন ব্যাখ্যা কিংবা এর সঙ্গে সংপৃক্ত লোককথার ভিন্নতা থাকতে পারে কিন্তু উদযাপনের রীতি এক।বাংলায় আমরা বলি ‘দোলযাত্রা’ আর পশ্চিম ও মধ্যভারতে ‘হোলি। রঙ উৎসবের আগের দিন ‘হোলিকা দহন' হয় অত্যন্ত ধুমধাম করে শুকনো গাছের ডাল, কাঠ ইত্যাদি দাহ্যবস্তু অনেক আগে থেকে সংগ্রহ করে সু-উচ্চ একতা থাম বানিয়ে তাতে অগ্নি সংযোগ করে ‘হোলিকা দহন’ হয় পরের দিন রঙ খেলা বাংলাতেও দোলের আগের দিন এইরকম হয় যদিও তার ব্যাপকতা কম আমরা - বলি ‘চাঁচর’ । এই চাঁচরেরও অন্যরকম ব্যাখ্যা আছে। দোল আমাদের ঋতুচক্রের শেষ উৎসব। পাতাঝরার সময়, বৈশাখের প্রতীক্ষা। এই সময় পড়ে থাকা গাছের শুকনো পাতা, তার ডালপালা একত্রিত করে জ্বালিয়ে দেওয়ার মধ্যে এক সামাজিক তাৎপর্য রয়েছে পুরনো জঞ্জাল, রুক্ষতা, শুষ্কতা সরিয়ে নতুনের আহ্বান হচ্ছে এই হোলি। বাংলায় দোলের আগের দিন ‘চাঁচর’ উদযাপনকে এভাবেই ব্যাখ্যা করা হয় । আমাদের অনেক ধর্মীয় উৎসবেই আঞ্চলিক লোক সংস্কৃতি ও রীতির প্রভাব দেখা যায়, হোলিও তার ব্যতিক্রম নয়। বাংলার দোলযাত্রায় গৌড়ীয় বৈষ্ণব রীতির প্রাধান্য পায়। ঐতিহাসিকরা বিশ্বাস করেন পূর্বভারতে আর্যরা এই উৎসব পালন করতেন যুগে যুগে এর উদযাপন রীতি পরিবর্তিত হয়ে এসেছে। পুরাকালে বিবাহিত নারী তার পরিবারের মঙ্গল কামনায় রাকা পূর্ণিমায় রঙের উৎসব করতেন । দোল হিন্দু সভ্যতার অন্যতম প্রাচীন উৎসব। নারদ পুরাণ, ভবিষ্য পুরাণ ও ‘জৈমিনি মীমাংশা’য় রঙ উৎসবের বিবরণ পাওয়া যায় ৩০০ খৃষ্টপূর্বাব্দের এক হোলি সম্পর্কে বড়ো একটি তথ্য সকলে এড়িয়ে যায়। ধর্ম ও সমাজ ওতোপ্রোত জড়িত। আর একটি উৎসব বা দিন আরও পবিত্র হয়ে ওঠে যদি উক্ত দিনে পৃথিবী মহান পুরুষের জন্ম দেয়। বাঙালি তথা হিন্দু সমাজের অন্যতম মহাপুরুষ শ্রীচৈতন্যের জন্মতিথি হচ্ছে এই পূর্ণিমা তিথি তথা হোলি তিথি। এই মহান পুরুষের জন্ম শিলালিপিতে রাজা হর্ষবর্ধন কর্তৃক ‘হোলিকোৎসব’পালনরে উল্লেখ পাওয়া যায় হর্ষবর্ধনের নাটক ‘রত্নাবলী’তেও হোলিকোৎসবের উল্লেখ আছে। <br><br>


<h3>দোল পূর্ণিমায় করণীয় কিছু টোটকা </h3>
১) দোলের দিন অবশ্যই বাড়ির গৃহ দেবতা , কূলদেবতা, গুরুজন পিতা-মাতা ও গুরুদেবের পায়ে আবির দিয়ে তাদের আশীর্বাদ নেবেন। <br>
২) যাদের আর্থিক ব্যাপারে নানা অসুবিধা হচ্ছে, আয়ের থেকে ব্যায় বেশি হচ্ছে, সঞ্চয় একদম হচ্ছে না, যেকোনো কারণেই হোক জলের মতো টাকা খরচ হয়ে যাচ্ছে অর্থাৎ যে কোন আর্থিক সমস্যার জন্য এই ক্রিয়াটি করতে পারেন। দোল পূর্ণিমার দিন অনেকেরই বাড়িতে সত্যনারায়ন পূজা বা সির্নি প্রসাদ দিয়ে থাকেন, এটি খুব ভালো দিন যাদের বাড়িতে পূজা হয় তারাই তো করবেনই,  যাদের বাড়িতে আয়োজন করে পূজা হয় না বা সির্নি দেওয়া সম্ভব হয় না তারা গৃহের লক্ষ্মীনারায়ণ বা রাধাকৃষ্ণের চিত্রের মালা পরিয়ে ধুপ-দীপ জ্বালিয়ে ফল মিষ্টি দিয়ে পূজা করবেন এবং ১০৮ বার নমঃ বাসুদেবায় নম: মন্ত্রটি পাঠ করে নিরামিষ আহার করে দিনটি কাটালে সংসারে মঙ্গল তো হবেই স্বামী-স্ত্রীর নিত্য দাম্পত্য কলহ দূর হবে সংসারে শান্তি ফিরে আসবে। বহু টোটকা, বিপদ-আপদ থেকে রক্ষা পাবে। গুপ্ত শত্রুরা ক্ষতি করতে পারবেনা সর্বোপরি শারীরিক ও মানসিক দিক থেকে শান্তি পাবে।<br>
৩) ছাত্র-ছাত্রীরা মেধা শক্তি বাড়ানোর জন্য ও পড়াশোনায় একাগ্রতা আনার জন্য দোল পূর্ণিমার দিনে একটি পাত্রে কর্পূর জ্বালিয়ে তার মধ্যে পাঁচটি ফুলসহ লবঙ্গ ফেলে গৃহ দেবতার সামনে জ্বালিয়ে সম্পূর্ণ পুড়ে ছাই হয়ে গেলে সেটি ভালো করে রেখে দাও। প্রত্যহ ওই ছাই একটু কপালে পড়বে। উপকার পাবে।<br><br>


 <h3>ব্যবসা বৃদ্ধির টোটকা </h3>
১) দোলের দিন তিনটি কয়েনকে একসাথে লাল সুতোয় বেঁধে মানিব্যাগে রাখুন। অর্থ ভাগ্য শুভ হওয়ার পাশাপাশি বাজে খরচ কমবে।  ব্যবসায় মন্দা কেটে যাবে।<br>
২) দোলের দিন মানিপ্লান্ট গাছে লাল সুতো বেঁধে একটি এক টাকার কয়েন গাছটির নিচের মধ্যে দিলে সম্পত্তি বৃদ্ধি পায়।<br>
৩)মন্ত্র পাঠ - নমঃ হ্রিং ক্রিং কমলে, কমলালয়ে প্রসীদ মহালক্ষ্মী নমঃ -১০৮ বার পাঠ করুন। <br>
৪) যারা ব্যবসার সাথে যুক্ত তারা দোকানে ক্যাশ বক্সে এক টুকরো সোনাকে হলুদ কাপড়ে মুড়ে রেখে দেবেন। দোল পূর্ণিমার দিন বস্তুটিকে লক্ষ্মী দেবীর পায়ে ঠেকিয়ে আবার ক্যাশ বাক্সে রেখে দিন।<br>
৫) শুভ স্বস্তিক চিহ্ন দোকানের ক্যাশবক্স এর উপরে এবং প্রবেশদ্বারে রাখা উচিত। শুভ-লাভ ঋদ্ধি -সিদ্ধি দোকানের দেওয়ালে লিখে রাখুন।<br>
৬) একটা খুবই পরীক্ষিত এবং সহজ টিপস। একটা ছোট বাটিতে পায়েস রান্না করুন এবং একটা খোসা ছাড়ানো গোটা নারকেল নিন এরপর ডান হাতে নারকেল এবং বাম হাতে পায় সেই বাটিটা নিয়ে সমস্ত ঘর-বারান্দা-বাথরুম, পায়খানা, রান্নাঘর করে সদর দরজার বাইরে গিয়ে নারকেলটি ফাটিয়ে তার জল পায়েসের বাটিতে মিশিয়ে যে কোন কুকুরকে খাইয়ে দিন।<br>
6) দোল পূর্ণিমার দিন থেকে এই মন্ত্রটি সকালে স্নানের পর লক্ষ্মী গণেশের সামনে পাঠ করলে ব্যবসায় উন্নতি হবে মন্ত্র - 🕉️ গাং গণপতয়ে সর্ব বিঘ্ন হরায় সর্বং গুরুবে লম্বদরায় হৃং গাং গণেশায় নমঃ। <br>
৭) সর্ব কাজে সিদ্ধি লাভের উপায় এক টাকার কয়েন এক টুকরো লাল কাপড়ের মধ্যে মুড়ে সবসময় নিজের সঙ্গে রাখতে হবে।<br><br>
 <h3>সম্পর্ক ও মনোবাঞ্ছা পূরণের উপায় </h3>
১) দোল পূর্ণিমার রাত্রে একটি পান পাতার মধ্যে মধু মিশিয়ে  আপনাকে প্রেমিক বা প্রেমিকার নাম লিখে পান পাতাটি চাঁদের আলোয় জলে ভাসিয়ে দিন। মনে মনে কামদেবের কাছে প্রার্থনা জানান। আপনার স্বামী বা স্ত্রী কোনো কারণে আপনার উপর অসন্তুষ্ট হয়ে থাকলে এই চমৎকার প্রয়োগটি করে দেখতে পারেন।<br>
২) দোল পূর্ণিমার দিন কোন নদী বা লোকের ধরে চলে যান। একটি কমলালেবু নিন হাতে চাঁদের দিকে তাকিয়ে আপনার ভালোবাসার মানুষের সঙ্গে সম্পর্কের মনস্কামনা জানান। এরপর কমলালেবুটিকে জলে ভাসিয়ে দিন আর পিছন ফিরে তাকাবেন না।<br>
৩) দোল পূর্ণিমার প্রতিটি টোটকা প্রয়োগের আগে সাধ্যমত সাজসজ্জা করবেন। পরিষ্কার - পরিচ্ছন্নতা বজায় রাখবেন এবং অবশ্যই সুগন্ধি ব্যবহার করবেন।<br><br>

 <h3>আপনাদের জানাই কোন রংয়ের আবির দিয়ে রং খেললে আপনার জীবনে আনন্দের বার্তা নিয়ে আসবে -</h3>
 মেষ রাশির জাতক-জাতিকা সবুজ ও হলুদ।<br>
বৃষ রাশির কমলা, হালকা লাল, বেগুনি।<br>
 মিথুন রাশির জাতক-জাতিকা খেলুন সবুজ ও হলুদ।<br>
 কর্কট রাশির জাতক-জাতিকা গোলাপি, হলুদ, কমলা।<br>
 সিংহ রাশির জাতক- জাতিকা লাল, কমলা, বাসন্তী।<br>
 কন্যা রাশির জাতক-জাতিকা যেকোনো ধরনের সবুজ, কমলা, হালকা হলুদ।<br>
 তুলা রাশির জাতক - জাতিকা যে কোনো রঙ শুভ। কেবলমাত্র বেগুনি ছাড়া  তবে একটু বেশি করে অভ্র যুক্ত রঙ তুলা রাশির জন্য বিশেষ্য।<br>
 বৃশ্চিক রাশির জাতক জাতিকা লাল ও গোলাপি।<br>
 ধনু রাশির জাতক জাতিকে খেলুন কমলা,হলুদ লালের যে কোন শেড। <br>
 মকর রাশির জাতক-জাতিকা খেলুন বেগুনি, বাদামি ও সবুজ<br>
 কুম্ভ রাশির জাতক- জাতিকা খেলুন  গোলাপি ও হালকা সবুজ<br>
 মীন রাশির জাতক জাতিকে খেলুন বাসন্তী ও হালকা সবুজ সঙ্গে হলুদের যে কোন শেড।<br>

</p><br><br>

                       
                        
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

                    </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
