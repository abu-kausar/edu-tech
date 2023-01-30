import React, { useContext} from 'react';
import { ProductContext } from '../../App';
import Course from '../Course/Course';
const Home = () => {
    const [courses] = useContext(ProductContext);

    return (
        <div className='d-flex justify-content-evenly '>
            {
                courses.map(course=><Course course={course}></Course>)
            }
        </div>
    );
};

export default Home;