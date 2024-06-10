import React from 'react'
import './menu.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/myimg.jpg'
import ScrollspyNav from "react-scrollspy-nav";
import offcanva from '../../assets/offcenva.png'


// 212529

const Menu = () => {
  return (
    <>
     {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navber_main mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className='logo'><img src={logo} alt="" /> <span>N O B I N</span> </Navbar.Brand>
            <Navbar.Toggle  aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="offceanver_tile">
                    <img src={offcanva} alt="" />
                <p>Inbio is a personal portfolio template. You can customize all.</p>
                  </div>
                
                </Offcanvas.Title>
              </Offcanvas.Header>
                  <ScrollspyNav
                      scrollTargetIds={["banner", "features", "portfolio", "reasume", "testimonal", "mypricing", "blog", "contact"]}
                      offset={100}
                      activeNavClass="is-active"
                      scrollDuration="1000"
                      headerBackground="true"
                      >
                      <Offcanvas.Body>
                          <Nav className="justify-content-end  flex-grow-1 pe-3">
                          <Nav.Link href="#banner">Home</Nav.Link>
                          <Nav.Link href="#features">Features</Nav.Link>
                          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                          <Nav.Link href="#reasume">Resume</Nav.Link>
                          <Nav.Link href="#testimonal">Clients</Nav.Link>
                          <Nav.Link href="#mypricing">Pricing</Nav.Link>
                          <Nav.Link href="#blog">blog</Nav.Link>
                          <Nav.Link href="#contact"><Button className='nav_button'>Contact</Button></Nav.Link>
                          </Nav>
                      </Offcanvas.Body>
                  </ScrollspyNav>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Menu