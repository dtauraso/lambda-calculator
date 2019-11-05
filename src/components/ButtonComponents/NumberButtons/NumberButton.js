import React from "react";
import "./NumberButtonStyles.css";

const NumberButton = (props) => {
  // console.log(props)
  return (
    <button className="numberStyle">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.icon}
    </button>
  );
};

export default NumberButton;