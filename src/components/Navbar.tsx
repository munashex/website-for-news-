import logo from '../assets/logo.svg' 
import {FaBars} from 'react-icons/fa';
import {CiSearch} from 'react-icons/ci'  
import {TfiClose} from 'react-icons/tfi'
import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false) 
const navigate = useNavigate()

    return (
        <div> 
             <div className="flex justify-between items-center p-3 md:p-4">
       <Link to="/">
       <img src={logo} alt="ltifyogo" className="h-14 border border-black cursor-pointer"/> 
       </Link>
               

            <div className="md:hidden mb-6 max-w-lg flex flex-row items-center gap-5">
              <button onClick={() => setIsOpen(!isOpen)}>
                { isOpen ? <TfiClose size={29}/>: <FaBars size={29}/>}
                </button> 
              <Link to="/search">
              <button><CiSearch size={29}/></button>
              </Link>
            </div>  
    
           
           <nav className='hidden md:flex item-center flex-row gap-5 font-semibold mb-2'>
           <Link to="/sport">Sport</Link> 
            <Link to="/tech">Tech</Link> 
            <Link to="/business">business</Link>  
            <Link to="/general">general</Link>
            <Link to="entertainment">entertainment</Link>
       
            <Link to="/search">
              <input placeholder="search" disabled className="border-none outline-none p-1 bg-gray-100 cursor-pointer"/>
            </Link> 

           </nav> 
           </div>

           

     
         <nav className={`${isOpen ? 'flex': 'hidden'} md:hidden grid grid-cols-2 items-center gap-2 p-3 border-t`}>
         <Link to="/sport">Sport</Link> 
            <Link to="/tech">Tech</Link> 
            <Link to="/business">business</Link>  
            <Link to="/general">general</Link>
            <Link to="entertainment">entertainment</Link>
           </nav> 
</div>
     
    )
}

export default Navbar