import './index.css';

export default function Task_RC({plan}) {
  return (
    <div className='task-rc-container'>
        <div className='task-rc-left'>Remaining : {plan.length}</div>
    </div>
  )
}
