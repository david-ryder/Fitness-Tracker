import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar className='nav'>
      <Container>
        <Navbar.Brand className='nav-item'><Link className='link' to={"/"}>Fitness App</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
            <Link className='nav-item link' to={"/login"}>Login</Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;