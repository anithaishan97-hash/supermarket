import React from 'react'
import img1 from '../assets/vegetables.avif'
import img2 from '../assets/Bakery.avif'
import img3 from '../assets/wine.avif'
import img4 from '../assets/eggs.avif'
import img5 from '../assets/meat.avif'
import img6 from '../assets/drinks.avif'
import img7 from '../assets/clean.avif'
import img8 from '../assets/snacks.avif'

import h5css from './Home5.module.css'

const Home5 = () => {
  const categories = [
    { 
      image: img1,
       title: 'Vegetables' 
      },
    { 
      image: img2,
       title: 'Bakery'
       },
    {
       image: img3,
        title: 'Wine'
       },
    { 
      image: img4,
       title: 'Dairy & Eggs'
       },
    {
       image: img5,
        title: 'Meat & Poultry'
       },
    {
       image: img6,
        title: 'Soft Drinks'
       },
    {
       image: img7, 
       title: 'Cleaning Supplies'
       },
    {
       image: img8,
        title: 'Cereal & Snacks' 
      },
  ]

  return (
    <div className="container-fluid">
      <div className="container">
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <div className={h5css.grabgo}>
            {categories.map((item, index) => (
              <div key={index} className={h5css.card}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home5