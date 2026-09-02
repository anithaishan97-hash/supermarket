import React from 'react'
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom'

const Navbar = () => {
 
 
 
 
    return (
    <div className='user'>
       <div className='contact'>
        <Link to='/About'style={{color:"white"}}>About Us</Link>
        <Link to='/Customer'style={{color:"white"}}>Customer Support</Link>
        
        </div>
        <div className='log'style={{padding:'5px'}}>
        
        <p><IoMdContact style={{fontSize:"30px"}} /> <Link to='/Login'style={{color:"white"}}>Login</Link></p>
        </div>
        
        
        </div>
        
      
  )
}

export default Navbar