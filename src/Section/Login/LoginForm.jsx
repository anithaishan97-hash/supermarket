
import axios from 'axios'
import React, { useState } from 'react'
import logcss from '../../Section/Login/LoginForm.module.css'

const LoginForm = () => {

    const [name, setName] = useState('')
    const [error, setError] = useState({})
    const [email, setEmail] = useState('')
    const [mobilenumber, setMobilenumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const [message, setMessage] = useState('')

    // Validation
    const validate = () => {

        const newError = {}

        // Name validation
        if (!name.trim()) {
            newError.name = 'This field is required'
        }
        else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name)) {
            newError.name = 'Invalid name format'
        }

        // Email validation
        if (!email.trim()) {
            newError.email = 'This field is required'
        }
        else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            newError.email = 'Invalid email format'
        }

        // Mobile number validation
        if (!mobilenumber.trim()) {
            newError.mobilenumber = 'This field is required'
        }
        else if (!/^[6-9]\d{9}$/.test(mobilenumber)) {
            newError.mobilenumber = 'Invalid mobile number'
        }

        // Password validation
        if (!password.trim()) {
            newError.password = 'This field is required'
        }
        else if (!/^.{8,}$/.test(password)) {
            newError.password = 'Password must contain at least 8 characters'
        }

        // Confirm password validation
        if (!confirmpassword.trim()) {
            newError.confirmpassword = 'This field is required'
        }
        else if (password !== confirmpassword) {
            newError.confirmpassword = 'Passwords do not match'
        }

        setError(newError)

        return Object.keys(newError).length === 0
    }

    // Form submit
    const handleSubmit = async (e) => {

        e.preventDefault()

        if (validate()) {

            try {

                // Data to send to API
                const pay = {
                    name,
                    email,
                    phone: mobilenumber,
                    password
                }

                // POST request
                const res = await axios.post(
                    'https://jsonplaceholder.typicode.com/users',
                    pay
                )

                console.log('Response:', res.data)

                setMessage('Form submitted successfully')

            } catch (err) {

                console.log('Error:', err)

                setMessage('Something went wrong')

            }
        }
    }

    return (
        <div style={{ backgroundColor: '#f5d9e6' }}>

            <div
                className="container-fluid"
                style={{ padding: '30px' }}
            >

                <div className="container">

                    <form
                        onSubmit={handleSubmit}
                        className={logcss.form}
                    >

                        <h2 className={logcss.heading}>
                            Register Form
                        </h2>

                        {/* Name */}
                        <div className={logcss.section}>

                            <label>User Name</label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />

                            {error.name && (
                                <p className={logcss.error}>
                                    {error.name}
                                </p>
                            )}

                        </div>

                        {/* Email */}
                        <div className={logcss.section}>

                            <label>Email</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />

                            {error.email && (
                                <p className={logcss.error}>
                                    {error.email}
                                </p>
                            )}

                        </div>

                        {/* Mobile Number */}
                        <div className={logcss.section}>

                            <label>Mobile Number</label>

                            <input
                                type="tel"
                                value={mobilenumber}
                                onChange={(e) => setMobilenumber(e.target.value)}
                                placeholder="Enter mobile number"
                            />

                            {error.mobilenumber && (
                                <p className={logcss.error}>
                                    {error.mobilenumber}
                                </p>
                            )}

                        </div>

                        {/* Password */}
                        <div className={logcss.section}>

                            <label>Password</label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                            />

                            {error.password && (
                                <p className={logcss.error}>
                                    {error.password}
                                </p>
                            )}

                        </div>

                        {/* Confirm Password */}
                        <div className={logcss.section}>

                            <label>Confirm Password</label>

                            <input
                                type="password"
                                value={confirmpassword}
                                onChange={(e) =>
                                    setConfirmpassword(e.target.value)
                                }
                                placeholder="Confirm password"
                            />

                            {error.confirmpassword && (
                                <p className={logcss.error}>
                                    {error.confirmpassword}
                                </p>
                            )}

                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={logcss.btn}
                            style={{ backgroundColor: '#2A6049' }}
                        >
                            Submit
                        </button>

                        {/* Success/Error Message */}
                        {message && (
                            <p className={logcss.success}>
                                {message}
                            </p>
                        )}

                    </form>

                </div>

            </div>

        </div>
    )
}

export default LoginForm

 