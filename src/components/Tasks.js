import React from 'react'
import TaskItem from './TaskItem'
import './Tasks.css'

function Tasks({tasks,handleOnClickCheckbox,handleDeleteButton}) {
        const renderedList = tasks.map((item)=>{
            return <div><TaskItem task={item} handleDeleteButton={handleDeleteButton} handleOnClickCheckbox={handleOnClickCheckbox}/>
                </div>
                
        })
    console.log(tasks)
    return (
        <div className="tasks-body">
            <label>Todo Items</label>
            {renderedList}
        </div>
    )
}

export default Tasks
