import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    
    return ( 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className=''>
        <Navbar.Brand href="#home">Piguz's Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Shops" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#man">Man</NavDropdown.Item>
              <NavDropdown.Item href="#woman">
                Woman
              </NavDropdown.Item>
           
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
          
          <CartWidget className="fs-1"></CartWidget>
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
     ); 
}
 
export default NavBar;