import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import { useGetCategories } from "../../hooks/useProducts";

const NavBar = () => {
  const{categories} = useGetCategories();

  return (
        <Navbar style={{width:'100vh'}} expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/' >Agostina Shop</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                categories.map((category, index) => {
                  return(
                    <Link key={index} to={`/category/${category}`}>{category}</Link>)
                })
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <><CartWidget></CartWidget></>
      </Container>
    </Navbar>
  );
}

export default NavBar;