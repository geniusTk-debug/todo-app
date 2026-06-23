import './reset.css';
import './App.css';
import Form from './Component/Form/index';
import Whiteboard from './Component/Whiteboard/index';
import { useState } from 'react';


function App() {
 const [plan, addPlan] = useState([]);
  const [input, showInput] = useState(false)
 const [id, setid] = useState(1)

  const add_plan = (e) => {
    e.preventDefault();
    setid(prevId => prevId + 1);
    const todoText = e.target.elements['input-form'].value;
    
    if(!todoText.trim()) return;
    addPlan((prevState) => [
      ...prevState,
      {
        id: id,
        todo: todoText,
        time: new Date()
      }
    ])
    e.target.reset();
    showInput(false)
  } 
 console.log(plan)

  return (
     <>
     <Whiteboard input={input} showInput={showInput} plan={plan} add_plan={add_plan}/>
     <Form/>
     </>

     
      
  )
}

export default App
