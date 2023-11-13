import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about_us_section.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <div className="about_us_section_root">
      <div className="about-us-section ">
        <div>
          <div className="about_us_fist_section">
            <div className="container">
              <div className="first_section_container">
                <div class="container-fluid py-5">
                  <div className="about_section_title_container">
                    <h1 class="display-5 fw-bold about_us_section_heading mb-3">
                      About Us
                    </h1>
                  </div>
                  <div className="fisrt_about_section_text_container">
                    <h1 class="col-md-8 mb-4">
                      Welcome to Zenoa Innovation! We are a team of passionate
                      professionals dedicated to pushing the boundaries of
                      technology and delivering exceptional solutions to our
                      clients.
                    </h1>

                    <p className="col-md-8 mb-4">
                      At Zenoa Innovation Technologies, we are reshaping the
                      African tech landscape through a dynamic blend of
                      innovation and cutting-edge technologies. Our journey
                      involves crafting digital solutions that transcend
                      boundaries, much like the transformative power of
                      technology. Explore the examples below to witness how we
                      redefine and elevate the African tech space to new
                      heights.
                    </p>
                  </div>

                  <div className="about_us_page_linking mb-4">
                    learn more about Zenoa <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about_us_second_section">
            <div className="container ">
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="about-content">
                    <p className="section-description">
                      Our mission is to redefine the future through innovation,
                      creativity, and excellence. At Zenoa, we believe in
                      embracing creativity and forward-thinking to drive
                      technological advancements.
                    </p>
                    <p className="section-description">
                      We are committed to delivering high-quality solutions that
                      exceed expectations. Our culture fosters teamwork and open
                      communication, ensuring collaboration at every step.
                    </p>
                    <p className="section-description">
                      Zenoa is dedicated to enabling the growth and success of
                      our clients through strategic digital solutions. Join us
                      in embracing the future, where possibilities are
                      limitless.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="about-image">
                    {/* Add your about us image here */}
                    <img
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="About Us"
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
              <div className="about_skilled_section">
                <p style={{ color: "gray" }}>
                  Visionary <FaCheckCircle style={{ color: "green" }} />
                </p>

                <p style={{ color: "gray" }}>
                  Innovative <FaCheckCircle style={{ color: "orange" }} />
                </p>

                <p style={{ color: "gray" }}>
                  Inspirational <FaCheckCircle style={{ color: "yellow" }} />
                </p>

                <p style={{ color: "gray" }}>
                  Efficient <FaCheckCircle style={{ color: "blue" }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
