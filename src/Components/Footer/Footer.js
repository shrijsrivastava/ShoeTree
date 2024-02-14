import React from 'react';
import './Footer.css'; 

function Footer(){
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 mx-auto">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 mx-auto">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>Return & Exchange</li>
              <li>Shipping Policy</li>
              <li>Create Return & Exchange</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 mx-auto">
            <h5>Stay Connected</h5>
            <div className='socials'>
            <i  class="fa-brands fa-facebook"></i>
            <i  class="fa-brands fa-x-twitter"></i>
            <i  class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            </div>
            <p>© 1996-2024, Shoe Tree.com, Inc. or its affiliates</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;