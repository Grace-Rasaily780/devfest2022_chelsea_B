import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [navBtnVal, setNavBtnVal] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar_custom">
            <div className="container-fluid">
                <a href="/">
                    <img src="/assets/logo.svg" alt="" />
                </a>
                <button onClick={() => { setNavBtnVal(!navBtnVal); }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    { navBtnVal === false ? ( <i className="fas fa-bars"></i> ) : ( <i className="fas fa-times"></i> ) } 
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/" activeclassname="active">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/#about" activeclassname="active">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/#program" activeclassname="active">PROGRAMS</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/job" activeclassname="active">JOB</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/#contact" activeclassname="active">CONTACT</NavLink>
                        </li>
                        <li className="nav-item">
                            <span>|</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/signup" activeclassname="active">SIGN UP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/login" activeclassname="active">LOG IN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar