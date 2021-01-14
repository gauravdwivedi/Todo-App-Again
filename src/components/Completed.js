import React from 'react'
import CompletedTaskItem from './CompletedTaskItem'
import './Completed.css'

function Completed(props) {
    const tasks=props.tasks
    console.log('completedtasks',tasks)
    const renderedList = tasks.map((task)=>{
        return <div key={task}>
                <CompletedTaskItem 
                    task={task}
                    handleDeleteButton={props.handleDeleteButton}
                    handleOnClickCheckbox={props.handleOnClickCheckbox}/>
                    </div>
                })

    return (
        <div className="completed-body">
            <label>Completed Tasks</label>
            {renderedList}
        </div>
    )
}

export default Completed
