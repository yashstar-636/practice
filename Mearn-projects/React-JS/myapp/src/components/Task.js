import React from 'react'

const Task = ({title,description,deletetask,index})=> {



  return (
    <div className='task'>
        <div>
            <p>
                {title}
            </p>
            <span>
                {description}
            </span>
        </div>
        <button onClick={()=> deletetask(index)}>-</button>
    </div>
  )
};

export default Task