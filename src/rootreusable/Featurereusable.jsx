import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Col } from 'react-bootstrap'


const Featurereusable = (props) => {
  return (
    <>
      <div className="features_item">
          <div className="features_box">
          <div className="features_boxmain">
            <div className="feature_box_icon">
              <span>
               {props.boxicon}
              </span>
            </div>
            <div className="feature_box_contant">
              <h3>{props.boxcontanth3} </h3>
              <p>
                {props.boxcontantp}
      
              </p>
            </div>
            <div className="feature_box_icon_hedden">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featurereusable;
