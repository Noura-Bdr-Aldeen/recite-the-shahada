import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiSearch2Line } from "react-icons/ri";
import { useContext  } from 'react';
import { ThemeContext } from '../../App';

import "./NavApp.css"

function NavApp(){
  const { theme } = useContext(ThemeContext);
 return (
  <>
    <Navbar expand="lg" className="tajawal-bold justify-content-center">
      <Container className='justify-content-around'>
        <Navbar.Brand href="#home" className='color-black space-nav size-20' id={theme}>SHAHADA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav className='gap-md-0 gap-sm-0 gap-lg-5' id={theme}>
            <Nav.Link href="#HOME" className='color-black size-14' id={theme} >HOME</Nav.Link>
            <Nav.Link href="#ABOUT" className='color-black size-14' id={theme} >ABOUT US</Nav.Link>
            <Nav.Link href="#BLOG" className='color-black size-14'id={theme} >BLOG</Nav.Link>
            <Nav.Link href="#CONTACT" className='color-black size-14' id={theme} >CONTACT</Nav.Link>
          </Nav>
          <RiSearch2Line style={{ width:'24px' , height:'24px'}} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default NavApp;