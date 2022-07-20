import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
  return (
    <div className="contact" id="contact">
        <form className="contact_form">
            <h1>CONTACT US</h1>
            <div className="two_fields">
                <input placeholder="First Name" type="text" style={{ width: '49%' }} onChange={(e) => { setName(e.target.value)}} required />
                <input placeholder="Second Name" type="text" style={{ width: '49%' }} onChange={(e) => { setEmail(e.target.value)}} required />
            </div>
            <input placeholder="Your Email" type="email" style={{ width: '100%' }} onChange={(e) => { setEmail(e.target.value)}} required />
            <textarea placeholder="Body" onChange={(e) => { setBody(e.target.value)}}></textarea>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button type="submit">SEND</button>
            </div>
        </form>
    </div>
  )
}

export default Contact;