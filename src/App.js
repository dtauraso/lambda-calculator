import React, {useState} from "react";
import "./App.css";
// import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
// import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
// import Specials from "./components/ButtonComponents/SpecialButtons/Specials"
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [displayData, setDisplayData] = useState(0);
  const [buffer, setBuffer] = useState(0)
  const [operatorKind, setOperatorKind] = useState("")
  // the operations done is buffer (*, +, -, /) displayData
  const buttonRepeat = (newPoint) => {
    // Take displayData, advance it to the next place value(left shift it),
    // add the converted newPoint to
    // formula I got from a computer organization textbook
    setDisplayData((displayData * 10) + parseInt(newPoint))
  }
  const exchangeBuffers = (operatorItem) => {
    setBuffer(displayData)
    setDisplayData(0)
    setOperatorKind(operatorItem)

  }
  const operations = (buttonKind, index) => {
    if(buttonKind === "special") {
      if(index === "C" ) {
        setDisplayData(0)

      }

    }
    else if(buttonKind === "operation") {
      if( index === "+" ||
          index === "-" ||
          index === "/" ||
          index === "*") {

        exchangeBuffers(index)
        // console.log(buffer, displayData)

      }
      else if(index === "=") {
        if(operatorKind === "+") {
          // console.log(buffer, displayData)
          // use displayData as an accumulator
          setDisplayData(buffer + displayData)
          // maybe the new displayData can't be shown now?
          // console.log(buffer + displayData, buffer)
  
          setBuffer(0)
  
        }
        else if(operatorKind === "-") {
          // console.log(buffer, displayData)
          // use displayData as an accumulator
          setDisplayData(buffer - displayData)
          // maybe the new displayData can't be shown now?
          // console.log(buffer - displayData, buffer)
  
          setBuffer(0)

        }
        else if(operatorKind === "/") {
          // console.log(buffer, displayData)
          if(displayData === 0) {
            console.log("can't divide by 0")
            setDisplayData(0)
            setBuffer(0)
            
          } else {
            // use displayData as an accumulator
            setDisplayData(buffer / displayData)
            // maybe the new displayData can't be shown now?
            // console.log(buffer - displayData, buffer)
    
            setBuffer(0)

          }

        }
        else if(operatorKind === "*") {
          // console.log(buffer, displayData)
          // use displayData as an accumulator
          setDisplayData(buffer * displayData)
          // maybe the new displayData can't be shown now?
          // console.log(buffer * displayData, buffer)
  
          setBuffer(0)

        }

      }
    }
  }
  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* <Numbers />
        <Operators />
        <Specials /> */}
        <Display value={displayData} modifier={buttonRepeat} operations={operations}/>
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
