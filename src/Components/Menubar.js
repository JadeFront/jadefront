import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Custom.scss'

function Menubar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>

        <Navbar.Brand className='text-secondary' style={{fontSize: "2rem", fontWeight: "bold"}} href="#home">Jade</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "#FFEED9"}}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link className='text-secondary' style={{paddingLeft: "3rem"}} href="#home">Home</Nav.Link>
            <Nav.Link className='text-secondary' style={{paddingLeft: "3rem"}} href="#about">About</Nav.Link>
            <Nav.Link className='text-secondary' style={{paddingLeft: "3rem"}} href="#project">Projects</Nav.Link>
            <Nav.Link className='text-secondary' style={{paddingLeft: "3rem"}} href="#contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menubar;