import React from "react";
import { Col } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

const portfolioreuseable = (props) => {
  return (
    <>
      <Col lg={4}>
        <div className="portfolio_itme">
          <div className="portfolio_item_img">
            <img src={props.portfolioimg} alt="" />
          </div>
          <div className="portfolio_item_meddle d-flex justify-content-between">
            <div className="portfolio_meddle_title">
              <p> {props.portfoliotitle} </p>
            </div>
            <div className="portfolio_meddle_rating">
              <p>
                <FaRegHeart /> {props.portfoliorating}
              </p>
            </div>
          </div>
          <h3>
            {props.portfolioh3}
            <span>
              <GoArrowUpRight />
            </span>
          </h3>
        </div>
      </Col>
    </>
  );
};

export default portfolioreuseable;
