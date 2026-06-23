import './reset.css';
import './App.css';
import { useState } from 'react';
import Whiteboard from './Component/Whiteboard/index';
import Extra from './Component/Extra';


function App() {
 const [plan, addPlan] = useState([]);
 const [input, showInput] = useState(false)
 const [id, setid] = useState(1)

  const add_plan = (e) => {
    e.preventDefault();
    setid(prevId => prevId + 1);
    const todoText = e.target.elements['input-form'].value;
    
    if(!todoText.trim()) return;

    addPlan((prevState) => [...prevState,

      {
        id: id,
        todo: todoText,
        time: new Date()
      }

    ])

    e.target.reset();
      //Optional
    //showInput(false);
  } 

  return (
     <>
     <Whiteboard input={input} showInput={showInput} plan={plan} add_plan={add_plan}/>
     <Extra/>
     </>
  )
}

export default App
