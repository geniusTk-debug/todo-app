import './index.css';
import Add_Remove from '../Add_Remove';
export default function Whiteboard({input, showInput,plan, add_plan}) {

 const set_up_text = `Don't have any mission for Today. Wanna add some?`;
 
  return (
    <div className='whiteboard-container'>

      <div className='app-title'><h1>App</h1></div>
      

      
        <div className='notification'><p>Today Quotes: 'NO PAIN, NO GAIN'</p></div>
        <div className='todo-list'>
          <form onSubmit={add_plan}>
            {input && <input
           style={{background: 'lightSeaGreen'}}
            type='text-area'
             id='input-form'
             name='input-form'
              placeholder='Add your plan here. Hit Enter or Click true sign to finished'
               />}
          </form>
          <ul>
            {!plan.length && <div className='info-show-text'><h2>{set_up_text}</h2></div>}
           {plan.map(prevState => (
            
            <li key={prevState.id}><span className='absolute-no'>{prevState.id}</span>{prevState.todo}</li>
            
           ))}
        
        </ul>
        </div>
      
     <Add_Remove input={input} showInput={showInput} />
      
    

      

    </div>
  )
}


{/*<form onSubmit={add_plan}>
              {input && <input
           style={{background: 'lightSeaGreen'}}
            type='text-area'
             id='input-form'
             name='input-form'
              placeholder='Add your plan here. Hit Enter or Click true sign to finished'
               />}
            </form>
            
             
            */}