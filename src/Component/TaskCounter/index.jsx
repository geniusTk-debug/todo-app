import './index.css';

export default function TaskCounter({plans}) {
  return (
    <div className='task-rc-container'>
        <div className='task-rc-left'>Remaining : {plans && plans.length}
          
        </div>
        
    </div>
  )
}
