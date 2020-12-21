import React,{useState,useEffect} from 'react'
import TaskItem from './TaskItem'
import './Tasks.css'

function Tasks({tasks,handleOnClickCheckbox,handleDeleteButton,handleSaveButton}) {
   
   

    console.log('Inside tasks.js',tasks)
    return (
        <div className="tasks-body">
            <label>Todo Items</label>
            {tasks.map((item)=>(
             <div key={item}><TaskItem task={item} 
            
            handleDeleteButton={handleDeleteButton} 
            handleOnClickCheckbox={handleOnClickCheckbox}
            handleSaveButton={handleSaveButton}
            />
                </div>)
            )}
        </div>
    )
}

export default Tasks
