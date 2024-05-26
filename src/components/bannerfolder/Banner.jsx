import React from "react";
import "./banner.css";
import { Col, Container, Row } from "react-bootstrap";
import bannerleft from "../../assets/banner-01.png";
import { ReactTyped } from "react-typed";
import { LuFacebook } from "react-icons/lu";
import { CiInstagram } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import bannericon1 from "../../assets/bannericon1.png";
import bannericon2 from "../../assets/bannericon2.png";
import bannericon3 from "../../assets/bannericon3.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="banner_right">
                <div className="banner_right_top">
                  <h6>WELCOME TO MY WORLD</h6>
                  <h1>
                    Hi, I’m <span className="for_color">Md. Nobin</span> <br />{" "}
                    a &nbsp;
                    <ReactTyped
                      strings={[
                        "Designer.",
                        "Professional Coder.",
                        "Developer.",
                      ]}
                      typeSpeed={60}
                      backSpeed={60}
                      loop
                    ></ReactTyped>
                  </h1>
                  <p>
                    I use animation as a third dimension by which to simplify
                    experiences and kuiding thro each and every interaction. I’m
                    not adding motion just to spruce things up, but doing it in
                    ways that.
                  </p>
                </div>
                <div className="banner_right_bottom">
                  <Row>
                    <Col lg={6} sm={6} md={6}>
                      <div className="banner_bottom_icon">
                        <p>FIND WITH ME</p>
                        <div className="banner_icon">
                          <a href="#">
                            <LuFacebook />
                          </a>
                          <a href="#">
                            <CiInstagram />
                          </a>
                          <a href="#">
                            <FiLinkedin />
                          </a>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} sm={6} md={6}>
                      <div className="banner_bottom_icon">
                        <p>BEST SKILL ON</p>
                        <div className="banner_icon">
                          <a href="#">
                            {" "}
                            <img src={bannericon1} alt="" />
                          </a>
                          <a href="#">
                            {" "}
                            <img src={bannericon2} alt="" />
                          </a>
                          <a href="#">
                            <img src={bannericon3} alt="" />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 4, offset: 1 }}>
              <div className="banner_left">
                <img src={bannerleft} alt="" />
              </div>
            </Col>
          </Row>
          <div className="fotter_border"></div>
        </Container>
      </section>
    </>
  );
};

export default Banner;