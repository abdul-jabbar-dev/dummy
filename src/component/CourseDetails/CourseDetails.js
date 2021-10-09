
import React, { useEffect, useState } from 'react';
import { Col, Container, Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './CourseDetails.css'

const CourseDetails = () => {
    const { id } = useParams()
    const [found, setFound] = useState([])
    useEffect(() => {
        fetch("/data.JSON")
            .then(res => res.json())
            .then(data => setFound(data))
    }, [])
    // temporary store
    let resData = {};
    for (const iterator of found) {
        if (iterator.id === parseFloat(id)) {
            resData = iterator
        }
    }
    console.log(resData)
    const { name, price, image, vacancy } = resData
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6} md={6}>
                        <img style={{paddingBottom:'10px'}} src={image} width="100%" alt="" />
                    </Col>
                    <Col className="sortCol" sm={6} md={6}>
                        <h1>{name}</h1>
                        <h3> price : {price}</h3>
                        <h3> Vacancy : {vacancy}</h3>
                        <Button variant="primary">Buy now</Button><br /><br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;