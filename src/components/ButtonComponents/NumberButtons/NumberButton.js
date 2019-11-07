import React from "react";
import "./NumberButtonStyles.css";

const NumberButton = (props) => {
  // console.log(props.icon)
  return (
    <button className="numberStyle" onClick={()=> {props.modifier(props.icon)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
       props.icon}
    </button>
  );
};

export default NumberButton;