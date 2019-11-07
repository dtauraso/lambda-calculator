import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers"
import Operators from "../ButtonComponents/OperatorButtons/Operators"
import Specials from "../ButtonComponents/SpecialButtons/Specials"

const Display = (props) => {
  // console.log(props.modifier)
  return <div >
          <div className="display">{/* Display any props data here */
          props.value}

          </div>
          <div className="allButtons">

            <div className="specialNumbers">
              <Specials operations={props.operations}/>
              <Numbers modifier={props.modifier}/>
            </div>

            <Operators operations={props.operations}/>
          </div>
          


  </div>;
};

export default Display;