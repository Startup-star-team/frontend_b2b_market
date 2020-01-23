import React, {Component} from 'react'
import {Col, Figure} from "react-bootstrap";

class CatalogItem extends Component {
    render(){
        return(
            <Col>
                <Figure>
                    <Figure.Image

                        alt="50x50"
                        src={this.props.src}
                    />
                    <h6>
                        {this.props.price}
                    </h6>
                    <span className="text-warning">{this.props.feedback}</span>
                    <p className="font-weight-light w-75">
                        {this.props.description}
                    </p>
                </Figure>
            </Col>
        )

        }

}

export default CatalogItem