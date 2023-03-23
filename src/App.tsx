import React from 'react' 
import Navbar from './components/Navbar' 
import Home   from './Pages/Home'
import Tech from './Pages/Tech' 
import Sport from './Pages/Sport' 
import Entert from './Pages/Entert' 
import General from './Pages/General' 
import Buss from './Pages/Buss'  
import Search from './Pages/Search'
import Searched from './Pages/Searched'
import {BrowserRouter, Routes, Route} from 'react-router-dom'  
import NotFound from './Pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/tech" element={<Tech/>}/> 
        <Route path="/general" element={<General/>}/> 
        <Route path="/business" element={<Buss/>}/> 
        <Route path="/entertainment" element={<Entert/>}/> 
        <Route path="/sport" element={<Sport/>}/> 
        <Route path="search" element={<Search/>}/> 
       <Route path="/searched/:id" element={<Searched/>}/>  
       <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App