

import './index.css';
export default function Add_Remove({input, showInput}) {
  
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

       
    </div>
  )
}
