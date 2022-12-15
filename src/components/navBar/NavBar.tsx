import Image from "../../assets/logo.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeButton from '../ThemeBtn/Button';
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

                       <Link id="a" className="text-decoration-none text-dark ms-3 mt-2 mt-2 me-1" to="/">Home</Link>
                       <Link id="a" className="text-decoration-none text-dark ms-3 mt-2 me-1" to="/whatsnew">What's New</Link>
                       <Link id="a" className="text-decoration-none text-dark ms-3 mt-2 me-1" to="/about">About Us</Link>
                       <Link id="a" className="text-decoration-none text-dark ms-3 mt-2 me-1" to="/registerNow">Register Now</Link>
                       <Link id="a" className="text-decoration-none text-dark ms-3 mt-2 me-1" to="/contact">Contact US</Link>
                        {/* <div className="ms-3 me-1"> <ThemeButton data='Register Now' /></div> */}
                        <div className="ms-3 me-1"> <ThemeButton data='Certificate verification' /></div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;