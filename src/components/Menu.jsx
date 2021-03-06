import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import  {PaginasApp}  from '../data/PaginasApp';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand={true}>
  <Container fluid>
    <Navbar.Brand href="#">
    <img
              className="logo-image"
              src="https://images-ext-2.discordapp.net/external/ffCNNee83k6MGnfuxoTrdz1YJzl6wLAibWHk7ZwwtHE/https/upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png?width=1077&height=936"
            /> Desarrollo de Interfaces: Examen React.js</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">{PaginasApp.map((item) => {
                return <Nav.Link as={Link} to={item.path}>
                  {item.title}</Nav.Link>
              })}</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    );
  }
}
export default Menu;
