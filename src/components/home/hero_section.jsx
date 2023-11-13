// import React from "react";
// import "./hero_section.css";

// export default function Hero() {
//   return (
//     <div className="hero_root">
//     <div className="hero_container">


//     <div className="container">
//         <div className="p-5 mb-4 rounded-3">
//           <div className="container-fluid py-5">
//             <h1 className="display-5 fw-bold hero_heading">
//               Welcome to Zenoa Innovation – where innovation meets excellence.
//               Innovate with Zenoa
//             </h1>
//             <p className="col-md-8 fs-4 hero_body_text">
//               We're more than a tech company; we're visionary architects,
//               redefining industries through cutting-edge solutions. From
//               transformative software for businesses to our in-house creations,
//               Zenoa thrives on pushing tech boundaries.
//               Join us in embracing AI and beyond, bringing ideas to life in a
//               future where possibilities are limitless.
//             </p>
//             <button className="btn btn-primary btn-lg hero_explore_button" type="button">
//               Explore the Future with Zenoa
//             </button>
//           </div>
//         </div>

//         <div className="hero_display_screen_card card">
// hello

//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './hero_section.css';
import HeroVideo from "../../assets/video/hero_tech_video.mp4"
import { FaArrowRight, FaCheckCircle, FaAngleRight } from "react-icons/fa";



const Hero = () => {
  const [heroContent, setHeroContent] = useState({
    title: 'Welcome to Zenoa Innovation – where innovation meets excellence. Innovate with Zenoa',
    description:
      "We're more than a tech company; we're visionary architects, redefining industries through cutting-edge solutions. From transformative software for businesses to our in-house creations, Zenoa thrives on pushing tech boundaries. Join us in embracing AI and beyond, bringing ideas to life in a future where possibilities are limitless.",
    buttonText: 'Explore the Future with Zenoa',
  });

  useEffect(() => {
    // Simulate an API call to fetch the content
    // Replace this with actual API fetching logic
    // Use the fetched data to set the state
    // Example fetch:
    // fetch('your_api_endpoint')
    //   .then(response => response.json())
    //   .then(data => setHeroContent(data))
  }, []);

  return (
    <div className="hero_root">
      <Container fluid className="hero_container">
        <Container>
          <div className="p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold hero_heading">{heroContent.title}</h1>
              <p className="col-md-8 fs-4 hero_body_text">{heroContent.description}</p>
              <div className=" hero_explore_button shadow" >
               
                <h1 className="display-5">
                    <span className="hero-rocket-emoji">🚀</span> {heroContent.buttonText} <FaAngleRight/>
                  </h1>
                  
              </div>
            </div>
          </div>
<div className="hero_display_screen_card card">

<div className="video-overlay">
        <video autoPlay muted loop className="hero-video">
          {/* Replace 'your_video_url.mp4' with the actual video source */}
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero_display_card_text">
        <h1>Zenoa<span className="lightning-emoji">⚡</span></h1>
        </div>
      </div>
</div>
        
    
        </Container>
      </Container>
    </div>
  );
};

export default Hero;
