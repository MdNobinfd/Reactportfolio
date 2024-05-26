import React from "react";
import { IoStar } from "react-icons/io5";

import { Col, Row } from 'react-bootstrap'

const Testimonialslider = (props) => {
  return (
    <>
      <div className="testimonial_slider">
        <Row className="justify-content-center">
          <Col lg={9}>
            <Row>
              <Col lg={4} sm={12}>
                <div className="testimonial_slider_left">
                  <Row className="ls align-items-center">
                    <Col lg={12} sm={6} md={3} xs={12}>
                      <div className="testimonial_left_card">
                        <div className="testimonial_card_images">
                          <img src={props.tcardimages} alt="" />
                        </div>
                      </div>
                    </Col>
                    <Col lg={12} sm={6} md={9} xs={12}>
                      <div className="testimonial_card_name">
                        <span>{props.leftcardspan} </span>
                        <h3> {props.leftcardh3} </h3>
                        <p> {props.leftcardp} </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={{ span: 7, offset: 1 }} sm={12}>
                <div className="testimonial_slider_right">
                  <div className="testimonial_slider_right_head d-flex justify-content-between align-items-center">
                    <div className="title">
                      <h3>
                        {props.tcardrighth3}
                      </h3>
                      <p>
                        {props.tcardrightp}
                      </p>
                    </div>
                    <div className="rating">
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                      <span>
                        <IoStar />
                      </span>
                    </div>
                  </div>
                  <div className="right_fotter_discription">
                    <p>
                        {props.tcardrightdisciption}
                    
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Testimonialslider;
