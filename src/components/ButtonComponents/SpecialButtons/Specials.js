import React, {useState} from "react";
import SpecialButton from "./SpecialButton"
import { specials } from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialIcons, setSpecialIcons] = useState(specials)
  // console.log(specialIcons)
  // props.reset

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialIcons.map((specialIcon, index) => (
         <SpecialButton key={index} icon={specialIcon} operations={props.operations}/>
       ))}
    </div>
  );
};

export default Specials;