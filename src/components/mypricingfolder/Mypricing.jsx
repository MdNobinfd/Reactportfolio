import React from "react";
import "./mypricing.css";
import { Col, Container, Row, Tabs, Tab, Button } from "react-bootstrap";
import Headingreuseable from "../../rootreusable/Headingreuseable";

import Pricingtabsreusable from "../../rootreusable/Pricingtabsreusable";



const Mypricing = () => {
  return (
    <>
      <section id="mypricing">
        <Container>
          <Row>
            <Col lg={3} className="pricing_head">
              <div className="pricing_main_main">
              <Headingreuseable headsub="PRICING" headtitle="My Pricing" />
              </div>
             
            </Col>
            <Col lg={{span:6,offset:3}}>
              <div className="pricing_tabps">
                <div className="notification">Recommended</div>
                <Tabs
                  defaultActiveKey="home"
                  id="fill-tab-example" className="mb-3" fill>
                  <Tab eventKey="home" title="Static">
                    <Pricingtabsreusable/>
                  </Tab>
                  <Tab eventKey="profile" title="Standard">
                  <Pricingtabsreusable/>
                  </Tab>
                  <Tab eventKey="longer-tab" title="Premium">
                  <Pricingtabsreusable/>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>

          <div className="fotter_border"></div>
        </Container>
      </section>
    </>
  );
};

export default Mypricing;

