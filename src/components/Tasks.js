import React,{useState} from 'react'
import TaskItem from './TaskItem'
import './Tasks.css'

function Tasks({tasks,handleOnClickCheckbox,handleDeleteButton,handleSaveButton}) {
        const renderedList = tasks.map((item)=>{
            return <div key={item}><TaskItem task={item} 
            
            handleDeleteButton={handleDeleteButton} 
            handleOnClickCheckbox={handleOnClickCheckbox}
            handleSaveButton={handleSaveButton}
            />
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
