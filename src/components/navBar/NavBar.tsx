import Image from "../../assets/logo.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeButton from '../button/Button';
import './style.css'
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <Navbar className="px-0" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className="container" src={Image} style={{ width: '110px', height: "50px" }} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ color: "#0D6DB7" }} className="ms-3 mr-1">Home</Nav.Link>
                        <Nav.Link className="ms-3 mr-1" href="#news">What's New</Nav.Link>
                        <NavDropdown className="ms-3 mr-1" title="Programs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" className="navDown ps-4" >Courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" className="navDown ps-4" >Curriculum</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" className="navDown ps-4" >Result</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="ms-3 me-1">About Us</Nav.Link>
                        <Nav.Link className="ms-3 me-2">Contact Us</Nav.Link>
                        <div className="ms-3 me-1"> <ThemeButton data='Register Now' /></div>
                        <div className="ms-3 me-1"> <ThemeButton data='Certificate verification' /></div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;