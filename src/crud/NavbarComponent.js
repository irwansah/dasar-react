import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
const NavbarComponent = () => {
  

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">Menu Makanan</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" >
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">List</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              
                </Nav>
                <div className="d-block float-end ms-5 w-100 my-sm-1 mt-3">
                <Form className="d-inline-flex w-100">
                <FormControl
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
               

                <Button variant="success" className="ms-1">Search</Button>
                </Form>
                </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavbarComponent
