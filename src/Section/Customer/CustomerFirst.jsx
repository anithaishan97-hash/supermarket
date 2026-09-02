import React from 'react'
import cf1css from '../../Section/Customer/CustomerFirst.module.css'
import Button6 from '../../Components/Button6'
const Section1 = () => {
  return (
    <div className={cf1css.container}>
      <div className={cf1css.wrapper}>
        <div className={cf1css.customer}>
          <p>Customer Support</p></div>
          <div className={cf1css.para}>
            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place<br></br> for you to tell a story and let your users know a little more about you.</p>
          </div>
        
        <div className={cf1css.main}>
          <div className={cf1css.imgleft}></div>
          <div className={cf1css.formright}>
            <p style={{fontSize:'30px',fontWeight:'bold'}}>We're Here to Help!</p>
            <p style={{fontSize:'18px',fontWeight:'600',width:'80%'}}>Fill out the form with any quarry on your mind and we'll get back to you as soon as possible</p>
            <div className={cf1css.firstlast}>
    
         <form className={cf1css.form}>

  <div className={cf1css.row}>
    <div className={cf1css.field}>
      <label>First Name *</label>
      <input type="text" />
    </div>

    <div className={cf1css.field}>
      <label>Last Name *</label>
      <input type="text" />
    </div>
  </div>

  <div className={cf1css.row}>
    <div className={cf1css.field}>
      <label>Email *</label>
      <input type="email" />
    </div>

    <div className={cf1css.field}>
      <label>Phone</label>
      <input type="tel" />
      
    </div>
  </div>

  <div className={cf1css.message}>
    <label>Leave us a message...</label>
    <textarea rows="8"></textarea>

    <Button6></Button6>
 
  </div>
    

</form>


    </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Section1