import React from 'react'
import "./footer.css"
import { TbBrandFacebook } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-container">
          <div className="footer-Icons">
            <TbBrandFacebook />
            <FaSquareInstagram />
            <TfiYoutube />
          </div>

          <div className="footer-data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relation</li>
                <li>Legal Notice</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="Service-code">
            <p>Service Code: 123456</p>
          </div>
          <div className="copy-write">&copy;1997-2024 Netflix inc.</div>
        </div>
      </div>
    </>
  );
}

export default Footer




/*
 <a href="https://www.facebook.com/"></a>
          <a href="https://www.instagram.com/"></a>
          <a href='YouTube.com'></a>


*/