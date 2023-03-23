import React from 'react'
import {useState, useEffect}  from 'react'  
import TimeDisplay from '../components/TimeDisplay' 
import Footer from '../components/Footer'

interface headlingsTypes {
  id: string  
  author: string 
  title: string 
  url: string 
  urlToImage: string 
  source: {name: string}
  } 

  let url = "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=b254967dd62e4b51b3d79d2c8f245083"

function Sport() {
  const [headlines, setHeadlines] = useState<headlingsTypes[] >([]) 

  

  const getData= async () => {
      const res = await fetch(url) 
      let results = await res.json()  
      setHeadlines(results.articles)
  }

  useEffect(() => {
  getData()
  }, [])


if(headlines.length === 0) {
  return <h1 className="text-center text-xl font-bold text-blue-800">loading...</h1>
}
  return (
    <div className="my-3">

    <div className="flex justify-between mx-12 text-lg md:text-xl lg:text-2xl">
     <h1>welcome to Elephant News</h1> 
    <TimeDisplay/>
    </div>
   
    <div className=" my-9 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-7 gap-y-7 w-[90%] mx-auto">
         {headlines.map((item) => {
           return (
             <a key={item.id} className="border border-slate-200" href={item.url}> 
               <img src={item.urlToImage ||  'data:image/png;base64,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'} 
               alt={item.title}/> 
               <h1 className="font-light px-3">{item.title.slice(0, 80)}...</h1>  
               <h1 className='my-2  px-3 font-semibold'>{item.source.name}</h1>
             </a>
           )
         })}
        </div>
     
 
    <Footer/>
     </div>
  )
}

export default Sport