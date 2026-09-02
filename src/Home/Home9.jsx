import React from 'react'
import Button from '../Components/Button'
import h9css from '../Home/Home9.module.css'
const Home9 = () => {
  return (
     <div className='pas' style={{display:'flex',justifyContent:'center',marginTop:'40px',marginTop:'90px'}}>
     <div className='wra' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px',width:'90%'}}>
        <div className={h9css.pastas} style={{width:'50%',padding:'10px',lineHeight:1}}>
          <p style={{fontSize:'15px',fontWeight:'bold'}}>Taste of Italy</p>
          <p style={{fontSize:'30px',fontWeight:'bold'}}>Great Deals on Your</p>
          <p style={{fontSize:'60px',fontWeight:'bold'}}>Favorite Pastas</p>  
          
           <Button></Button>
        </div>
        <div className={h9css.superdeal} style={{width:'50%',padding:'10px',lineHeight:1}}>
            <p style={{fontSize:'25px',fontWeight:'bold'}}>Deal of the Week</p>
            <p style={{fontSize:'70px',fontWeight:'bold'}}>30% <span style={{fontSize:'25px'}}>off</span></p>
            <p style={{fontSize:'30px',fontWeight:'bold'}}>Cereal Brands </p>
             <Button></Button>
        </div>
        </div>   

    </div>

  )
}

export default Home9