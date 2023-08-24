import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
 
const BlogNav = () => {
    return (
        <div>
            <Navbar style={{
                backgroundColor:"#4169E1"
            }}>
                <img
              src={require('../images/react.jpg')}
              height='30'
              alt=''
              loading='lazy'
            />
                <Navbar.Brand href="#home" style={{color:"white", marginLeft:"10px"}}>GUNASEKARAN</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#react" style={{color:"white"}}>
                            React
                        </Nav.Link>
                        <Nav.Link href="#java" style={{color:"white"}}>
                            Java
                        </Nav.Link>
                        <Nav.Link href="#html&css" style={{color:"white"}}>
                            HTML & CSS
                        </Nav.Link>
                        <Nav.Link href="#django" style={{color:"white"}}>
                            Django
                        </Nav.Link>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="ml-auto"  />
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
 
export default BlogNav;