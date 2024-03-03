import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to Our Newsletter and Stay updated</p>
        <div>
            <input type="email" placeholder='enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
