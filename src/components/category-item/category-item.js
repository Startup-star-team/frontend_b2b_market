import React, {Component} from 'react'
import {Col, Figure} from 'react-bootstrap';


class CategoryItem extends  Component {
    render(){
        return(
            <Col md="auto">
                <Figure className="mx-3">
                    <Figure.Image
                        width={this.props.width}
                        height={this.props.height}
                        roundedCircle
                        alt="50x50"
                        src={this.props.src}
                    />
                    <h6 className="text-center">
                        {this.props.content}
                    </h6>
                </Figure>
            </Col>
            )
    }

}
export default CategoryItem