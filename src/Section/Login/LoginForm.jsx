import axios from 'axios'
import React, { useState } from 'react'
import logcss from '../../Section/Login/LoginForm.module.css'

 const LoginForm = () => {
    const[name,setName]=useState('')
    const[error,setError]=useState({})
    const[email,setEmail]=useState('')
    const[mobilenumber,setMobilenumber]=useState('')
    const[password,setPassword]=useState('')
    const[confirmpassword,setConfirmpassword]=useState('')
    const[message,setMessage]=useState('')



    const validate=()=>{
        const newError={}
        if(!name.trim()){

            newError.name='this field is required'
        }
        else if(!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)){

            newError.name='invalid format'
        }
        if(!email.trim()){
            
            newError.email='this field is required'
        }
        else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
            
            newError.email='invalid email format'
        }
        if(!mobilenumber.trim()){
            
            newError.mobilenumber='this field is required'
        }
        else if(!/^[6-9]\d{9}$/.test(mobilenumber)){
            
            newError.mobilenumber='invalid mobilenumber'
        }
        if(!password.trim()){
            
            newError.password='this field is required'
        }
        else if(!/^.{8,}$/.test(password)){
            
            newError.password='invalid format'
        }
        if(!confirmpassword.trim()){
            
            newError.confirmpassword='this field is required'
        }
        else if(password!==confirmpassword){
            
            newError.confirmpassword='invalid format'
        }
       setError(newError)
        return Object.keys(newError).length===0

    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        if(validate()){
             setMessage('form submitted successfully')
           
           
           try{
             const pay={
                name,
                email,
                phone:mobilenumber,

            }



        const res= await axios .post(`https://jsonplaceholder.typicode.com/users,pay`)
        console.log(res.data)
        console.log('form submitted successfully')
        
            }catch(err){
            console.log(err)
           
            
        }
    }
}
    
  return (
    <div style={{backgroundColor:' #f5d9e6'}}>
       
        <div className='container-fluid 'style={{padding:'30px'}}>
            <div  className='container'>
     <form onSubmit={handleSubmit} className={logcss.form}>

    <h2 className={logcss.heading}>Register Form</h2>

    <div className={logcss.section}>
        <label>User Name</label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
        />
        {error.name && <p className={logcss.error}>{error.name}</p>}
    </div>

    <div className={logcss.section}>
        <label>Email</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
        />
        {error.email && <p className={logcss.error}>{error.email}</p>}
    </div>

    <div className={logcss.section}>
        <label>Mobile Number</label>
        <input
            type="tel"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            placeholder="Enter mobile number"
        />
        {error.mobilenumber && (
            <p className={logcss.error}>{error.mobilenumber}</p>
        )}
    </div>

    <div className={logcss.section}>
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
        />
        {error.password && (
            <p className={logcss.error}>{error.password}</p>
        )}
    </div>

    <div className={logcss.section}>
        <label>Confirm Password</label>
        <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            placeholder="Confirm password"
        />
        {error.confirmpassword && (
            <p className={logcss.error}>{error.confirmpassword}</p>
        )}
    </div>

    <button type="submit" className={logcss.btn} style={{backgroundColor:'#2A6049'}}>
        Submit
    </button>

    {message && <p className={logcss.success}>{message}</p>}

</form>
       
    </div>
    </div>
    </div>
    
  )
}


export default LoginForm