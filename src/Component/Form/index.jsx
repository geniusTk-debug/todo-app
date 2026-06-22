import './index.css';
export default function Form() {
  return (
    <div className='form-container'>
      <h1>To Do App</h1>
      <form className='form'>
        <input
         type='text'
          placeholder='What you need to do today?'
           className='input'>
        </input>
      </form>

    </div>
  )
}
