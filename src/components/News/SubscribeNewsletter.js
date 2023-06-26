import React from 'react';
import { useSpring, animated } from 'react-spring';
import './SubscribeNewsletter.css'
const SubscribeNewsletter = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <div id='contact' className="contact-us-container">
      <animated.div className="contact-us-content" style={animationProps}>
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries or feedback.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4"></textarea>
          </div>
          <button type="submit" >Send Message</button>
        </form>
      </animated.div>
    </div>
  );
};

export default SubscribeNewsletter;
