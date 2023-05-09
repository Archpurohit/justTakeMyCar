import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'


export default function Footer() {
  const navigate = useNavigate();

  const linkStolen = () => {
    navigate('/stolen')
  }

  return (
    <div>
      <footer className="footer">
        <div className="footerSection">
          <h1>&copy; AAJ</h1>
        </div>
        <div className="footerSection">
          <p>Follow us on social media:</p>
          <ul className="socialMediaLinks">
            <li><a href="https://www.facebook.com/TeslaMotorsCorp/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/elonmusk/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footerSection aboutUs">
          <div>
            <a href="#">About Us</a>
          </div>
          <div>
            <a className="message" href="#">Contact Us</a>
          </div>
          <div>
            <a className="reportButton" onClick={linkStolen}>Report Car Stolen</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
