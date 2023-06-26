import React from 'react';
import './testi.css';
import men from  '../../assets/men.jpg'
import women1 from '../../assets/women1.jpg'
import women2 from '../../assets/women2.jpg'

const testimonials = [
  {
    quote: "The dining experience at URAQ Restaurant was truly exceptional.",
    author: "John Doe",
    image: men
  },
  {
    quote: "The food was delicious, beautifully presented, and full of flavor.",
    author: "Emily Johnson",
    image: women1,
  },{
    quote: " I highly recommend URAQ for anyone looking for a memorable culinary experience",
    author: "Ayesha Hayat",
    image: women2,  
  }
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <>
    <div id='testi' className='testi'>
    <p>Testimonial</p>
    <h1>What Our Customers Say</h1>
    </div>
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <img src={testimonial.image} alt="Testimonial" />
          <blockquote>{testimonial.quote}</blockquote>
          <cite>
            {testimonial.author} 
          </cite>
        </div>
      ))}
    </div>
    </>
  );
};

export default Testimonial;
