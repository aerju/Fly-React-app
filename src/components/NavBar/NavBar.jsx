
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MdFlight } from "react-icons/md";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand> Fly <MdFlight className="icon" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Flights</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
