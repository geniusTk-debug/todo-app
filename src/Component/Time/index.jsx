
import { useEffect, useState } from 'react';
import './index.css';

export default function Time() {

  const [frozen_time, melting_time] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    
  const inervalId =  setInterval(() => {
    melting_time(new Date().toLocaleTimeString())
  }, 1000)
  return () => clearInterval(inervalId)
  }, [])
  
  return (

    <div className='time-container'>
       <div className='date'>
        <span className='style'>{frozen_time}</span>
       </div>
    </div>
   
  )
}
