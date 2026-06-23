import './index.css';
import Add_Remove from '../Add_Remove';
import Time from '../Time';

export default function Whiteboard({input, showInput,plan, add_plan}) {

  return (
    <div className='whiteboard-container'>

      <div className='app-title'><h1>To Do App</h1><h1 className='contact'>dev by : geniusTK</h1></div>
      

      
        <div className='notification'><p>Today Quotes: 'NO PAIN, NO GAIN'</p></div>
        <div className='todo-list'>
          <form onSubmit={add_plan}>
            {input && <input
           style={{background: 'lightSeaGreen', opacity: plan.length ? '0.5' : '1'}}
            type='text'
             id='input-form'
             name='input-form'
              placeholder= {!plan.length ? 'Add your today plan here and hit ENTER' : '' }
               />}
          </form>
          <ul>
            {!plan.length && <div className='info-show-text'><h2>You Don't Have Any Plan Today. Wanna Add Some..? Click '+' Button</h2></div>}
           {plan.map(prevState => (
            
            <li key={prevState.id}><span className='absolute-no'>{prevState.id}</span>{prevState.todo}</li>
            
           ))}
        
        </ul>
        </div>
        <Time/>
      
     <Add_Remove input={input} showInput={showInput} />
      
    

      

    </div>
  )
}
