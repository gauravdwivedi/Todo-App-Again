import React,{useState,useEffect} from 'react'

import { connect } from 'react-redux';
import { deleteTodo } from  '../actions';

import './TaskItem.css'

function TaskItem(props) {

    const task= props.task.title;
    const id = props.task.id;
    
    const [term,setTerm] = useState('')
    const [edit,setEdit]= useState(false)

    const handleDeleteButton=()=>{
        props.deleteTodo(id)
    }

    const handleEditBtn=(task)=>{
        
        setEdit(!edit)
    }

    useEffect(()=>{
        setTerm(task)
       
    },[task])
    
    const  handleSave=()=>{
        
        // handleSaveButton(term,task)
        setTerm('')
        setEdit(!edit)
      
    
    }


    return (
        <div className="ui segment taskitem-bdy">
                <div className="ui checkbox"> 
             { edit ?
              <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/> 
              : <div>
                   <input type="checkbox" checked={false} onChange={()=>console.log("CheckBox Cliked")}/>
                    <label>{task}</label>
                    </div> }
                </div>
                
                <div>
             
                {edit ? <button onClick={()=>handleSave(task)}
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


export default connect(null,{deleteTodo})(TaskItem)
