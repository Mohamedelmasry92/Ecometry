import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return <>    
      <footer className='mt-3'>
        <div className="container">
          <div className="row">
           <div className="col-md-4">

            <div className="footer-section">
                <h2>About Us</h2>
                <p>We are a team of passionate people whose goal is to improve everyone's life through exceptional products. We make great products to solve your business problems.</p>
            </div>
            </div>

            <div className="col-md-4">

<div className="footer-section">
    <h2>Newsletter Signup</h2>
    <p>Subscribe to our newsletter for updates.</p>
    <form className="newsletter-form">
        <input type="email" className="newsletter-input" placeholder="Your email address" required/>
        <button type="submit" className="newsletter-button">Subscribe</button>
    </form>
</div>
</div>

           <div className="col-md-4">

            <div className="footer-section">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                <p>Phone: +2 0120 637 8785</p>
                <li className="nav-item d-flex justify-content-center align-items-center">
                    <i className='nav-hover cursor-pointer fab mx-2 fa-facebook'></i>
                    <i className='nav-hover cursor-pointer fab mx-2 fa-twitter'></i>
                    <i className='nav-hover cursor-pointer fab mx-2 fa-instagram'></i>
                    <i className='nav-hover cursor-pointer fab mx-2 fa-linkedin'></i>
                    <i className='nav-hover cursor-pointer fab mx-2 fa-youtube'></i>
                </li>
            </div>
            </div>


            </div>
        </div>

        <p>&copy; 2023 <a className='text-main fw-bolder' href='../'>ECOMETRY</a>. All Rights Reserved.</p>
        <p>Created by <a className='text-main fw-bolder' href='https://www.imlegypt.com/'>IML EGYPT</a> & <a className='text-main fw-bolder' href='https://www.linkedin.com/in/mohamed-elmasry-344707219/'>Mohamed Elmasry</a>.</p>
    </footer>
  </>
}
