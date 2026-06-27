
import TaskCounter from '../TaskCounter';
import './index.css';
export default function AddRemove({input, showInput, plans}) {
  
    const addHandler = () => {
       
        if(input){
            showInput(false)
        }
        else{
            showInput(true)
         }
    }
  
  return (
    <div className='add-remove-component'>

        <button
         className='add-btn'
          onClick={addHandler}>

           <i className="fa-solid fa-plus i-add" style={
                {
                    display: input ? 'none' : 'block'
                }
            }></i>
            <i className="fa-solid fa-check i-add" style={
                {
                    display: input ? 'block' : 'none'
                }
            }></i>
        </button>
       <TaskCounter plans={plans}/>

    </div>
  )
}
