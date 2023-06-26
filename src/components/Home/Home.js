import React from 'react'
import './Home.css'
import Rastaurant from '../../assets/Restaurant.jpg'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import image5 from '../../assets/image5.png'
const Home = () => {
  return (
    <>
    <div id='Home' className='foody-app_home_container container'>
        <div className='foody-app_home'>
        <div className='foody-app_home_item'>
            <h1>Welcom To Our <span> URAQ </span> Restaurant</h1>
            <p>Welcome to our restaurant, where culinary delights and warm
             hospitality come together to create a memorable dining experience. Indulge in a journey 
             of flavors as our skilled chefs curate a menu inspired by both local and international cuisines. 
             From sizzling steaks to delicate seafood, our dishes are crafted with the finest ingredients sourced
              from local farmers and trusted suppliers</p>
              <button className='button'>Click Our Menu</button>
        </div>
        <div className='foody-app_home_item'>
            <img src={Rastaurant} alt='Our Restaurant' />
        </div>
        </div>
    </div>
    <div className='foody-app_company container'>
      <h1>TRUSTED BY 70+ COMPANIES</h1>
      <div className='foody-app_company_name d-flex justify-content-center align-items-center gap-5 pt-4 '>
      <img src={image1} alt='Company Name'/>
      <img src={image2} alt='Company Name'/>
      <img src={image3} alt='Company Name'/>
      <img src={image4} alt='Company Name'/>
      <img src={image5} alt='Company Name'/>
      </div>
    </div>
      
    </>
  )
}

export default Home
