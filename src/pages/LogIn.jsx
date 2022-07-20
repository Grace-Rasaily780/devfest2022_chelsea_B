import React from 'react';
import './LogIn.css';

function LogIn() {
  return (
    <div className="login">
      <i className="fa fa-arrow-left" onClick={() => {window.location.replace('/')}}></i>
        <form className="login_form">
            <h1>LOG IN</h1>

            <input placeholder="Email" type="email"  onChange={(e) => { setName(e.target.value)}} required />
            <input placeholder="Password" type="password"  onChange={(e) => { setName(e.target.value)}} required />
           
            <button type="submit">SUBMIT</button>
        </form>
    </div>
  )
}

export default LogIn;