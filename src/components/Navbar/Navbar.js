import React from 'react'
import './navbar.css'
import logo from '../../assets/logo1.png'

// import AiOutlineSearch from 'AiOutlineSearch/Ai'
import { FaShoppingBag } from 'react-icons/fa';
const Navbar = (props ) => {
  
  
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
  <div className="container ">
  <img src={logo} className='foody-app_logo' alt='Resturant logo' />
    {/* <a className="navbar-brand" href="/">URAQ FOOD</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#Menu'>Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Slider">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#testi">Testimonial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">contact</a>
        </li>
      
      </ul>
      {/* <form className="d-flex ">
        <input className="form-control foody-app_search  search-btn me-2" type="search" placeholder="Search Here..." aria-label="Search"  />
      </form> */}
    </div>
  </div>
  <p className='foody-app_navbar-cart'>
    </p>
    <div>
    <p className='foody-app_navbar-count'><FaShoppingBag /><span>{props.mode}</span></p>
    </div>
    {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleDark} />
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
</nav>
    </>
  )
}

export default Navbar




