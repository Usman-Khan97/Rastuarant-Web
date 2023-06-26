import React, { useRef ,useState} from "react";
import "./about.css";
import video from '../../assets/foody-shorts.mp4'
import poster from '../../assets/poster.jpg'
import { FaPlayCircle } from 'react-icons/fa';
import {FaPauseCircle} from 'react-icons/fa';
const About = () => {

    const videoRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };


  return (
    <>
      <div id="About" className="container about-us">
        <div className="foody-app_about-us d-flex flex-column justify-content-center align-items-center text-center">
          <h6>About Us</h6>
          <h1>
            Discover Our <br /> Restaurant Story
          </h1>
          
          <div className="zigzag-line"></div>
          <p>
            Welcome to URAQ, where the art of gastronomy takes center stage. Our
            restaurant is not just a place to dine; it's an experience that
            takes you on a journey of flavors, textures, and emotions. Our story
            is one of culinary passion, cultural fusion, and a commitment to
            delivering an unforgettable dining adventure. The URAQ restaurant
            was born out of a shared love for diverse cuisines from around the
            world. Our team of talented chefs brings together their expertise
            and creativity to craft a menu that celebrates global flavors while
            showcasing the finest local ingredients. From delicate sushi rolls
            to sizzling tandoori grills, from vibrant Mediterranean mezze to
            mouthwatering desserts, our menu is an enticing fusion of culinary
            traditions that will captivate your taste buds. But our story goes
            beyond the food. URAQ is a place where stories are shared and
            connections are made.
          </p>
          <video width='550' height='310' className="foody-app-about-us_video"  poster={poster} ref={videoRef}>
            <source  src={video} />
          </video>
          
          {isPlaying ? (
            <FaPauseCircle className="playbtn" onClick={handlePlay} />
          ) : (
            <FaPlayCircle className="playbtn" onClick={handlePlay} />
          )}
          <h1>Watch The Recipe</h1>
        </div>
        
      </div>
    </>
  );
};

export default About;
