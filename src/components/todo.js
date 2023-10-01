import React from 'react'
import img from '../Images/about.png'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleCompletion } from '../reducers/todoSlice';

export default function Todo() {
  const todo = useSelector((state) => {return state.todo})
  const dispatch = useDispatch();

  console.log(todo);
  
  return (
    <>
      <div className='w-auto justify-items-center grid justify-center'>
        {
          todo.length ? 

              <div className='relative'>
                <div className='absolute strikethrough-actual'></div>
                <span className='text-center text-xl strikethrough'>Unfinished Todo's</span>
              </div> : 
          
              <img src={img} className='w-72 h-72'></img>
        }
        
        {
          todo.map(
          (todos)=> {
              if (!todos.completed) {
                return (
                  <div key={todos.id} className='flex w-72 sm:w-96  justify-center border-solid border-orange-300 relative transition-all' style={{backgroundColor: todos.completed ? '#4fc888' : 'antiquewhite', border: '2px solid #c1ad93', opacity: todos.completed ? 0.4 : 1}} >
                      <div onClick={()=>{dispatch(toggleCompletion(todos))}}>
                          <div className='cursor-pointer text-black flex justify-center' style={{textDecoration: todos.completed ? 'line-through' : 'none'}}>
                              <div><h2 className='mr-2 font-bold text-left'>TODO: </h2></div>
                              <div><p>{todos.name}</p></div>
                          </div>
                          <div className='text-black flex justify-center'>
                              <h2 className='mr-2 font-bold text-left'>NOTES: </h2>
                              <p>{todos.notes}</p>
                          </div>
                      </div>
                      <div style={{right: -5, top: -5}} className='absolute z-10'>
                          <button className='text-black' onClick={()=>{dispatch(removeTodo(todos))}} id='delete'>X</button>
                      </div>
                  </div>
                )
              }
          }
        )}
      </div>
      <div className='text-center flex justify-center flex-col items-center'>
          {
              todo.length ? <div className='relative'>
                <div className='absolute strikethrough-actual'></div>
                <span className='text-xl strikethrough'>Finished Todo' s</span>
              </div> : ''
          }
          {
            todo.map(
              (todos)=> {
                if (todos.completed) {
                  return (
                    <div key={todos.id} className='flex w-72 sm:w-96 justify-center border-solid border-orange-300 relative transition-all' style={{backgroundColor: todos.completed ? '#4fc888' : 'antiquewhite', border: '2px solid #c1ad93', opacity: todos.completed ? 0.4 : 1}} >
                        <div>
                            <span className='cursor-pointer' style={{textDecoration: todos.completed ? 'line-through' : 'none'}} onClick={()=>{dispatch(toggleCompletion(todos))}}>{todos.name}</span>
                        </div>
                        <div style={{right: -5, top: -5}} className='absolute z-10'>
                            <button onClick={()=>{dispatch(removeTodo(todos))}} id='delete'>X</button>
                        </div>
                    </div>
                  )
                }
              }
            )
          }
      </div>
    </>
  )
}
