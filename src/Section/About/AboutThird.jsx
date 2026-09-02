import React from 'react'
import ab11css from '../../Section/About/AboutThird.module.css'
const Section3 = () => {
  return (
           <div className={ab11css.order}>
    <div className={ab11css.offer}>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>Subscribe & Save</p>
        <p style={{fontSize:'120px',fontWeight:'bold'}}>20%<span style={{fontSize:'20px'}}>off</span></p>
        <p style={{fontSize:'30px',fontWeight:'bold'}}>Your Next Order</p>
        <form className={ab11css.form}>
        <label>Email*</label>
        <input type='email' placeholder='enter your email'/>
        <div className={ab11css.checkbox}>
            <input type='checkbox'/>
            <p>Yes,subscribe me to your newsletter.*</p>
        </div>
        
        
    </form>
    </div>
   </div>
         )
}

export default Section3