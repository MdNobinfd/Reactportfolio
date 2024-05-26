import React from "react";
import "./blog.css";
import { Col, Container, Row } from "react-bootstrap";
import Headingreuseable from "../../rootreusable/Headingreuseable";
import Portfolioreuseable from "../../rootreusable/portfolioreuseable";
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'

const Blog = () => {
  return (
    <>
      <section id="blog">
        <Container>
          <Row className="blog_heading justify-content-center">
            <Col lg={5}>
              <Headingreuseable
                headsub="VISIT MY BLOG AND KEEP YOUR FEEDBACK"
                headtitle="My Blog"
              />
            </Col>
          </Row>
          <Row>
            <Portfolioreuseable portfolioimg={blog1} portfoliotitle='CANADA' portfoliorating=' 2 min read' portfolioh3='T-shirt design is the part of design ' />

            <Portfolioreuseable portfolioimg={blog2} portfoliotitle='DEVELOPMENT' portfoliorating=' 2 min read' portfolioh3='The services provide new for design ' />

            <Portfolioreuseable portfolioimg={blog3} portfoliotitle='APPLICATION' portfoliorating=' 5 min read' portfolioh3='Mobile app landing design & app maintain' />
          </Row>
          <div className="fotter_border"></div>
        </Container>
      </section>
    </>
  );
};

export default Blog;






