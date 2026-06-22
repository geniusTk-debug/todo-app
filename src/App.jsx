import './reset.css';
import './App.css';
import Form from './Component/Form/index';
import Whiteboard from './Component/Whiteboard/index';
import { useState } from 'react';


function App() {
  const [input, showInput] = useState(false)
 

  return (
     <>
     <Whiteboard input={input} showInput={showInput}/>
     <Form/>
     </>

     
      
  )
}

export default App
