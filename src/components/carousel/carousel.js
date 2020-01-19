import React, {Component} from 'react'
import { Carousel } from 'react-bootstrap';

class CarouselMain extends Component {
    render(){
        return (

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://avatars.mds.yandex.net/get-market_banners/1653693/3380727_1.1a17d3bd94fa438e6d3cc476555f69dd.png.3380727/orig"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://avatars.mds.yandex.net/get-market_banners/1516346/2526300_1.62cada33e14c00dd190746d202831ae4.jpg.2526300/orig"
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://avatars.mds.yandex.net/get-market_banners/1350894/3409311_1.fb37fa242d79c584a0c28da923670803.jpg.3409311/orig"
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>

        )
    }
}

export default CarouselMain