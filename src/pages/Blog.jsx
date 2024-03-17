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

<h3>চলুন জেনে নিই এর মাহাত্ম্য, পেছনের ইতিহাস।</h3>

<h3>দোল কি?</h3>  
<p> দোলযাত্রা -কে অনেকে সংক্ষেপে দোল বলে থাকেন।ফাগুন মাসের পূর্ণিমা তিথিতে (প্রচলিত পঞ্জিকা অনুসারেঃ ১৪ তম রাতের পরবর্তী দিন) দোলযাত্রা নামক অনুষ্ঠানটি অনুষ্ঠিত হয়। যাকে অনেকে "বসন্তোৎসব" -ও বলে থাকে। দোলযাত্রা একটি হিন্দু বৈষ্ণবীয় উৎসব। এটি  বিভিন্ন স্থানে (বহিঃবঙ্গে) "হোলি উৎসব" নামে-ও পরিচিত। পরস্পর সম্পর্কযুক্ত। আবার, এই পূর্ণিমা তিথিতেই শ্রী চৈতন্য মহাপ্রভু জন্মগ্রহণ করেন বলে একে গৌর-পূর্ণিমা নামেও অভিহিত করা হয়।</p><br><br>
<h3>উদ্ভব কিভাবে?</h3>
<p>এটি বৈষ্ণব মতানুসারীদের অন্যতম প্রধান ধর্মীয় উৎসব হিসেবে বিবেচিত হয়।বৈষ্ণব বিশ্বাস অনুযায়ী, এই ফাল্গুনী পূর্ণিমা তিথিতে বা দোল পূর্ণিমার দিন বৃন্দাবনের নন্দ কাননে ভগবান শ্রীকৃষ্ণ আবির ও গুলাল নিয়ে তার সখী রাধিকা দেবী ও অন্যান্য ৩৩ কোটি (লক্ষ / হাজার) গোপী-গণের সাথে রং ছুরো-ছুরির খেলায় মেতেছিলেন!!!যার অনুকরণ থেকেই দোল খেলার উৎপত্তি হয়।</p><br><br>
<h3> কি-ভাবে পালিত হয়?</h3>
দোলযাত্রা -র দিন সকালে ভগবান কৃষ্ণ ও রাধিকাদেবীর বিগ্রহ আবির ও গুলালে স্নান করিয়ে দোলায় চড়িয়ে কীর্তনগান সহকারে শোভাযাত্রায় বের করা হয়। এরপর ভক্তরা আবির ও গুলাল নিয়ে পরস্পর রং ছুড়ো-ছুরি করেন। অনেকেই শ্রী চৈতন্য মহাপ্রভু -এর আবির্ভাব-তিথি উপলক্ষ্যে উপবাস থাকেন।দোলের পূর্বদিন খড়, কাঠ, বাঁশ ইত্যাদি জ্বালিয়ে এক বিশেষ বহ্নি-উৎসবের আয়োজন করা হয়। একেহোলিকা-দহন বা মেড়া-পোড়া নামে অভিহিত করা হয়।উত্তর ভারতে হোলি উৎসবটি বাংলার দোলযাত্রার পরদিন পালিত হয়।<br><br>

<h3>এর সার্বজনীনতা কি???</h3>

