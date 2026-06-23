
import './index.css';

export default function Time() {
  const time = new Date();
  const date = time.toLocaleString();
  console.log(time)
  return (

    <div className='time-container'>
       <div className='date'>
        <span className='style'>{date}</span>
       </div>
    </div>
   
  )
}
