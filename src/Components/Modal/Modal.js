import React from 'react'

const Modal = ({open,set}) => {
    console.log(open)
  return (
    <div 
        onClick={()=>set(false)} 
        className={ `${open? 'inline-flex':'hidden'} fixed w-full z-30 bg-black bg-opacity-70 flex h-screen justify-center items-center`}
        >
        
        <div className='bg-white rounded-lg w-1/4 h-1/4 p-10 flex flex-col items-center justify-around' onClick={(e)=>e.stopPropagation()}>
            <p className='font-semibold flex flex-wrap text-center'>This is a demo project, full functiality avaible in complete project</p>
            <button onClick={()=>set(false)} className='px-6 py-1 bg-amazonblue-light text-white active:bg-amazonblue-dark hover:bg-amazonblue-dark rounded-lg mt-5'>Close</button>
        </div>
    </div>
  )
}

export default Modal