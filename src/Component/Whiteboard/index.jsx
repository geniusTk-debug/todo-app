
import './index.css';
import Time from '../Time';
import AddRemove from '../AddRemove';
import Detail from "../Detail";
export default function Whiteboard({ selectedPlanId, showPlanDetail, hidePlanDetail, input, showInput, addPlan, deleteTodo, plans, addPlans}) {
 console.log(selectedPlanId)
    const remove_btn_handler = async (id) => {
      await deleteTodo(id);
      addPlans(prevState => prevState.filter(todo => (
        todo.id !== id
      )))
    };

  return (
    <div className='whiteboard-container'>

      <div className='app-title'><h1>To Do App</h1><h1 className='contact'>dev by : geniusTK</h1></div>
          
        <div className='notification'><p>Today Quotes: 'NO PAIN, NO GAIN'</p></div>
        <div className='todo-list'>
          <form onSubmit={addPlan}>
            {input && <input
          style={{background: 'lightSeaGreen', opacity: plans.length ? '0.6' : '1'}}
            type='text'
            id='input-form'
            name='input-form'
            autoComplete='off'
              placeholder= {!plans.length ? 'Add your today plan here and hit ENTER' : '' }
              />}
            
          </form>
          <ul>
            {plans && !plans.length &&
            <div className='info-show-text'>
              <h2>You Don't Have Any Plan Today. Wanna Add Some..? Click '+' Button</h2>
            </div>}
          {plans && plans.map((prevState, i) => (
            <li className='todo-items-row' key={prevState.id}>
              <div className='todo-item-left'>
                <span className='absolute-no'>{i + 1}</span>
                <span className='todo-text' onClick={()=>showPlanDetail(prevState.id)}>{ prevState.todo}</span>
              </div>
              <div className='remove-btn-container' onClick={() => remove_btn_handler(prevState.id)} >
                <button className='absolute-remove-btn'></button>            
              </div>
              {selectedPlanId === prevState.id &&
              <Detail prevState={prevState} hidePlanDetail={hidePlanDetail}/>}
            </li>           
          ))}
        
        </ul>
        </div>
        <Time/>
    <AddRemove input={input} showInput={showInput} plans={plans} />
    
    </div>
  )
}
