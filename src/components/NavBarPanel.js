import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarText from 'react-bootstrap/esm/NavbarText';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavBar = () =>{
  const cartProducts = useSelector(state => state.cart)
return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          </Nav>
          <NavbarToggle/>
          <NavbarCollapse className='justify-content-end'>
            <NavbarText>
            <Nav.Link to="/cart" as={Link}>My Bag {cartProducts.length}</Nav.Link>
            </NavbarText>
          </NavbarCollapse>
      </Container>
    </Navbar>
)
}

export default NavBar;