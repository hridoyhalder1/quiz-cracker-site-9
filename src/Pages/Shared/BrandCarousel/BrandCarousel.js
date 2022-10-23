import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assests/brand/Brand1.jpg';
import Brand2 from '../../../assests/brand/Brand2.jpg';
import Brand3 from '../../../assests/brand/Brand3.jpg';
import Brand4 from '../../../assests/brand/Brand4.jpg';
import Brand5 from '../../../assests/brand/Brand5.jpg';

const BrandCarousel = () => {
    return (
        <Carousel className='mt-3'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand4}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Brand5}
                    alt="Second slide"
                />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default BrandCarousel;