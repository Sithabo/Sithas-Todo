import { useState } from 'react';
import './App.css'
import Todo from './components/todo';
import { useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';
import Cover from './components/cover';
import { inject } from '@vercel/analytics';


function App() {
  inject();
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
          <Cover />
          <h1 className='text-center font-bold text-7xl mb-6'>TODO LIST</h1>

          <img src='https://drive.google.com/uc?id=1LdkxkglvWzWmkXRo_HrT5lcj3EP9D30v' alt='berserk img'/>

          <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
            <input style={{backgroundColor: '#008b8ba8'}} required type='text' value={name} placeholder='Enter Todo' onChange={handleChange} className='border-2 h-12 text-sm p-4 mb-2 rounded-md text-[aliceblue]' />
            <textarea style={{backgroundColor: '#008b8ba8'}} rows='5' cols='40' value={note} placeholder='Enter Notes' onChange={handleNote} className='border-2 h-20 text-sm p-4 mb-2 rounded-md text-[aliceblue]'/>
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
