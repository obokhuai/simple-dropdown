import React from 'react'
import { useState} from "react";
import Dropdown from './Dropdown'


function App() {

  const [selection, setSelection] = useState(null);

  const handleSelect =(optionSelected)=>{
  setSelection(optionSelected);
  }
 const options = [
   {label: "Red", value: "red" },
   {label: "Green", value: "green" },
   {label: "Blue", value: "blue" }
 ]
  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect}/>
    </div>
  )
}

export default App