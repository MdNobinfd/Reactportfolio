import React from 'react'
import './whatclint.css'
import { Col, Container, Row } from 'react-bootstrap'
import Headingreuseable from '../../rootreusable/Headingreuseable'
import Testimonialslider from '../../rootreusable/Testimonialslider'
import testimonialcard1 from '../../assets/testimonialcard1.png'
import { IoMdArrowBack,IoMdArrowForward } from "react-icons/io";


import Slider from "react-slick";
function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className='next'
      onClick={onClick}
    ><IoMdArrowForward /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='prev'
      onClick={onClick}
    ><IoMdArrowBack /></div>
  );
}

const Whatclint = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
    <section id='testimonal'>
      <div className="for_animation" data-aos="zoom-in-up">
         <Container>
            <Row className='djf text-center justify-content-center'>
                <Col lg={5}>
                    <Headingreuseable headsub="WHAT CLIENTS SAY"
                  headtitle="Testimonial"/>
                </Col>
            </Row>
            <Slider {...settings}>
              <Testimonialslider tcardimages={testimonialcard1} leftcardspan='Default name ' leftcardh3='Davei Luace' leftcardp='Chief Operating Manager' tcardrighth3='Android App Development' tcardrightp='via Upwork - Mar 4, 2015 - Aug 30, 2021' tcardrightdisciption='  When managment is so important. Ut tincidunt est ac dolor
            aliquam sodales. Phasellus sed mauris hendrerit, laoreetsem in, lobortis mauris hendrerit ante .tincidunt estac dolor aliquam sodales phasellussmauris .' />
            <Testimonialslider tcardimages={testimonialcard1} leftcardspan='Default name ' leftcardh3='Davei Luace' leftcardp='Chief Operating Manager' tcardrighth3='Android App Development' tcardrightp='via Upwork - Mar 4, 2015 - Aug 30, 2021' tcardrightdisciption='  When managment is important. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreetsem in, lobortis mauris hendrerit ante .tincidunt estac dolor aliquam sodales phasellussmauris .' />
            <Testimonialslider tcardimages={testimonialcard1} leftcardspan='Default name ' leftcardh3='Davei Luace' leftcardp='Chief Operating Manager' tcardrighth3='Android App Development' tcardrightp='via Upwork - Mar 4, 2015 - Aug 30, 2021' tcardrightdisciption='  When managment is important. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreetsem in, lobortis mauris hendrerit ante .tincidunt estac dolor aliquam sodales phasellussmauris .' />
            <Testimonialslider tcardimages={testimonialcard1} leftcardspan='Default name ' leftcardh3='Davei Luace' leftcardp='Chief Operating Manager' tcardrighth3='Android App Development' tcardrightp='via Upwork - Mar 4, 2015 - Aug 30, 2021' tcardrightdisciption='  When managment is important. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreetsem in, lobortis mauris hendrerit ante .tincidunt estac dolor aliquam sodales phasellussmauris .' />
            <Testimonialslider tcardimages={testimonialcard1} leftcardspan='Default name ' leftcardh3='Davei Luace' leftcardp='Chief Operating Manager' tcardrighth3='Android App Development' tcardrightp='via Upwork - Mar 4, 2015 - Aug 30, 2021' tcardrightdisciption='  When managment is important. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreetsem in, lobortis mauris hendrerit ante .tincidunt estac dolor aliquam sodales phasellussmauris .' />
            
            </Slider>
            
        <div className="fotter_border"></div>
        </Container>
      </div>
       

    </section>
    </>
  )
}

export default Whatclint