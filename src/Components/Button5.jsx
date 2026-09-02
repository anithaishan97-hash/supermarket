import React from 'react'

const Button5 = () => {
  return (
    <div className='btn'>
       <button
        style={{
      width: '150px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      border: '1px solid black',
      background: 'white',
      cursor: 'pointer',
    }}>
    <span>-</span>
    <span>1</span>
    <span>+</span>
  </button> 
    </div>
  )
}

export default Button5