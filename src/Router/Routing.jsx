import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Helpers/Navbar'
import Footer from '../Helpers/Footer'
import Navbar2 from '../Helpers/Navbar2'
import Home from '../Home/Home'
import Navbar3 from '../Helpers/Navbar3'
import Button from '../Components/Button'
// import Home1 from '../Home/Home1'
import Home2 from '../Home/Home2'
import About from '../Pages/About/About'
import Customer from '../Pages/Customer/Customer'
import Allproduct from '../Pages/Allproduct/Allproduct'
import Login from '../Pages/Login/Login'
import Deals from '../Deals/Deals'



const Routing = () => {
  return (
    <div>
    <Navbar/> 
    <Navbar2/>
    <Navbar3/>
    
    
    
    {/* <Home1/> */}
    {/* <Home2/> */}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Customer' element={<Customer/>}/>
      <Route path='/Allproduct'element={<Allproduct/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Deals'element={<Deals/>}/>
    </Routes>
     <Footer/>

    </div>
  )
}

export default Routing