import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div className="bg-black text-white w-[90%] flex flex-col md:flex-row justify-between gap-2 mb-3 font-light p-3 mx-auto">
  <h1>copyright 2023 Buffalo news. Buffalo news is responsible for the content of external sites</h1>
    
    <div className="flex gap-2">  
          <Link to="/sport">Sport</Link> 
            <Link to="/tech">Tech</Link> 
            <Link to="/business">business</Link>  
            <Link to="/general">general</Link>
            <Link to="entertainment">entertainment</Link>
    </div> 

 </div>
  )
}

export default Footer