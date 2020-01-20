import React from 'react';
import { Navbar, NavDropdown, Nav, FormControl, Button, Form, Container, Row, Col, Figure} from 'react-bootstrap';

const Header = (props) => {


    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Navbar bg="light" expand="sm" >
                        <Navbar.Brand href="#home">B2B marketplace</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavDropdown title="Каталог" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Категория 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Категория 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Категория 3</NavDropdown.Item>

                                </NavDropdown>
                            </Nav>
                            <Form inline className="w-50">
                                <FormControl size="md" type="text" placeholder="Я хочу купить..." className="mr-md-1 w-75" />
                                <Button type="submit">Найти</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center my-5">
                        Категории товаров
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={120}
                        height={180}
                        roundedCircle
                        alt="50x50"
                        src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                    />
                    <h6 className="text-center">
                        TBD
                    </h6>
                </Figure>
            </Col>
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={120}
                        height={180}
                        alt="Джага-Джага Анальная пробка 7.3 см черная с зеленым кристаллом"
                        src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                    />
                    <h6 className="text-center">
                        TBD
                    </h6>
                </Figure>
            </Col>
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={120}
                        height={180}
                        alt="Джага-Джага Анальная пробка 7.3 см черная с зеленым кристаллом"
                        src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                    />
                    <h6 className="text-center">
                        TBD
                    </h6>
                </Figure>
            </Col>
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={120}
                        height={180}
                        alt="Джага-Джага Анальная пробка 7.3 см черная с зеленым кристаллом"
                        src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                    />
                    <h6 className="text-center">
                        TBD
                    </h6>
                </Figure>
            </Col>
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={120}
                        height={180}
                        alt="50x50"
                        src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                    />
                    <h6 className="text-center">
                        TBD
                    </h6>
                </Figure>
            </Col>
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={120}
                        height={180}
                        alt="50x50"
                        src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                    />
                    <h6 className="text-center">
                        TBD
                    </h6>
                </Figure>
            </Col>
        </Row>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Figure className="mx-3">
                        <Figure.Image
                            width={120}
                            height={180}
                            roundedCircle
                            alt="50x50"
                            src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                        />
                        <h6 className="text-center">
                            TBD
                        </h6>
                    </Figure>
                </Col>
                <Col md="auto">
                    <Figure className="mx-3">
                        <Figure.Image
                            width={120}
                            height={180}
                            alt="Джага-Джага Анальная пробка 7.3 см черная с зеленым кристаллом"
                            src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                        />
                        <h6 className="text-center">
                            TBD
                        </h6>
                    </Figure>
                </Col>
                <Col md="auto">
                    <Figure className="mx-3">
                        <Figure.Image
                            width={120}
                            height={180}
                            alt="Джага-Джага Анальная пробка 7.3 см черная с зеленым кристаллом"
                            src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                        />
                        <h6 className="text-center">
                            TBD
                        </h6>
                    </Figure>
                </Col>
                <Col md="auto">
                    <Figure className="mx-3">
                        <Figure.Image
                            width={120}
                            height={180}
                            alt="Джага-Джага Анальная пробка 7.3 см черная с зеленым кристаллом"
                            src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                        />
                        <h6 className="text-center">
                            TBD
                        </h6>
                    </Figure>
                </Col>
                <Col md="auto">
                    <Figure className="mx-3">
                        <Figure.Image
                            width={120}
                            height={180}
                            alt="50x50"
                            src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                        />
                        <h6 className="text-center">
                            TBD
                        </h6>
                    </Figure>
                </Col>
                <Col md="auto">
                    <Figure className="mx-3">
                        <Figure.Image
                            width={120}
                            height={180}
                            alt="50x50"
                            src="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize"
                        />
                        <h6 className="text-center">
                            TBD
                        </h6>
                    </Figure>
                </Col>
            </Row>
        </Container>

    );
}

export default Header;