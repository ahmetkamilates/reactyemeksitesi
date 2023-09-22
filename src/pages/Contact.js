import React from 'react'
import BannerImage from '../assets/2blackbean.jpg'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'><img src={BannerImage}/></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full Name..' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Email..' type='email'/>
                <label htmlFor='message'>Full Name</label>
                <input name='message' placeholder='Enter Message..'/><textarea/>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact