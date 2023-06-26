
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import Pizza from './components/Pizza/Pizza';
import Booking from './components/Booking/Booking';
import Slider from './components/Slider/Slider';
import Testimonial from './components/Testimonials/Testimonial';
import SubscribeNewsletter from './components/News/SubscribeNewsletter';
import Footer from './components/Footer/Footer';
// import {  Routes , Route } from 'react-router-dom';
// import Cart from './components/Cart/Cart';
function App() {

  const [count , setCount] = useState(0)
  // console.log(count)
  const handleCount = (item)=>{
    setCount(count + 1)
    console.log(count + 1)

  }

  return (
    <>
    <Navbar mode={count}  />
    {/* <Routes>
      <Route  path='/cart' element={<Cart/>} />
    </Routes> */}
    <Home />
    <About />
    {/* <Routes>
    <Route path='/Menu'  />
    </Routes> */}
    <Menu onClick={handleCount} />
    <Pizza />
    <Booking />
    <Slider />
    <Testimonial />
    <SubscribeNewsletter />
    <Footer />
    </>
  );
}

export default App;
