import React from 'react';
import "../asset/styles/footer.css";
import { FaSpotify, FaFacebookF, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Main Content Lists */}
      <div className="footer-lists">
        <div className="footer-list">
          <h5>About Us</h5>
          <ul>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>Investor Relations</li>
            <li>Customer Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-list">
          <h5>Careers</h5>
          <ul>
            <li>Culture and Values</li>
            <li>Inclusion Diversity and Equity</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li>U.S. Careers</li>
            <li>International Careers</li>
          </ul>
        </div>

        <div className="footer-list">
          <h5>Social Impact</h5>
          <ul>
            <li>People</li>
            <li>Planet</li>
            <li>Environmental and Social Impact Reporting</li>
          </ul>
        </div>

        <div className="footer-list">
          <h5>For Business Partners</h5>
          <ul>
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>
          </ul>
        </div>

        <div className="footer-list">
          <h5>Order and Pick Up</h5>
          <ul>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pick Up Options</li>
            <li>Explore and Find Coffee for Home</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-line" />

      {/* Social Media Icons */}
      <div className="footer-social">
        <FaSpotify className="social-icon" />
        <FaFacebookF className="social-icon" />
        <FaPinterestP className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaYoutube className="social-icon" />
      </div>

      {/* Legal Links */}
      <div className="footer-legal">
        <ul>
          <li>Privacy Notice</li>
          <li>Consumer Health Privacy Notice</li>
          <li>Terms of Use</li>
          <li>Do Not Share My Personal Information</li>
          <li>CA Supply Chain Act</li>
          <li>Accessibility</li>
          <li>Cookie Preferences</li>
        </ul>
        <h5> © 2024 Starbucks Coffee Company. All rights reserved.</h5>
      </div>
      
    </div>
  );
}

export default Footer;
