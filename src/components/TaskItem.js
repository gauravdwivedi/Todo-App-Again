import React from 'react'
import './TaskItem.css'

function TaskItem(props) {

    const {task,handleOnClickCheckbox,handleDeleteButton}= props    

    return (
        <div className="ui segment taskitem-bdy">
                <div className="ui checkbox"> 
                <input type="checkbox" checked={false} onChange={()=>handleOnClickCheckbox(task)}/>
                    <label>{task}</label>
                </div>
                <button 
                onClick={()=>handleDeleteButton(task)}
                 className="ui button">
                   <i className="trash icon">

                </i>
                </button>
        </div>
    )
}

export default TaskItem
