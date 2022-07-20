import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about" id="about">
        <div className="about_content">
            <div className="about_text">
                <p>We are an organisation which work to provide a oppournity for differently able people in out community to become financially indepedent and make their life easier to live. We act as a bridge between differently about people and the employee and connect them. </p>
            </div>
        </div>
        <div className="about_img">
            <img src="/assets/about_art.svg" alt="" />
        </div>
    </div>
  )
}

export default About;