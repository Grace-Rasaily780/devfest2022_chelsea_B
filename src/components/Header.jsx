import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="header_img">
            <img src="/assets/header_art.svg" alt />
        </div>

        <div className="header_img">
          <img src="/assets/header.svg" alt />
        </div>
    </div>
  )
}

export default Header;