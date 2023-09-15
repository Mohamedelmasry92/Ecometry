import React from 'react'
import logo from '../../assets/images/output.png'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>    
    
      <nav className="navbar navbar-expand-sm navbar-light bg-main-light">
          <div className="container">
          <Link className="navbar-brand text-main fw-bolder" to="/">
              <img src={logo} className='logo-edit' alt="" /> 
              <span className='font-small text-main'>ECOMETRY</span>
          </Link>
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="addproduct">Add Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="jointeam">Join Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="products">Charity</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="cart">Cart <i class="fa-solid fa-cart-shopping"></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fw-bold nav-hover" to="search">Search <i className="fa-solid fa-magnifying-glass"></i></Link>
              </li>
               
              
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center">
          <i className='nav-hover cursor-pointer fa-solid fa-bell mx-2'></i>
        </li>


        <li className="nav-item">
          <Link className="nav-link text-dark fw-bold nav-hover" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark fw-bold nav-hover" to="register">Register</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link text-dark fw-bold nav-hover" to="profile">Profile</Link>
        </li>

        </ul>
            
          </div>
        </div>
      </nav>
      

  </>
}
