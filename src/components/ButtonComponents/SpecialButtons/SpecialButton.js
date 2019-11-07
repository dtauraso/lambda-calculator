import React from "react";
import "./SpecialButtonStyles.css"
const SpecialButton = (props) => {
  // console.log(props)
  return (
    <button className="specialStyle" onClick={()=> {props.operations("special",  props.icon)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.icon}
    </button>
  );
};

export default SpecialButton;