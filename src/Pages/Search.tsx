import React, {useState} from 'react' 
import { useNavigate } from 'react-router-dom'

function Search() { 

    const [name, setName] = useState('')  
    const navigate = useNavigate()

      const sendSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault() 
          navigate(`/searched/${name}`)
      }

  return (
    
    <div className="flex justify-center my-5 gap-2 bg-black p-4">
        <input 
        required
        onChange={(e) => setName(e.target.value)}
        className=" w-[70%] md:w-[50%] h-11 outline-none placeholder:text-lg placeholder:text-center" placeholder="search" />  
        <button onClick={sendSearch} className="text-white border p-2 hover:border-blue-400">send</button> 
    </div> 
   
  )
}

export default Search