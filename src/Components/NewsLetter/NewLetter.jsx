import React from 'react';
import './NewLetter.css'

 const NewLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exculusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder="Enter your email id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter;
