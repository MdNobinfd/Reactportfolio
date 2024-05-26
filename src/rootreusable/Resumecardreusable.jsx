import React from "react";

const Resumecardreusable = (props) => {
  return (
    <>
      <div className="resume_tabs_card">
        <div className="resume_card_main_head d-flex justify-content-between align-items-center">
          <div className="card_left_head">
            <h4>
                {props.cardheadh4}
            </h4>
            <p>
                {props.cardheadp}
            </p>
          </div>
          <div className="card_right_head">
            <span>
                {props.cardheadspan}
            </span>
          </div>
        </div>
        <div className="resume_description">
          <p>
            {props.remumdescip}
          </p>
        </div>
      </div>
    </>
  );
};

export default Resumecardreusable;
