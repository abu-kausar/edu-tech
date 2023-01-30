import React, {useContext} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    const [courses] = useContext([]);

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={courses[0].image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>{courses[0].course_name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={courses[4].image}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>{courses[4].course_name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={courses[8].image}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>{courses[8].course_name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;