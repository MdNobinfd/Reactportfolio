import React from "react";
import "./reasume.css";
import { Col, Container, Tabs,Tab, Row } from "react-bootstrap";
import Headingreuseable from "../../rootreusable/Headingreuseable";
import Resumecardreusable from "../../rootreusable/Resumecardreusable";

const Reasume = () => {
  return (
    <>
      <section id="reasume">
        <Container>
          <Row className="justify-content-center">
            <Col lg={5}>
              <div className="reasume_heading">
                <Headingreuseable
                  headsub="7+ YEARS OF EXPERIENCE"
                  headtitle="My Resume"
                />
              </div>
            </Col>
          </Row>
          <div className="resume_main_tabs">
          <Tabs
            defaultActiveKey="home"id="justify-tab-example"className="mb-3" justify>
            <Tab eventKey="home" title="Education">
              <Row>
                <Col lg={6}>
                    <div className="resume_tabs_heading">
                        <Headingreuseable headsub="2007 - 2010"
                        headtitle="Company Experience"/>
                    </div>
                    <div className="resume_tabs_item">
                      <div className="sdklfjsdkljf" >
                        <Resumecardreusable cardheadh4='Personal Portfolio April Fools' cardheadp='University of DVI (1997 - 2001)' cardheadspan='4.30/5' remumdescip=' The education should be very interactual. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,lobortis mauris hendrerit ante.' />
                      </div>
                        <div className="for_animation">
                          <Resumecardreusable cardheadh4='Examples Of Personal Portfolio' cardheadp='College of Studies (2000 - 2002)' cardheadspan='4.50/5' remumdescip='Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                        </div>
                        
                        <div className="for_animation" >
                          <Resumecardreusable cardheadh4='Tips For Personal Portfolio' cardheadp='University of Studies (1997 - 2001)' cardheadspan='4.80/5' remumdescip='If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                        </div>
                        
                    </div>
                </Col>
                <Col lg={6}>
                <div className="resume_tabs_heading">
                        <Headingreuseable headsub="2007 - 2010"
                        headtitle="Job Experience"/>
                    </div>
                    <div className="resume_tabs_item">
                      <div className="for_animation">
                         <Resumecardreusable cardheadh4='Diploma in Web Development' cardheadp='BSE In CSE (2004 - 2008)' cardheadspan='4.70/5' remumdescip='Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                      </div>
                       
                        <div className="for_animation" >
                          <Resumecardreusable cardheadh4='The Personal Portfolio Mystery' cardheadp='Job at Rainbow-Themes (2008 - 2016)' cardheadspan='4.95/5' remumdescip='Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                        </div>
                        
                        <div className="for_animation" >
                          <Resumecardreusable cardheadh4='Diploma in Computer Science' cardheadp='Works at Plugin Development (2016 - 2020)' cardheadspan='5.00/5' remumdescip='Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                        </div>
                        
                    </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Professional Skills">
            <Row>
                <Col lg={6}>frgv</Col>
                <Col lg={6}>sdf</Col>
              </Row>
            </Tab>
            <Tab eventKey="longer-tab" title="Experience">
            <Row>
                <Col lg={6}>
                    <div className="resume_tabs_heading">
                        <Headingreuseable headsub="2007 - 2010"
                        headtitle="Company Experience"/>
                    </div>
                    <div className="resume_tabs_item">
                        <Resumecardreusable cardheadh4='Personal Portfolio April Fools' cardheadp='University of DVI (1997 - 2001)' cardheadspan='4.30/5' remumdescip=' The education should be very interactual. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='Examples Of Personal Portfolio' cardheadp='College of Studies (2000 - 2002)' cardheadspan='4.50/5' remumdescip='Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='Tips For Personal Portfolio' cardheadp='University of Studies (1997 - 2001)' cardheadspan='4.80/5' remumdescip='If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                    </div>
                </Col>
                <Col lg={6}>
                <div className="resume_tabs_heading">
                        <Headingreuseable headsub="2007 - 2010"
                        headtitle="Job Experience"/>
                    </div>
                    <div className="resume_tabs_item">
                        <Resumecardreusable cardheadh4='Diploma in Web Development' cardheadp='BSE In CSE (2004 - 2008)' cardheadspan='4.70/5' remumdescip='Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='The Personal Portfolio Mystery' cardheadp='Job at Rainbow-Themes (2008 - 2016)' cardheadspan='4.95/5' remumdescip='Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='Diploma in Computer Science' cardheadp='Works at Plugin Development (2016 - 2020)' cardheadspan='5.00/5' remumdescip='Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                    </div>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="contact" title="Interview">
            <Row>
                <Col lg={6}>
                    <div className="resume_tabs_heading">
                        <Headingreuseable headsub="2007 - 2010"
                        headtitle="Company Experience"/>
                    </div>
                    <div className="resume_tabs_item">
                        <Resumecardreusable cardheadh4='Personal Portfolio April Fools' cardheadp='University of DVI (1997 - 2001)' cardheadspan='4.30/5' remumdescip=' The education should be very interactual. Ut tincidunt est ac doloraliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='Examples Of Personal Portfolio' cardheadp='College of Studies (2000 - 2002)' cardheadspan='4.50/5' remumdescip='Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='Tips For Personal Portfolio' cardheadp='University of Studies (1997 - 2001)' cardheadspan='4.80/5' remumdescip='If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                    </div>
                </Col>
                <Col lg={6}>
                <div className="resume_tabs_heading">
                        <Headingreuseable headsub="2007 - 2010"
                        headtitle="Job Experience"/>
                    </div>
                    <div className="resume_tabs_item">
                        <Resumecardreusable cardheadh4='Diploma in Web Development' cardheadp='BSE In CSE (2004 - 2008)' cardheadspan='4.70/5' remumdescip='Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='The Personal Portfolio Mystery' cardheadp='Job at Rainbow-Themes (2008 - 2016)' cardheadspan='4.95/5' remumdescip='Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />

                        <Resumecardreusable cardheadh4='Diploma in Computer Science' cardheadp='Works at Plugin Development (2016 - 2020)' cardheadspan='5.00/5' remumdescip='Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.' />
                    </div>
                </Col>
              </Row>
            </Tab>
          </Tabs>
          </div>
          <div className="fotter_border"></div>
        </Container>
      </section>
    </>
  );
};

export default Reasume;
