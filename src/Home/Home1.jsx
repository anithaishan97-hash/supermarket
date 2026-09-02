// import React from 'react'
// import { CiDeliveryTruck } from "react-icons/ci";
// import { CiShoppingBasket } from "react-icons/ci";
// import { MdSupportAgent } from "react-icons/md";
// import { FaMobileAlt } from "react-icons/fa";
// import h1css from "./Home1.module.css"
// const Home1 = () => {
//   return (
    
    
    
//     <div className={h1css.door}>
//         <div className={h1css.deliver}>
//         <p style={{fontSize:'18px',fontWeight:'bold'}}><span style={{color:'red',fontSize:'40px'}}><CiDeliveryTruck /></span>Free Delivery</p>
//         <p>To Your Door</p>
//         </div>
//         <div className={h1css.line1}>
         
//         </div>
//         <div className={h1css.basket}>
//         <p style={{fontSize:'18px',fontWeight:'bold'}}><span style={{color:'red',fontSize:'40px'}}><CiShoppingBasket /></span>Local</p>
//         <p>Check Out <u>Locations</u> </p>
//         </div>
//         <div className={h1css.line2}></div>
//         <div  className={h1css.agent}>
//          <p style={{fontSize:'18px',fontWeight:'bold'}}><span style={{color:'red',fontSize:'40px'}}><MdSupportAgent /></span>Available for You</p>
//          <p><u>Online Support</u>24/7</p>
//          </div>
//          <div className={h1css.line3}></div>
//          <div className={h1css.mobile}>
//          <p style={{fontSize:'18px',fontWeight:'bold'}}><span style={{color:'red',fontSize:'40px'}}><FaMobileAlt /></span>Order on the Go</p>
//          <p><u>Download</u>Our App</p>
//          </div>
//     </div>
//   )
// }

// export default Home1


import React from "react";
import { CiDeliveryTruck, CiShoppingBasket } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import h1css from "./Home1.module.css";

const Home1 = () => {
  return (
    <div className={h1css.container}>
      <div className={h1css.item}>
        <div className={h1css.icon}>
          <CiDeliveryTruck />
        </div>

        <div>
          <h3>Free Delivery</h3>
          <p>To Your Door</p>
        </div>
      </div>

      <div className={h1css.line}></div>

      <div className={h1css.item}>
        <div className={h1css.icon}>
          <CiShoppingBasket />
        </div>

        <div>
          <h3>Local Pickup</h3>
          <p>
            Check Out <u>Locations</u>
          </p>
        </div>
      </div>

      <div className={h1css.line}></div>

      <div className={h1css.item}>
        <div className={h1css.icon}>
          <MdSupportAgent />
        </div>

        <div>
          <h3>Available for You</h3>
          <p>
            <u>Online Support</u> 24/7
          </p>
        </div>
      </div>

      <div className={h1css.line}></div>

      <div className={h1css.item}>
        <div className={h1css.icon}>
          <FaMobileAlt />
        </div>

        <div>
          <h3>Order on the Go</h3>
          <p>
            <u>Download</u> Our App
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home1;