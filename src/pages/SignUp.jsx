import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="signup">
      <i className="fa fa-arrow-left" onClick={() => {window.location.replace('/')}}></i>
        <form className="signup_form">
            <h1>SIGN UP</h1>
            <div className="two_fields">
                <input placeholder="First Name" type="text" style={{ width: '49%' }} onChange={(e) => { setName(e.target.value)}} required />
                <input placeholder="Second Name" type="text" style={{ width: '49%' }} onChange={(e) => { setEmail(e.target.value)}} required />
            </div>

            <input placeholder="Email" type="email"  onChange={(e) => { setName(e.target.value)}} required />
            <input placeholder="Password" type="password"  onChange={(e) => { setName(e.target.value)}} required />
            <input placeholder="Re-type the password" type="password"  onChange={(e) => { setName(e.target.value)}} required />
            
                <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default SignUp;