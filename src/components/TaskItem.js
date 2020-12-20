import React,{useState} from 'react'
import './TaskItem.css'

function TaskItem(props) {

    const {task,handleOnClickCheckbox,handleDeleteButton}= props    
    const [term,setTerm] = useState('')
    const [edit,setEdit]= useState(false)

    const handleEditBtn=(task)=>{
        
        setEdit(true)
    }
    

    return (
        <div className="ui segment taskitem-bdy">
                <div className="ui checkbox"> 
             { edit ?
              <input type="text" value={task}/> 
              : <div>
                   <input type="checkbox" checked={false} onChange={()=>handleOnClickCheckbox(task)}/>
                    <label>{task}</label>
                    </div> }
                </div>
                
                <div>
             
                {edit ? <button onClick={()=>handleEditBtn(task)}
                className="ui button">
                    <i className="save icon"></i>
                </button> :<button onClick={()=>handleEditBtn(task)}
                className="ui button">
                    <i className="edit icon"></i>
                </button>}
                <button  onClick={()=>handleDeleteButton(task)}
                         className="ui button">
                    <i className="trash icon"></i>
                </button></div>
        </div>
    )
}

export default TaskItem
