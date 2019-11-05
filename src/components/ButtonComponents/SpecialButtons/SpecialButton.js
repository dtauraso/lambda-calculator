import React from "react";
import "./SpecialStyles.css"
const SpecialButton = (props) => {
  console.log(props)
  return (
    <button className="specialStyle">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.icon}
    </button>
  );
};

export default SpecialButton;