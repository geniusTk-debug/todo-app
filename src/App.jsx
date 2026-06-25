import './reset.css';
import './App.css';
import { useState } from 'react';
import Api from './Api';
import Whiteboard from './Component/Whiteboard/index';
import Extra from './Component/Extra';
import Task_RC from './Component/Task_RC';


function App() {

 let url = 'http://localhost:3000/plan';
 const [plan, addPlan] = useState([]);
 const [input, showInput] = useState(false)

 const delete_todo = (id) => {
  fetch(`http://localhost:3000/plan/${id}`, {
    method: 'DELETE'
  })
 }


  const add_plan = async (e) => {
    e.preventDefault();
   
    const todoText = e.target.elements['input-form'].value;
    
    if(!todoText.trim()) return;

    const new_plan = {
      todo: todoText,
      time: new Date().toLocaleTimeString(),
      completed: false
    };
    try{
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(new_plan),
      });

      if(response.ok) {
        const saved_plan = await response.json();
        addPlan((prevState) => [...prevState, saved_plan]);
        e.target.reset();
      }else {
        console.error("failed to saved plan");
      }

    } catch(error) {
      console.error("inside catch", error)
    }

   
  }
console.log("start",plan)
  return (
    <>
    <Api addPlan={addPlan}/>
    <Task_RC plan={plan}/>
    <Whiteboard input={input} showInput={showInput} plan={plan} add_plan={add_plan} addPlan={addPlan} delete_todo={delete_todo}/>
    <Extra/>
    </>
  )
}

export default App
