import React, {Component} from 'react'
import { Figure} from 'react-bootstrap';

class CategoryFigure extends Component {
    render() {
        return(
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={this.props.image_url}
                    rounded
                />
                <Figure.Caption>
                    {this.props.naming}
                </Figure.Caption>
            </Figure>
        )
    }

}
export default CategoryFigure