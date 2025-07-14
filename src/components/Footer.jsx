import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3><i className="fas fa-leaf"></i> AgroSmart Farmer</h3>
          <p>Weather-powered agricultural assistant</p>
        </div>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2025 AgroSmart. All rights reserved.</p>
    </footer>
  );
}
