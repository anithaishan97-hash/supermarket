import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
    
    
    
    <div className='user2'>
        <div className='clover'>
          <Link to='/'style={{color:"white"}}><p>Clovers.</p></Link>
            
            <p><CiSearch /></p>
         </div>
            <div className='icon'>
            <p><CiLocationOn /></p>
            <p><FaHeart /></p>
            <p><CiShoppingCart /></p>
            </div>
        


    </div>
  )
}

export default Navbar2