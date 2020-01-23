import React from 'react';
import {Navbar, NavDropdown, Nav, FormControl, Button, Form, Col} from 'react-bootstrap';


const Header = () => {
    return (
        <Col>
        <Navbar bg="light" expand="sm">
            <Navbar.Brand href="#home">B2B marketplace</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Каталог" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Категория 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Категория 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Категория 3</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                <Form inline className="w-50">
                    <FormControl size="md" type="text" placeholder="Я хочу купить..."
                                 className="mr-md-1 w-75"/>
                    <Button type="submit">Найти</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Col>
    )

}

export default Header;