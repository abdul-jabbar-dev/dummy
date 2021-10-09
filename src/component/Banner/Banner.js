import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            <div className="col-md-6">
              <h1 className="title">
                Online Learning Platform <br /> Learn Earn And Shine!!
              </h1>
              <p className="text-white text-center mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Link to='/courses'>
                <button className="mt-3 about-btn">Courses</button>
              </Link>
            </div>
            <div style={{ color: 'white' }} className="col-md-4">
              <h1>Services</h1>
              <br /><br />
              <Row >
                <Col><Link to='/courses' className="colLink"><h4>Online Class</h4></Link></Col>
                <Col><Link to='/courses' className="colLink"><h4>Offline Class</h4></Link></Col>
                <Col><Link to='/courses' className="colLink"><h4>Meet session</h4></Link></Col>
                <Col><Link to='/courses' className="colLink"><h4>Developers</h4></Link></Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;