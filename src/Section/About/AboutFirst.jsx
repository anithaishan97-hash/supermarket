import React from 'react'
import img1 from '../../assets/about1img.avif'
import ab1css from './AboutFirst.module.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";
import { GiBananaBunch } from "react-icons/gi";

const Section1 = () => {
  
  
  
  return (
    
    
    
    <div className={ab1css.abou} >
      <div className={ab1css.wrap}>
      
      <div className={ab1css.users}>
        <p>About Us</p>
      </div>
      <div className={ab1css.para}>
      <div className={ab1css.left}>
        <img src={img1} alt="" />
      </div>
      <div className={ab1css.right}>
        <p style={{fontSize:'40px',fontWeight:'bold'}}>Our Story</p>
        
        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.<br></br>

​

    This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
      
      </div>
      
      </div>
      <div className={ab1css.user1}>
    <div className={ab1css.card}>
       <div className={ab1css.item1}>
        <p style={{fontSize:'60px',color:'brown',marginTop:'30px'}}><CiDeliveryTruck /></p>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>Delivering Freshness Every Day at a Time</p>
        <p style={{fontSize:'18px',marginTop:'40px'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
       </div>
       <div className={ab1css.item2}>
        <p style={{fontSize:'60px',color:'brown',marginTop:'30px'}}><FaRecycle /></p>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>We Take Sustainability Seriously</p>
        <p style={{fontSize:'18px'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
        <p style={{fontSize:'18px',marginTop:'40px'}}>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
       </div>
       <div className={ab1css.item3}>
        <p style={{fontSize:'60px',color:'brown',marginTop:'30px'}}><GiBananaBunch /></p>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>Supporting Local Products</p>
        <p style={{fontSize:'18px',marginTop:'40px'}}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Section1