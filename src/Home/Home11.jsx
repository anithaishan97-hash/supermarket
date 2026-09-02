import React from 'react'
import h11css from '../Home/Home11.module.css'

const Home11 = () => {
  return (
    
   <div className={h11css.order}>
    <div className={h11css.offer}>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>Subscribe & Save</p>
        <p style={{fontSize:'120px',fontWeight:'bold'}}>20%<span style={{fontSize:'20px'}}>off</span></p>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>Your Next Order</p>
        <form className={h11css.form}>
        <label>Email*</label>
        <input type='email' placeholder='enter your email'/>
        <div className={h11css.checkbox}>
            <input type='checkbox'/>
            <p>Yes,subscribe me to your newsletter.*</p>
        </div>
        
        
    </form>
    </div>
   </div>
  )
}

export default Home11