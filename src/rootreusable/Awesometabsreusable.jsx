import React from 'react'
import { Col} from 'react-bootstrap'

const Awesometabsreusable = (props) => {
  return (
    <>
     <Col lg={4}>
            <div className="awesome_right_item text-center">
                <div className="awesome_right_item_image">
                        <img src={props.awesomeimage} alt="" />
                </div>
                <div className="awesome_right_item_line"></div>
                 <div className="awesome_right_item_name">
                     <a href="#">{props.awesomename}</a>
             </div>
        </div>
    </Col>
    </>
  )
}

export default Awesometabsreusable