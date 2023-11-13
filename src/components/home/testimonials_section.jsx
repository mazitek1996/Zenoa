import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimonials_section.css'; // Import your custom CSS for styling

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: 'Zenoa Innovation has exceeded our expectations. Their innovative solutions have greatly impacted our business. I highly recommend their services.',
      user: {
        name: 'John Doe',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww', // Replace with the actual path to the user image
      },
    },

    {
        text: 'The team at Zenoa Innovation is truly exceptional. Their attention to detail and commitment to quality are unmatched. I a m impressed with the results they delivered.',
        user: {
          name: 'John Doe',
          image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with the actual path to the user image
        },
      },


      {
        text: 'Zenoa Innovation has exceeded our expectations. Their innovative solutions have greatly impacted our business. I highly recommend their services.',
        user: {
          name: 'Chijioke Okonkwo',
          image: 'https://images.unsplash.com/photo-1614890085618-0e1054da74f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with the actual path to the user image
        },
      },

      {
        text: 'Zenoa Innovation has exceeded our expectations. Their innovative solutions have greatly impacted our business. I highly recommend their services.',
        user: {
          name: 'John Doe',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with the actual path to the user image
        },
      },

      {
        text: 'Zenoa Innovation has exceeded our expectations. Their innovative solutions have greatly impacted our business. I highly recommend their services.',
        user: {
          name: 'John Doe',
          image: 'https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with the actual path to the user image
        },
      },

      
    
    // Add more testimonials...
  ];

  return (
    <div className="testimonial-section py-4">
      <Container>
        <h4 className="text-center mb-4">Testimonials</h4>
        <Row className="justify-content-center">
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="user-info">
                    <Image
                      src={testimonial.user.image}
                      alt={testimonial.user.name}
                      className="user-image"
                      roundedCircle
                    />
                    <div className="user-details">
                      <p className="user-name">{testimonial.user.name}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Add the ocean wave animation */}
       
      </Container>

    </div>
  );
};

export default TestimonialsSection;



