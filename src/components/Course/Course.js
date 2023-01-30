import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = (props) => {
    const {id, course_name, enroll, price, image} = props.course;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                    Enroll: {enroll} Price: ${price}
                    </Card.Text>
                    <Link to={`/course/${id}`}><Button variant="primary">See Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;