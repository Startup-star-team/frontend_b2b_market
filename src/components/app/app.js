import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import CategoryItem from '../category-item'
import Header from '../header'
import CatalogItem from '../catalog-item'

const App = (props) => {


    const categories = [
        {
            width: 120,
            height: 180,
            src: "//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize",
            content: "test"
        },
        {
            width: 120,
            height: 180,
            src: "//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize",
            content: "test"
        },
        {
            width: 120,
            height: 180,
            src: "//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize",
            content: "test"
        },
        {
            width: 120,
            height: 180,
            src: "//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize",
            content: "test"
        },
        {
            width: 120,
            height: 180,
            src: "//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize",
            content: "test"
        },
        {
            width: 120,
            height: 180,
            src: "//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize",
            content: "test"
        },
    ];

    const popular_items = [
        {
            src: "//avatars.mds.yandex.net/get-mpic/1865885/img_id8387607325281604232.jpeg/5hq",
            price: "236 ₽",
            feedback: "39 отзывов",
            stars: "&#9733; &#9733; &#9733; &#9734; &#9734;",
            description: "Раствор Bausch & Lomb Biotrue универсальный 120 мл"
        },
        {
            src: "//avatars.mds.yandex.net/get-mpic/1865885/img_id8387607325281604232.jpeg/5hq",
            price: "236 ₽",
            feedback: "39 отзывов",
            stars: "&#9733; &#9733; &#9733; &#9734; &#9734;",
            description: "Раствор Bausch & Lomb Biotrue универсальный 120 мл"
        }, {
            src: "//avatars.mds.yandex.net/get-mpic/1865885/img_id8387607325281604232.jpeg/5hq",
            price: "236 ₽",
            feedback: "39 отзывов",
            stars: "&#9733; &#9733; &#9733; &#9734; &#9734;",
            description: "Раствор Bausch & Lomb Biotrue универсальный 120 мл"
        }, {
            src: "//avatars.mds.yandex.net/get-mpic/1865885/img_id8387607325281604232.jpeg/5hq",
            price: "236 ₽",
            feedback: "39 отзывов",
            stars: "&#9733; &#9733; &#9733; &#9734; &#9734;",
            description: "Раствор Bausch & Lomb Biotrue универсальный 120 мл"
        }, {
            src: "//avatars.mds.yandex.net/get-mpic/1865885/img_id8387607325281604232.jpeg/5hq",
            price: "236 ₽",
            feedback: "39 отзывов",
            stars: "&#9733; &#9733; &#9733; &#9734; &#9734;",
            description: "Раствор Bausch & Lomb Biotrue универсальный 120 мл"
        }, {
            src: "//avatars.mds.yandex.net/get-mpic/1865885/img_id8387607325281604232.jpeg/5hq",
            price: "236 ₽",
            feedback: "39 отзывов",
            stars: "&#9733; &#9733; &#9733; &#9734; &#9734;",
            description: "Раствор Bausch & Lomb Biotrue универсальный 120 мл"
        },

    ]

    return (
        <Container fluid="md">
            <Row>
                <Header/>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center my-5">
                        Категории товаров
                    </h2>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {
                    categories.map(({width, height, src, content}) => {
                            return (
                                <CategoryItem width={width} height={height} src={src} content={content}/>
                            )
                        }
                    )
                }

            </Row>
            <Row>
                <Col>
                    <h2 className="text-center my-5">
                        Категория 1
                    </h2>

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {popular_items.map(({src, price, feedback, stars, description}) => {
                    return (
                        <CatalogItem src={src} price={price} feedback={feedback} stars={stars} description={description}/>
                    )
                })}

            </Row>


        </Container>

    );
}

export default App