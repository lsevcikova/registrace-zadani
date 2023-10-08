import React, { useState } from 'react'
import './style.css'

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleEmailChange = event => {
    const { value } = event.target
    let username = user.username
    if (username === '' && value.indexOf('@') != -1) {
      username = value.split('@')[0]
    }
    setUser(prevState => ({
      ...prevState,
      email: value,
      username
    }))
  }

  return (
    <div className='wrapper'>
      <h1>Registration</h1>
      <div className='wrapper'>
        <div className='logo'></div>
        <form action='' method='get' className='form'>
          <div className='formInput'>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Email Address'
              value={user.email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='formInput'>
            <input
              type='text'
              name='username'
              id='userName'
              required
              placeholder='User Name'
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
          <div className='formInput'>
            <input
              type='password'
              name='password'
              id='password'
              required
              placeholder='Password'
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <div className='formInput'>
            <input
              type='password'
              name='passwordConfirm'
              id='confirmPassword'
              required
              placeholder='Confirm Password'
              value={user.passwordConfirm}
              onChange={handleInputChange}
            />
          </div>
          <div className='formInput'>
            <button
              className='button'
              type='button'
              onClick={() => console.log(user)}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
