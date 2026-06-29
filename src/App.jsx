import './reset.css';
import './App.css';
import usePlans from './Hook/usePlans';
import { useState } from 'react';
import Whiteboard from './Component/Whiteboard/index';
import Extra from './Component/Extra';



function App() {

 let url = 'http://localhost:3000/plans';
 
 const [input, showInput] = useState(false)
 
 const { data : plans, setData : addPlans , deleteTodo, showPlanDetail, hidePlanDetail, selectedPlanId } = usePlans(url)



  const addPlan = async (e) => {
    e.preventDefault();
   
    const todoText = e.target.elements['input-form'].value;
    
    if(!todoText.trim()) return;

    const new_plan = {
      todo: todoText,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      deadline: "notset",
      complete: false
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
        addPlans((prevState) => [...prevState, saved_plan]);
        e.target.reset();
      }else {
        console.error("failed to saved plan");
      }

    } catch(error) {
      console.error("inside catch", error)
    }
  };
console.log("start",plans)
  return (
    <>
    
    
    <Whiteboard selectedPlanId={selectedPlanId} showPlanDetail={showPlanDetail} hidePlanDetail={hidePlanDetail} input={input} showInput={showInput} addPlan={addPlan} deleteTodo={deleteTodo} plans={plans} addPlans={addPlans}/>
    <Extra/>

    
    </>
  )
}

export default App
