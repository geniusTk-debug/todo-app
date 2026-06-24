import { useState } from 'react';
import './index.css';
import Add_Remove from '../Add_Remove';
import Time from '../Time';

export default function Whiteboard({input, showInput,plan, add_plan}) {

  const [clicked_btn_id, set_clicked_btn_id] = useState(null);

    const remove_btn_handler = (id) => {
      console.log(id)
      
      set_clicked_btn_id(id)
        setTimeout(() => {
            set_clicked_btn_id(null)
        }, 250)

    };

  return (
    <div className='whiteboard-container'>

      <div className='app-title'><h1>To Do App</h1><h1 className='contact'>dev by : geniusTK</h1></div>
      

      
        <div className='notification'><p>Today Quotes: 'NO PAIN, NO GAIN'</p></div>
        <div className='todo-list'>
          <form onSubmit={add_plan}>
            {input && <input
           style={{background: 'lightSeaGreen', opacity: plan.length ? '0.6' : '1'}}
            type='text'
             id='input-form'
             name='input-form'
             autoComplete='off'
              placeholder= {!plan.length ? 'Add your today plan here and hit ENTER' : '' }
               />}
            
          </form>
          <ul>
            {!plan.length &&
             <div className='info-show-text'>
              <h2>You Don't Have Any Plan Today. Wanna Add Some..? Click '+' Button</h2>
             </div>}
             
           {plan.map(prevState => (
            
            <li className='todo-items-row' key={prevState.id}>
              <div className='todo-item-left'>
                <span className='absolute-no'>{prevState.id}</span>
                <span className='todo-text'>{ prevState.todo}</span>
              </div>

              <i style={{
                 boxShadow: clicked_btn_id === prevState.id ? '1px 1px 2px 1px black inset' : '1px 1px 2px 1px black'
              }}
                className="fa-solid fa-minus absolute-remove"
                onClick={() => remove_btn_handler(prevState.id)}>
              </i>
            </li>
            ))}
        
        </ul>
        </div>
        <Time/>
      
     <Add_Remove input={input} showInput={showInput} />
      
    

      

    </div>
  )
}