সম্ভবতঃ সনাতন হিন্দু ধর্মীয় আচার আচরণ-গুলোর মধ্যে সবচেয়ে সার্বজনীন উৎসব হিসেবে এটি-ই স্বীকৃত। এই দোলযাত্রা উৎসবের একটি ধর্মনিরপেক্ষ দিকও রয়েছে। এই দিন সকাল থেকেই নারী-পুরুষ / ধর্ম-বর্ণ নির্বিশেষে আবির ও গুলাল নিয়ে রং ছুরো-ছুরির খেলায় মত্ত হয়।শান্তিনিকেতনে বিশেষ নৃত্যগীতের মাধ্যমে বসন্তোৎসব পালনের রীতি রবীন্দ্রনাথ ঠাকুরের সময়কাল থেকে দৈত্যরাজ হিরণ্যকিশপুর কাহিনি আমরা সকলে জানি। ভক্ত প্রহ্লাদ অসুর বংশে জন্ম নিয়েও পরম ধার্মিক ছিলেন। তাঁকে যখন বিভিন্নভাবে চেষ্টা করেও হত্যা করা যাচ্ছিল না তখন হিরণ্যকিশপুর বোন হোলিকা প্ৰহ্লান্দকে কোলে নিয়ে আগুলে প্রবেশের সিদ্ধান্ত নেন। কারণ হোলিকা এই বর পেয়েছিল যে আগুনে তার কোন ক্ষতি হবে না। কিন্তু অন্যায় কাজে শক্তি প্রয়োগ করায় হোলিকা প্রহ্লাদকে নিয়ে আগুনে প্রবেশ করলে বিষ্ণুর কৃপায় প্রহ্লাদ অগ্নিকুণ্ড থেকেও অক্ষত থেকে যায় আর ক্ষমতার অপব্যবহারে হোলিকার বর নষ্ট হয়ে যায় এবং হোলিকা পুড়ে নিঃশেষ হয়ে যায়, এই থেকেই হোলি কথাটির উৎপত্তি অন্যদিক বসন্তের পূর্ণিমার এই দিনে ভগবান শ্রীকৃষ্ণ কেশি নামক অসুরকে বধ করেন। কোথাও কোথাও অরিষ্টাসুর নামক অসুর বধের কথাও আছে। অন্যায়কারী, অত্যাচারী এই অসুরকে বধ করার পর সকলে আনন্দ করে। এই অন্যায় শক্তিকে ধ্বংসের আনন্দ মহাআনন্দে পরিণত হয়। অঞ্চল ভেদে হোলি বা দোল উদযাপনের ভিন্ন ব্যাখ্যা কিংবা এর সঙ্গে সংপৃক্ত লোককথার ভিন্নতা থাকতে পারে কিন্তু উদযাপনের রীতি এক।বাংলায় আমরা বলি ‘দোলযাত্রা’ আর পশ্চিম ও মধ্যভারতে ‘হোলি। রঙ উৎসবের আগের দিন ‘হোলিকা দহন' হয় অত্যন্ত ধুমধাম করে শুকনো গাছের ডাল, কাঠ ইত্যাদি দাহ্যবস্তু অনেক আগে থেকে সংগ্রহ করে সু-উচ্চ একতা থাম বানিয়ে তাতে অগ্নি সংযোগ করে ‘হোলিকা দহন’ হয় পরের দিন রঙ খেলা বাংলাতেও দোলের আগের দিন এইরকম হয় যদিও তার ব্যাপকতা কম আমরা - বলি ‘চাঁচর’ । এই চাঁচরেরও অন্যরকম ব্যাখ্যা আছে। দোল আমাদের ঋতুচক্রের শেষ উৎসব। পাতাঝরার সময়, বৈশাখের প্রতীক্ষা। এই সময় পড়ে থাকা গাছের শুকনো পাতা, তার ডালপালা একত্রিত করে জ্বালিয়ে দেওয়ার মধ্যে এক সামাজিক তাৎপর্য রয়েছে পুরনো জঞ্জাল, রুক্ষতা, শুষ্কতা সরিয়ে নতুনের আহ্বান হচ্ছে এই হোলি। বাংলায় দোলের আগের দিন ‘চাঁচর’ উদযাপনকে এভাবেই ব্যাখ্যা করা হয় । আমাদের অনেক ধর্মীয় উৎসবেই আঞ্চলিক লোক সংস্কৃতি ও রীতির প্রভাব দেখা যায়, হোলিও তার ব্যতিক্রম নয়। বাংলার দোলযাত্রায় গৌড়ীয় বৈষ্ণব রীতির প্রাধান্য পায়। ঐতিহাসিকরা বিশ্বাস করেন পূর্বভারতে আর্যরা এই উৎসব পালন করতেন যুগে যুগে এর উদযাপন রীতি পরিবর্তিত হয়ে এসেছে। পুরাকালে বিবাহিত নারী তার পরিবারের মঙ্গল কামনায় রাকা পূর্ণিমায় রঙের উৎসব করতেন । দোল হিন্দু সভ্যতার অন্যতম প্রাচীন উৎসব। নারদ পুরাণ, ভবিষ্য পুরাণ ও ‘জৈমিনি মীমাংশা’য় রঙ উৎসবের বিবরণ পাওয়া যায় ৩০০ খৃষ্টপূর্বাব্দের এক হোলি সম্পর্কে বড়ো একটি তথ্য সকলে এড়িয়ে যায়। ধর্ম ও সমাজ ওতোপ্রোত জড়িত। আর একটি উৎসব বা দিন আরও পবিত্র হয়ে ওঠে যদি উক্ত দিনে পৃথিবী মহান পুরুষের জন্ম দেয়। বাঙালি তথা হিন্দু সমাজের অন্যতম মহাপুরুষ শ্রীচৈতন্যের জন্মতিথি হচ্ছে এই পূর্ণিমা তিথি তথা হোলি তিথি। এই মহান পুরুষের জন্ম শিলালিপিতে রাজা হর্ষবর্ধন কর্তৃক ‘হোলিকোৎসব’পালনরে উল্লেখ পাওয়া যায় হর্ষবর্ধনের নাটক ‘রত্নাবলী’তেও হোলিকোৎসবের উল্লেখ আছে। <br><br>


