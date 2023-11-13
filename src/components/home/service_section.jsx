import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./services_section.css";

const ServicesSection = () => {
  const [contentWithData, setContentWithData] = useState([
    {
      title: "Web Development",
      description:
        "We build responsive and user-friendly websites tailored to your needs.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mobile App Development",
      description:
        "Create innovative and scalable mobile applications for all platforms.",
      image:
        "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?auto=format&fit=crop&q=80&w=2098&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "UI/UX Design",
      description:
        "Craft visually appealing and intuitive user interfaces and experiences.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1936&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategize effective digital marketing campaigns to boost your online presence.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more content...
  ]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
   
  };
  

  return (
    <div className="service_section">
      <div className="service_section_container">
        <Container className="py-4">
          <h1 className="text-center">Services</h1>
          <Slider {...settings} className="services-carousel">
            {contentWithData.map((content, index) => (
              <div key={index} className="service-card">
                <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.description}</p>
                </div>
                <img
                  src={content.image}
                  alt={content.title}
                  className="service-image"
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default ServicesSection;
