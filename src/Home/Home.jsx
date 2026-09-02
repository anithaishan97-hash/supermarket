import React from 'react'
import Button from '../Components/Button'
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'
import Home6 from './Home6'
import Home7 from './Home7'
import Home8 from './Home8'
import Home9 from './Home9'
import Home10 from './Home10'
import Home11 from './Home11'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    
    <div className='Stock' style={{padding:'100px'}}>
      
      <p style={{fontSize:'20px',fontWeight:'400'}}>Easy,Fresh & Convenient</p>
      <p style={{fontSize:'65px',width:'50%',fontWeight:'bold',lineHeight:'1'}}>Stock Up On Daily Essentials</p>
      <p style={{fontSize:'30px',width:'60%',fontWeight:'500'}}>Save Big On Your Favourite Brands</p>
        <Link to="/Allproduct">
      <Button/>
      
      
    </Link>
</div> 

<Home1/>
<Home2/>
<Home3/>
<Home4/>
<Home5/>
<Home6/>
<Home7/>
<Home8/>
<Home9/>
<Home10/>
<Home11/>
</>
  )
}

export default Home