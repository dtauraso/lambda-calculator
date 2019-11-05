import React, {useState} from "react";
import NumberButton from "./NumberButton"
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
import { numbers } from '../../../data'

//Import your array data to from the provided data file

const Numbers = (props) => {

  // console.log(numbers)
  // STEP 2 - add the imported data to state
  const [numberIcons, setNumberIcons] = useState(numbers)
  console.log(numberIcons)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numberIcons.map((numberIcon, index) => (
         <NumberButton key={index} icon={numberIcon} modifier={props.modifier} />
       ))}
    </div>
  );
};

export default Numbers;