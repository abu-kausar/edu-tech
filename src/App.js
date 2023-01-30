import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Slider from './components/Slider/Slider';
import { createContext, useEffect, useState } from 'react';
import data from '../src/fakeData/fakeData.json';

export const ProductContext = createContext();

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    setCourses(data);
  },[]);

  return (
    <ProductContext.Provider value={[courses]}>
      <Router>
        <NavBar/>
        {/* <Slider/> */}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/courses' element={<Home/>}/>
          <Route exact path='/course/:courseId' element={<CourseDetail/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}

export default App;