<h3>দোল পূর্ণিমায় করণীয় কিছু টোটকা <h3>
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

</p>

                        
                      <h1  className='font-semibold text-2xl float-left pr-3'> Ajker Rashifal: বাঙালি দৈনিক রাশিফল - 17 March 2024 </h1>					
                       					
 <h1 className='font-semibold text-2xl float-left pr-2'>	মেষ রাশি 	</h1>	<p>	জমি বা সম্পত্তি ক্রয়-বিক্রয় করার শুভ দিন। শেয়ারে বাড়তি লগ্নি চিন্তাবৃদ্ধি ঘটাতে পারে।সন্তানের কাজে গর্ববোধ। পেটের সমস্যায় ভোগান্তি। হাঁটাচলা খুব সাবধানে করবেন। আজ সব কাজের মধ্যেও ধর্মীয় আলোচনায় মন যেতে পারে। শত্রুরা ক্ষতি করতে সফল হবে না। সন্তানদের নিয়ে দুশ্চিন্তা থাকলে কেটে যাবে। বাড়তি কিছু খরচ হতে পারে। আজ বাড়িতে কোনও মাঙ্গলিক কাজের ব্যাপারে আলোচনা হতে পারে। চোখের রোগ বাড়তে পারে। সারা দিন কর্মব্যস্ততার মধ্যে কাটবে। পথে কোনও বিভ্রাটে পড়তে হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃষ রাশি 	</h1>	<p>	বন্ধুদের বিরোধিতা থেকে সাবধান থাকুন। সঞ্চয়ের প্রতি বিশেষ নজর দিন।ভিটামিনের অভাবে শরীরে অনেক রোগ সৃষ্টি হতে পারে। আত্মীয়দের সঙ্গে দেখা করার সুযোগ আসতে পারে। বিদ্যার্থীদের জন্য ভাল সময় নয়। স্ত্রীর বেহিসেবি খরচে সংসারে অশান্তি হতে পারে। নিজের বুদ্ধিতে কর্মস্থানে উন্নতি হতে পারে। যানবাহন বা জমি, কোনও কিছু কেনার আগে ভাবনাচিন্তা করা প্রয়োজন। অতিরিক্ত ক্রোধ আপনার কাজে ব্যাঘাত ঘটাতে পারে। পুলিশি ঝামেলায় যাবেন না। শারীরিক কষ্টের জন্য কাজের ক্ষতি হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মিথুন রাশি 	</h1>	<p>	পেটের সমস্যা বাড়তে পারে। ব্যবসায় আমূল পরিবর্তন লক্ষ করতে পারবেন।সংসারে আর্থিক টানাপড়েন থাকলেও তা মিটে যাবে। সারা দিন নির্ঝঞ্ঝাটে কাটবে। উপার্জনের ভাগ্য ভাল ও আর্থিক উন্নতি বজায় থাকবে। অযথা কোনও ঝামেলায় জড়িয়ে পড়তে পারেন। সন্তানদের নিয়ে চিন্তা বাড়তে পারে। কর্মক্ষেত্রে ভাগ্য আপনার সহায় হবে। নিজের সমস্যার কথা কাউকে না বলাই ভাল। বয়সে ছোট কারও কাছ থেকে উপকার নিতে হতে পারে। সুগারের সমস্যায় ভোগান্তি হতে পারে। বাড়িতে অতিথি আসতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কর্কট রাশি 	</h1>	<p>	ব্যবসায় বাড়তি বিনিয়োগ না করাই শ্রেয়। মাথাগরম করার ফলে হাতে আসা কাজ ভেস্তে যাবে।পিঠে ব্যথার সমস্যা থাকবে। সারা দিন অক্লান্ত পরিশ্রম করলেও, আর্থিক অবস্থার খুব একটা উন্নতি হবে না। দাম্পত্য জীবন সুখেই কাটবে। বাড়তি কিছু পাওনার আশায় ক্ষতি হতে পারে। সন্তানদের কাছ থেকে সাহায্য পেতে পারেন। দীর্ঘ দিনের অসুখ থেকে মুক্তি পেতে পারেন। পরিবার নিয়ে ভ্রমণ হবে। দুপুরের পরে কোনও ভাল কাজ ব্যর্থ হতে পারে। কর্মে আলস্য দেখালে অনেক ক্ষতি হতে পারে। প্রেমে অশান্তি হতে পারে। নিম্নতন বিদ্যার ক্ষেত্র ভাল নয়।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	সিংহ রাশি 	</h1>	<p>	ভাই-বোনের কাছ থেকে ভাল সাহায্য পেতে পারেন। মা-বাবার সম্পত্তির ভাগ পেতে পারেন।আজ সব কাজ খুব বিচক্ষণতার সঙ্গে করতে হবে। সামান্য ভুল বড় ক্ষতি ডেকে আনতে পারে। আধ্যাত্মিক আলোচনায় আনন্দ লাভ। ভ্রমণে অযথা হয়রানির যোগ। কাউকে সুপরামর্শ দিতে গেলে অপমানিত হতে পারেন। মা-বাবার সঙ্গে অকারণে ঝামেলা বাধতে পারে। শ্বশুরকুলকে সাহায্য করতে হতে পারে। সন্তানের চাকরিপ্রাপ্তির যোগ দেখা যাচ্ছে। ব্যয় বাড়তে পারে। সারা দিন ব্যবসা গতানুগতিক ভাবেই চলবে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কন্যা রাশি 	</h1>	<p>	কোনও নিয়ম লঙ্ঘন করার জন্য আপনাকে বিপদে পড়তে হতে পারে। উচ্চশিক্ষার ক্ষেত্রে শুভ যোগ।বাড়ির সকলকে নিয়ে ভ্রমণ হতে পারে। বৈদ্যুতিক জিনিসপত্র থেকে একটু সাবধান থাকুন। খুব বুঝে না চললে অতিরিক্ত অর্থব্যয় হতে পারে। হঠাৎ কোনও আইনি ঝামেলায় ফেঁসে যেতে পারেন। কাউকে বেশি উদারতা দেখাতে না যাওয়াই ভাল হবে। বাড়ির বয়স্কদের চিকিৎসার জন্য সময় ব্যয় হবে। রক্তপাত থেকে সাবধান থাকুন। সকলের সঙ্গে খুব বুঝে কথা বলুন। কারও কাছ থেকে ব্যবসায় উপকার পেতে পারেন। কোনও উচ্চপদস্থ ব্যক্তির কাছে অকারণে অপমানিত হতে পারেন।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	তুলা রাশি 	</h1>	<p>	কোনও ভুল কাজের জন্য অনুতাপ হতে পারে। অতিরিক্ত দৌড়ঝাঁপ করার ফলে অসুস্থ হয়ে পড়তে পারেন।কোনও অসৎ লোকের জন্য আপনার বদনাম হতে পারে। শত্রুরা আপনাকে অপদস্থ করতে পারে। সন্তানদের নিয়ে চিন্তা বৃদ্ধি। কারও সঙ্গে ব্যক্তিগত আলোচনা করতে গেলে অশান্তি হতে পারে। কোনও দামি জিনিস সামলানোর দায়িত্ব আপনার হাতে আসতে পারে। সেবামূলক কাজে আনন্দ লাভ। কুচিন্তার কারণে মনঃকষ্ট। লটারি থেকে কিছু আয় হতে পারে। কোনও ক্ষত থেকে কষ্ট বাড়তে পারে। সকালের দিকে কাজের জন্য বাইরে যেতে হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	বৃশ্চিক রাশি 	</h1>	<p>	কারও কুপ্রভাবে সংসারে অশান্তি হতে পারে। সামাজিক সুনাম বা প্রতিপত্তি বিস্তারের যোগ।হারানো কোনও জিনিস উদ্ধার হতে পারে। নৃত্যশিল্পীদের জন্য উন্নতি অপেক্ষা করছে। আজ আপনার খুব কাছের কোনও বন্ধুর দ্বারা বিশেষ উপকৃত হতে পারেন। প্রেমে বিশ্বাস ফিরে আসতে পারে। আপনার মধুর ব্যবহার সকলকে আকৃষ্ট করবে। কোনও জরুরি সিদ্ধান্ত নেওয়ার আগে স্ত্রীর সঙ্গে পরামর্শ করুন। প্রেমের বিবাদ মিটে যেতে পারে। কোমরের নীচের অংশে যন্ত্রণা বাড়তে পারে। ব্যবসার চাপে সংসারে সময় না দেওয়ায় বিবাদ হতে পারে। পুরনো কোনও আশা নষ্ট হতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	ধনু রাশি 	</h1>	<p>	সাংসারিক কারণে মানসিক যন্ত্রণা বাড়তে পারে। আজ আপনাকে অবাক করে দেওয়া কোনও সুখবর আসতে পারে।কাউকে টাকা ধার দেবেন না। তর্কবিতর্ক এড়িয়ে চলুন। মায়ের দায়িত্ব পালন না করায় পরিবারে মতান্তর হতে পারে। সঙ্গীতচর্চায় হাল ছাড়লে মুশকিল। উচ্চশিক্ষার ক্ষেত্র খুব প্রতিকূল। অতিরিক্ত ক্রোধের ফলে সংসারে অশান্তির যোগ। গুরুজনদের কথায় বিশেষ মনোযোগ প্রয়োজন। সংসারের ব্যয় বাড়তে পারে। গরিব মানুষের জন্য কিছু করতে পেরে আনন্দ লাভ। ব্যবসায় সুখবর আসতে পারে। রক্তচাপ নিয়ে চিন্তা বাড়তে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মকর রাশি 	</h1>	<p>	ব্যয় বাড়তে পারে। সম্পত্তি নিয়ে সমস্যা মিটে যেতে পারে।অপরের উপকার করতে গেলে বিপদ হতে পারে। মামলা-মোকদ্দমার যোগ। পরিবারের কাছে সুনাম পাবেন। ক্রয়-বিক্রয়ের কাজে লাভ না-ও হতে পারে। লাগামছাড়া আশায় অর্থব্যয় হতে পারে। ন্যায্য পাওনা আদায় না হওয়ায় নৈরাশ্য। পেটের যন্ত্রণা বাড়তে পারে। মহার্ঘ ভোজনের জন্য খরচ বাড়তে পারে। প্রিয়জনের কাছ থেকে ভালবাসা পাবেন। গাড়িচালকদের জন্য দিনটি শুভ।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	কুম্ভ রাশি 	</h1>	<p>	বাত-জাতীয় রোগে কষ্ট পাওয়ার আশঙ্কা। কর্মস্থলে নিজের মতামত প্রকাশ না করাই ভাল হবে।স্ত্রীর কাছ থেকে আঘাত পেতে পারেন। ছোটখাটো রোগকে উপেক্ষা করা ঠিক হবে না। প্রবাসী কেউ বাড়ি ফিরতে পারেন। দুপুরের পরে বাড়তি কোনও আয় হতে পারে। স্ত্রীর সঙ্গে তর্ক না করাই ভাল হবে। ভাল ব্যবহারের দ্বারা অন্যকে প্রভাবিত করতে পারবেন। ইচ্ছাপূরণ হওয়ার দিন। সন্তানের জন্য খরচ বাড়তে পারে। পিতার শরীরের জন্য চিন্তা বৃদ্ধি। ব্যবসায় বিশেষ লাভের শুভ যোগ দেখা যাচ্ছে। দূর দেশে ভ্রমণের পরিকল্পনা সফল হতে পারে। বিদ্যার্থীদের জন্য নতুন কোনও পথ খুলতে পারে।	</p>
 <h1 className='font-semibold text-2xl float-left pr-2'>	মীন রাশি 	</h1>	<p>	বাড়িতে সবাই খুব সতর্ক থাকুন, চুরির ভয় রয়েছে। অর্থনৈতিক সমস্যার সম্মুখীন হতে হবে।আপনার দ্বারা যে কাজ সম্ভব নয়, সে দিকে যাবেন না। প্রতিকূল পরিবেশ মেনে নিন। সন্তানদের কাজের বিষয়ে কোনও সুখবর আসতে পারে। সারা দিন খুব আলস্যে কাটতে পারে। বিদ্যার্থীদের সুফল পেতে গেলে ধৈর্য ধরতে হবে। আর্থিক লেনদেনের ব্যাপারে সতর্ক থাকুন। নিজের সুবিধার জন্য কোনও কাজ করতে হবে। সপরিবার ভ্রমণ হতে পারে। বাড়তি খরচের জন্য সঞ্চয় কম হবে। ভাল কোনও কাজের জন্য সুনাম লাভ।	</p>

  </div>
                    </>
                    

        </div>
    </div>
  )
}

export default Blog
