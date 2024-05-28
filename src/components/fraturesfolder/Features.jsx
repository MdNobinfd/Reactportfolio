import React from 'react'
import './features.css'
import { Col, Container, Row } from 'react-bootstrap'
import Headingreuseable from '../../rootreusable/Headingreuseable'
import { RxTextAlignJustify } from "react-icons/rx";
import { FiBookOpen } from "react-icons/fi";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { PiTwitchLogo } from "react-icons/pi";
import { CiWifiOn } from "react-icons/ci";
import { LuSlack } from "react-icons/lu";



import Featurereusable from '../../rootreusable/Featurereusable';


const Features = () => {
  return (
    <>
    <section id='features'>
        <Container>
          <div className="freatue_heaing">
            <Headingreuseable headsub='FEATURES' headtitle='What I Do' />
          </div>
        
            <Row>
              <Col lg={4} md={6}><div className="for_amination" >
              <Featurereusable boxicon={<RxTextAlignJustify />} boxcontanth3='Business Stratagy' boxcontantp='I throw myself down among the tall grass by the stream as I lie
                close to the earth.'/>
              </div>
              </Col>
              <Col lg={4} md={6}><div className="for_amination" >
              <Featurereusable boxicon={<FiBookOpen />} boxcontanth3='Web Design' boxcontantp='I throw myself down among the tall grass by the stream as I lie
                close to the earth.' />
              </div>
              </Col>
              <Col lg={4} md={6}><div className="for_amination">
              <Featurereusable boxicon={<PiTelevisionSimpleLight />} boxcontanth3='App development' boxcontantp='I throw myself down among the tall grass by the stream as I lie
                close to the earth.' />
              </div>
              </Col>
              <Col lg={4} md={6}><div className="for_amination">
              <Featurereusable boxicon={<PiTwitchLogo />} boxcontanth3='Mobile App' boxcontantp='I throw myself down among the tall grass by the stream as I lie
                close to the earth.' />
              </div>
              </Col>
              <Col lg={4} md={6}><div className="for_amination">
              <Featurereusable boxicon={<CiWifiOn />} boxcontanth3='CEO Marketing' boxcontantp='I throw myself down among the tall grass by the stream as I lie
                close to the earth.' />
              </div>
              </Col>
              <Col lg={4} md={6}><div className="for_amination">
              <Featurereusable boxicon={<LuSlack />} boxcontanth3='Personal Protfolio April' boxcontantp='I throw myself down among the tall grass by the stream as I lie
                close to the earth.' />
              </div>
              </Col>  
            </Row>
            <div className="fotter_border"></div>
        </Container>
    </section>
    </>
  )
}

export default Features