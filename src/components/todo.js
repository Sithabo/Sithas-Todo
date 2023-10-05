import React from 'react'
import 'boxicons'
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
          todo.length ? '': 
          
              <img src={img} alt='todo app' className='w-72 h-72'></img>
        }
        {
          todo.map(
            (todos)=> {
                if (!todos.completed) {
                    return (
                      <div key={todos.id} className='flex w-72 sm:w-[500px] rounded-xl justify-center border-solid border-orange-300 relative transition-all' style={{backgroundColor: 'rgb(13 24 24 / 66%)', border: '2px solid aliceblue'}} >
                          <div onClick={()=>{dispatch(toggleCompletion(todos))}} className='flex justify-center flex-wrap items-center'>
                              <div className='cursor-pointer text-black m-0 flex justify-center'>
                                  <div>
                                    <h1 className='mr-2 text-teal-100 text-left'>{todos.name}</h1>
                                  </div>
                              </div>
                              <div className=' flex justify-center'>
                                  <p className='mr-2 text-left'>{todos.notes}</p>
                              </div>
                          </div>
                          <div className='absolute right-[-10px] top-[-10px] z-10'>
                              <button onClick={()=>{dispatch(removeTodo(todos))}} id='delete'>
                                <box-icon name='x' color='white'></box-icon>
                              </button>
                          </div>
                      </div>
                    )
                }
            }
        )}
      </div>
      <div className='text-center flex justify-center flex-col items-center'>
          {
            todo.map(
              (todos)=> {
                if (todos.completed) {
                  return (
                    <div key={todos.id} className='flex w-72 sm:w-[500px] rounded-lg justify-center border-solid border-orange-300 relative transition-all' style={{backgroundColor: todos.completed ? '#4fc888' : 'antiquewhite', border: '2px solid #c1ad93', opacity: todos.completed ? 0.6 : 1}} >
                        <div>
                            <span className='cursor-pointer' style={{textDecoration: todos.completed ? 'line-through' : 'none'}} onClick={()=>{dispatch(toggleCompletion(todos))}}>{todos.name}</span>
                        </div>
                        <div className='absolute right-[-10px] top-[-10px] z-10'>
                          <button className='text-black' onClick={()=>{dispatch(removeTodo(todos))}} id='delete'>
                            <box-icon name='x' color='white'></box-icon>
                          </button>
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
