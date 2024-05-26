import React from 'react'
import './portfolio.css'
import { Col, Container, Row } from 'react-bootstrap'
import Headingreuseable from '../../rootreusable/Headingreuseable'
import Portfolioreuseable from '../../rootreusable/portfolioreuseable'
import protfolio1 from "../../assets/portfolio1.jpg";
import protfolio2 from "../../assets/portfolio2.jpg";
import protfolio3 from "../../assets/portfolio3.jpg";
import protfolio4 from "../../assets/portfolio4.jpg";
import protfolio5 from "../../assets/portfolio5.jpg";
import protfolio6 from "../../assets/portfolio6.jpg";




const Portfolio = () => {
  return (
    <>
    <section id='portfolio'>
        <Container>
            <Row className='portfolio_heading justify-content-center'>
                <Col lg={5}>
                    <Headingreuseable headsub='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' headtitle='My Portfolio' />
                </Col>
            </Row>
            <Row>
               <Portfolioreuseable portfolioimg={protfolio1} portfoliotitle='Development' portfoliorating='600' portfolioh3='The services provide new for design ' />
               <Portfolioreuseable portfolioimg={protfolio2} portfoliotitle='application' portfoliorating='750' portfolioh3='Mobile app landing design & app maintain' />
               <Portfolioreuseable portfolioimg={protfolio3} portfoliotitle='photoshop' portfoliorating='630' portfolioh3='Logo design creativity & Application ' />
               <Portfolioreuseable portfolioimg={protfolio4} portfoliotitle='figma' portfoliorating='360' portfolioh3='Mobile app landing design & Services' />
               <Portfolioreuseable portfolioimg={protfolio5} portfoliotitle='web design' portfoliorating='180' portfolioh3='Design for tecnology & services ' />
               <Portfolioreuseable portfolioimg={protfolio6} portfoliotitle='web design' portfoliorating='690' portfolioh3='App for any tecnology & services' />
               
            </Row>
            <div className="fotter_border"></div>
        </Container>
    </section>
    </>
  )
}

export default Portfolio