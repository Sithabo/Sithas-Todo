import React from 'react'
import { useRef } from 'react';

function Cover() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle('cover-page');
    }

  return (
    <div className='bg-violet-500 m-0 w-full h-full flex justify-center transition-all z-10 duration-300 left-0 flex-col fixed top-0 items-center' style={{backgroundImage: 'linear-gradient(90deg, #0f2a66, #1d2333)'}} ref={navRef}>
        <div className='flex items-center flex-wrap justify-center'>
            <box-icon name='notepad' size='lg' animation='tada' color='#ffffff' ></box-icon>
            <h1 className='text-white text-6xl text-center'>Cheesey Todo</h1>
        </div>
        <div>
        <div className='flex justify-center pt-6 pb-5'>
            <button onClick={showNavBar} className=' bg-purple-600 rounded-lg w-11/12 hover:bg-purple-800 text-white transition duration-300'>
                <div className='flex px-12  items-center justify-evenly'>
                    <h3 className='text-xl flex items-center'>
                        Welcome
                        <box-icon name='chevrons-right' animation='tada-hover' size='md' color='white'></box-icon>
                    </h3>
                </div>
                </button>
        </div>
        </div>
    </div>
  )
}

export default Cover