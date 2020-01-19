import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from '../header'
import CarouselMain from '../carousel'
import HeadLine from '../headline'
import CategoryGrid from '../category'


import { Container, Col, Row } from 'react-bootstrap';


function App() {
    return(

            <Container>
                <Row>
                    <Col >
                        <MainHeader />
                    </Col>


                </Row>
                <Row>
                    <CarouselMain/>
                </Row>
                <Row>

                    <Col className="text-center">
                        <HeadLine  naming="Популярные категории"/>
                    </Col>

                </Row>
                <CategoryGrid/>


            </Container>



    )

}

export default App