
import { useEffect, useState } from 'react';
import './index.css';

export default function Time() {

  const [frozenTime, meltingtime] = useState(new Date().toLocaleTimeString());
  const [frozenDate, meltingDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    
  const inervalId =  setInterval(() => {
    meltingtime(new Date().toLocaleTimeString())
  }, 1000)

  const intervalDateId = setInterval(() => {
    meltingDate(new Date().toLocaleDateString())
  }, 86400000)
  return () => clearInterval(inervalId),(intervalDateId);
  }, [])


  
  return (

    <div className='time-container'>
      <div className='clock'>
          <span className='clock-child'>{frozenTime}</span>
        </div>
       <div className='date'>
        <span className='date-child'>{frozenDate}</span>
       </div>
        
    </div>
   
  )
}
