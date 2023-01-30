/* eslint-disable no-unused-expressions */
import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../App';
import './CourseDetail.css';

const CourseDetail = () => {
    const {courseId} = useParams();
    const [courses] = useContext(ProductContext);

    const selectedCourse = courses.find(course => {
        if(course.id == courseId){
            return course;
        }
    });

    return (
        <div className='detail'>
            <img src={selectedCourse.image} alt="image" />
            <h3><strong>{selectedCourse.course_name}</strong></h3>
            <p>Total Enroll: {selectedCourse.enroll}</p>
        </div>
    );
};

export default CourseDetail;