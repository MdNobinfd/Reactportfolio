import React from 'react'
import './awesome.css'
import { Col, Container, Row,Nav,Tab } from 'react-bootstrap'
import Headingreuseable from '../../rootreusable/Headingreuseable'
import awesomeclint1 from '../../assets/awesomeclient1.png'
import awesomeclint2 from '../../assets/awesomeclint2.png'
import awesomeclint3 from '../../assets/awesomeclint3.png'
import awesomeclint4 from '../../assets/awesomeclint4.png'
import Awesometabsreusable from '../../rootreusable/Awesometabsreusable'

const Awesome = () => {
  return (
    <>
    <section id='awesome'>
      <Container>
        <div className="awesome_headin">
          <Headingreuseable headsub='POPULAR CLIENTS' headtitle='Awesome Clients'/>
        </div>
        <div className="awesome_tabs">
          <Tab.Container id="left-tabs-example"      defaultActiveKey="first">
              <Row>
                <Col lg={3}>
                  <div className="awesome_tabs_left">
                    <Nav variant="pills" className="flex-column ">
                    <Nav.Item>
                      <Nav.Link eventKey="first">JavaScript</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Product Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="thrad">Wordpress</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="furth">HTML to React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fivth">React To Laravel</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Python</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  </div>
                </Col>
                <Col lg={{span:8,offset:1}}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint2} awesomename='Smiths Marth' />
                       <Awesometabsreusable awesomeimage={awesomeclint3} awesomename='Add Dev' />
                       <Awesometabsreusable awesomeimage={awesomeclint4} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint3} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint2} awesomename='Adon Smith' />
                       <Awesometabsreusable awesomeimage={awesomeclint4} awesomename='Smitha Mila' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='Sultana Mila' />
                       <Awesometabsreusable awesomeimage={awesomeclint3} awesomename='Jannat' />
                       <Awesometabsreusable awesomeimage={awesomeclint2} awesomename='Mila Dus' />
                       <Awesometabsreusable awesomeimage={awesomeclint4} awesomename='Marth Smiths' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='Marth Smiths' />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="thrad">
                    <Row>
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="furth">
                    <Row>
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fivth">
                    <Row>
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
                    <Row>
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                       <Awesometabsreusable awesomeimage={awesomeclint1} awesomename='John Du' />
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
        </div>
        <div className="fotter_border"></div>
      </Container>
    </section>
    </>
  )
}

export default Awesome