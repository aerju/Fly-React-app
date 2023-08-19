import React from "react";
import { Row, Col } from "react-bootstrap";
import { VscArrowSwap } from "react-icons/vsc";
import './List.css'

const List = () => {
  const flights = [
    {
      flightName: "Air India",
      imgUrl:
        "assets/air -india.webp",
      origin: "Mumbai",
      destination: "Delhi",
      decription:
        "Book domestic and international flights starting @ Rs. 1,470* ",
    },
    {
      flightName: "Emirates",
      imgUrl:
        "assets/emirates.png",
      origin: "Mumbai",
      destination: "Delhi",
      decription:
        "Book domestic and international flights starting @ Rs. 1,470* ",
    },
    {
      flightName: "Air France",
      imgUrl:
        "assets/air-france.jpg",
      origin: "Mumbai",
      destination: "Delhi",
      decription:
        "Book domestic and international flights starting @ Rs. 1,470* ",
    },
    {
      flightName: "Indigo",
      imgUrl:
        "assets/indigo.webp",
      origin: "Mumbai",
      destination: "Delhi",
      decription:
        "Book domestic and international flights starting @ Rs. 1,470* ",
    },
    {
      flightName: "Air India",
      imgUrl:
        "assets/air -india.webp",
      origin: "Mumbai",
      destination: "Delhi",
      decription:
        "Book domestic and international flights starting @ Rs. 1,470* ",
    },
    {
      flightName: "Emirates",
      imgUrl:
        "assets/emirates.png",
      origin: "Mumbai",
      destination: "Delhi",
      decription:
        "Book domestic and international flights starting @ Rs. 1,470* ",
    },
  ];
  return (
    <div className="flight-list">
      <div className="container">
        <h4>All Flights</h4>
        <Row className="ad-flex justify-content-center align-items-center">
          {flights.map((flight) => (
            <Col lg={6} md={12} style={{ marginBottom: "20px" }}>
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img
                        src={flight?.imgUrl}
                        alt="Not available"
                        className="img-fluid"
                        style={{ width: "100px", borderRadius: "10px" }}
                      ></img>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">{flight?.flightName}</h5>
                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-0">
                            {flight?.decription}
                          </p>
                          <h6 className="small text-muted mb-0">
                            {flight?.origin} <VscArrowSwap className="icon" />{" "}
                            {flight?.destination}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex mt-5">
                      <button  className="btn " >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default List;
