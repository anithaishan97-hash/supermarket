// import React from 'react'
// import Button from '../Components/Button'
// import h3css from '../Home/Home3.module.css'

// const Home3 = () => {
//   return (
    
    
//     <div className='con' style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
//      <div className='wra' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px',width:'90%'}}>
//         <div className={h3css.badge}>
//           Limited
//           <br />
//           Supply
//         </div>
//         <div className='wins' style={{width:'80%',padding:'60px',lineHeight:1}}>
//           <p style={{fontSize:'15px',fontWeight:'bold',marginTop:'60px'}}>It's Wine O'Clock!</p>
//           <p style={{fontSize:'30px',fontWeight:'bold'}}>Great Deals on </p>
//           <p style={{fontSize:'60px',fontWeight:'bold'}}>Selected Wines</p>  
//           <p style={{fontSize:'12px'}}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
//            <Button></Button>
//         </div>
//         <div className='cleaning' style={{width:'40%',padding:'10px',lineHeight:1}}>
//             <p style={{fontSize:'25px',fontWeight:'bold',marginTop:'100px'}}>Deal of the Week</p>
//             <p style={{fontSize:'70px',fontWeight:'bold'}}>40% <span style={{fontSize:'25px'}}>off</span></p>
//             <p style={{fontSize:'30px',fontWeight:'bold'}}>cleaning supplies </p>
//              <Button></Button>
//         </div>
//         </div>   

//     </div>
//   )
// }

// export default Home3


import React from 'react'
import Button from '../Components/Button'
import h3css from './Home3.module.css'

const Home3 = () => {
  return (
    <div className={h3css.con}>
      <div className={h3css.wra}>

        <div className={h3css.wins}>
          <div className={h3css.badge}>
            Limited <br />
            Supply
          </div>

          <p className={h3css.smallTitle}>It's Wine O'Clock!</p>

          <p className={h3css.title}>
            Great Deals on
          </p>

          <p className={h3css.bigTitle}>
            Selected Wines
          </p>

          <p className={h3css.desc}>
            I'm a paragraph. Click here to add your own text and edit me.
            Let your users get to know you.
          </p>

          <Button />
        </div>

        <div className={h3css.cleaning}>
          <p className={h3css.week}>
            Deal of the Week
          </p>

          <p className={h3css.offer}>
            40% <span>off</span>
          </p>

          <p className={h3css.cleanText}>
            Cleaning Supplies
          </p>

          <Button />
        </div>

      </div>
    </div>
  )
}

export default Home3