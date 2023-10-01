import { useState } from 'react';
import './dist/styles.css'
import Todo from './components/todo';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';

function App() {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({target}) => {
    setName(target.value)
  }

  const handleNote = ({target}) => {
    setNote(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setNote('')
  }

  return (
      <div className='body'>
          <h1 className='text-center font-bold text-7xl mb-6'>TODO LIST</h1>
          <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
            <input required type='text' value={name} placeholder='Enter Todo' onChange={handleChange} className='border-2 h-12 text-sm p-4 mb-2 text-black' />
            <textarea rows='5' cols='40' value={note} placeholder='Enter Notes' onChange={handleNote} className='border-2 h-20 text-sm p-4 mb-2 text-black'/>
            <button onClick={()=>{
              if(name !== '') {
                dispatch(addTodo({name: name, note: note}))
              }
            }} id='submit' className='border-2 border-blue-400 w-44 h-12 mt-3 hover:bg-blue-400 hover:text-white transition-all'>Submit</button>
          </form>

          <Todo />
      </div>
  )
}

export default App;
