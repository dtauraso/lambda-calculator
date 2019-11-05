import React, {useState} from "react";
import OperatorButton from "./OperatorButton"
import { operators } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operatorIcons, setOperatorIcons] = useState(operators)
  console.log(operatorIcons)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorIcons.map((operatorIcon, index) => (
         <OperatorButton key={index} icon={operatorIcon} />
       ))}
    </div>
  );
};

export default Operators;