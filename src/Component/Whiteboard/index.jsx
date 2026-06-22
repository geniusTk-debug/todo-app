import './index.css';
import Add_Remove from '../Add_Remove';
export default function Whiteboard({input, showInput}) {
  return (
    <div className='whiteboard-container'>

      <div className='app-title'><h1>App</h1></div>
      

      
        <div className='notification'><p>YOu Have 3 things to do Today.See more...</p></div>
        <div className='todo-list'>
          {input && <input style={{background: 'lightSeaGreen'}} type='text-area' id='input-form' placeholder='Add your plan here. Hit Enter or Click true sign to finished'/>}
          <ul>
          <li><span className='absolute-no'>1</span>text</li>
          <li><span className='absolute-no'>2</span>text</li>
          <li><span className='absolute-no'>3</span>text</li>
        
        </ul>
        </div>
      
     <Add_Remove input={input} showInput={showInput}/>
      
    

      

    </div>
  )
}
