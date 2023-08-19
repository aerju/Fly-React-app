import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdFlight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Search.css";

const Search = () => {
  const [origin, setOrigin] = useState("Mumbai");
  const [destination, setDestination] = useState("Delhi");


  return (
    <div className="flight-search">
      <div className="container">
        <div className="search-form ">
          <Row className="ad-flex justify-content-center align-items-center">
            <Col lg={2} md={12}>
              <Form.Group controlId="origin">
                <HiOutlineLocationMarker className="icon" />
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>


            <Col lg={2} md={12}>
              <Form.Group controlId="destination">
                <HiOutlineLocationMarker className="icon" />
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>

            <Col lg={2} md={6}>
              <Form.Group>
                <SlCalender className="icon" />
                <Form.Label>Departure Date</Form.Label>
                <input className="form-control" type="date" />
              </Form.Group>
            </Col>

            <Col lg={2} md={12}>
              <Form.Group>
                <MdFlight className="icon" />
                <Form.Label>Class</Form.Label>
                <Form.Control as="select">
                  <option value={'Economy'}>Economy</option>
                  <option value={'Permium Economy'}>Permium Economy</option>
                  <option value={'Business'}>Business</option>
                  <option value={'First'}>First</option>
                </Form.Control>
              </Form.Group>
            </Col>

            <Col lg={2} md={6}>
              <Button className="search-button">Search</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Search;
