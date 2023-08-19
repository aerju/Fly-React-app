import React from 'react';
import './FrontPage.css'; 
import { Container, Row, Col } from 'react-bootstrap';

const FrontPage = () => {
  return (
    <div className="poster">
      <Container>
        <Row>
          <Col lg={6} className="poster-text">
            <h1>Change the Way you Travel</h1>
            <p>Book flights and explore destinations</p>
          </Col>
          <Col lg={6} className="image-container">
            <img
              src="assets/flight.jpg" 
              alt="not availabl"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrontPage;
