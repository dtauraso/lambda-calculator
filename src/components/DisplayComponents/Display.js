import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers"
import Operators from "../ButtonComponents/OperatorButtons/Operators"
import Specials from "../ButtonComponents/SpecialButtons/Specials"

const Display = () => {
  return <div >
          <div className="display">{/* Display any props data here */}

          </div>
          <div>
          <Specials />
          <Numbers />

          </div>
          <div>
          <Operators />

          </div>

  </div>;
};

export default Display;