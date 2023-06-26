import React from 'react'
import './booking.css'
import { MdCall } from 'react-icons/md';
// import { PiPhoneCallFill } from "@react-icons/all-files/Pi/PiPhoneCallFill";


const Booking = () => {
  return (
    <>
    <div className='container my-5'>
     <div className='foody-app_booking text-center my-5'>
        <p>BOOK TABLE</p>
        <h1>Opening Table</h1>
     </div> 
     <div className='foody-app-booking-items '  >
        <div>
            <h4>Monday TO Tuesday</h4>
            <p>9:00 am - 11 pm</p> 
        </div>
        <div className='foody-app_booking-call'>
            <h4><MdCall /></h4>
            <p>+92 304 3763110</p> 
        </div>
        <div >
            <h4>Friday To Sunday</h4>
            <p>11:00 am - 10 pm</p> 
        </div>
     </div>
     </div>
    </>
  )
}

export default Booking
