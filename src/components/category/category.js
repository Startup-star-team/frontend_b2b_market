import React, {Component} from 'react'
import {  Col, Row } from 'react-bootstrap';
import CategoryFigure from '../figure'

class CategoryGrid extends  Component {
    render(){
        return(
            <div>
                <Row>
                    <Col className="text-center" >
                        <CategoryFigure naming="Мобильные телефоны" image_url="//avatars.mds.yandex.net/get-marketcms/879900/img-904427fb-4ad9-4020-8e42-ac6497418a61.png/optimize" />
                    </Col>
                    <Col className="text-center">
                        <CategoryFigure naming="Телевизоры" image_url="//avatars.mds.yandex.net/get-marketcms/475644/img-1c474fec-8faf-438f-a4b6-ae6b1cce198c.png/optimize" />
                    </Col>
                    <Col className="text-center">
                        <CategoryFigure naming="Суррогатное материнство" image_url="//avatars.mds.yandex.net/get-marketcms/475644/img-5e781cd0-47c6-40f9-955a-7bb11960e359.png/optimize" />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center" >
                        <CategoryFigure naming="БАДы" image_url="//avatars.mds.yandex.net/get-marketcms/879900/img-6c2ba3e7-82b4-4682-9bb1-a798be58ec82.png/optimize" />
                    </Col>
                    <Col className="text-center">
                        <CategoryFigure naming="Подсолнечное и машинное масло" image_url="//avatars.mds.yandex.net/get-marketcms/475644/img-eee6fe9e-93ea-4fcf-a9a2-40e1da67c920.png/optimize" />
                    </Col>

                </Row>
            </div>
            )
    }

}
export default CategoryGrid