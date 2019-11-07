import React from "react";
import "./OperatorButtonStyles.css"

const OperatorButton = (props) => {
  // console.log(props)
  return (
    <button className="operatorStyle" onClick={()=> {props.operations("operation",  props.icon.value)}}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.icon.char}
    </button>
  );
};

export default OperatorButton;