import './detailStyle.css';

export default function Detail({ prevState, hidePlanDetail }) {
    console.log(prevState)
  return (
    <div className='detail-container'>
      <ul className='detail-list'>
        <li className='detail'>
          {`Date : ${prevState.date}`}
          <span
          style={{color: 'yellow', marginLeft:'5px'}}>
            {prevState.time}</span></li>
        <li className='detail'>Status : 
          <span 
          style={{color: prevState.complete ? 'green' : 'yellow',
                  marginLeft: '5px'}}>
            {prevState.complete? 'Completed' : 'Ongoing'}</span></li>
        <li className='detail'>DeadLine : 
          <span
          style={{color: 'yellow', marginLeft: '5px'}}>
            {prevState.deadline}</span></li>
        
      </ul>
      <div className='detail-btn-container'>
      <button className='detail-btn' onClick={hidePlanDetail}>Back</button>
      <button className='detail-btn'>Edit</button>
      </div>
    </div>

  )
}
