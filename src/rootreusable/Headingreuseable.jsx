import React from "react";

const Headingreuseable = (props) => {
  return (
    <>
      <div className="heading">
        <span>{props.headsub} </span>
        <h2>{props.headtitle} </h2>
      </div>
    </>
  );
};

export default Headingreuseable;
