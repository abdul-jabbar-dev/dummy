import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
   const [contain,setContain] = useState([])
    useEffect (() => {
      fetch("/data.JSON")
      .then(res =>res.json())
      .then(item =>setContain(item))
    },[])
    console.log(contain)
    return (
      
        <div>
            <Container>
            <Row>
            {
                contain.map(data=> <Course data={data}></Course>)
                
            
            }
            </Row>
          </Container>
          
        </div>
    );
};

export default Courses;