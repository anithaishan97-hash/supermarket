import React from 'react'
import h7css from '../Home/Home7.module.css'
import { AiOutlineApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const Home7 = () => {
  return (
    
    
    
    
    <div className={h7css.container}>
    <div className={h7css.corn}>
        <div className={h7css.left}>

        </div>
        <div className={h7css.right}>
         <p style={{fontSize:'25px',fontWeight:'bold',color:'white'}}>Save Time & Money</p>
         <p style={{fontSize:'80px',fontWeight:'bold',color:'white'}}>Shop With Us<br></br> on the Go</p>
         <p style={{fontSize:'20px',fontWeight:'bold',color:'white'}}>Your weekly shopping routine, at your <br></br>door in just a click</p>
         <div className={h7css.great}>
        <button className={h7css.great11}>
  <AiOutlineApple size={35} />

  <p className={h7css.storeText}>
    Download on the <br />
    <span>App Store</span>
  </p>
</button>
        <button className={h7css.great12}>
            <BsGooglePlay size={35} />
            <p className={h7css.storeText1}>
    Get it on <br />
    <span>Google pay</span>
  </p>
            </button>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Home7