import React,{useState,useEffect} from 'react'
import Tasks from './Tasks'
import Completed from './Completed'
import './App.css'
export default function App() {

    const [tasks,setTasks]= useState([])
    const [task,setTask]= useState('')
    const [completedTasks,setCompletedTasks]=useState([])

    const  handleOnSubmit=(e)=>{
        e.preventDefault();
            setTasks([...tasks,task])
            setTask('')
        }
    
        const handleDeleteButton=(task)=>{
            
            let newList = tasks.filter(item=>item!==task)
            setTasks(newList)
        }


        const handleCompletedDeleteButton=(task)=>{

            let newList = completedTasks.filter(item=>item!==task)
            setCompletedTasks(newList)
        }

        const handleSaveButton=(term,task)=>{
            console.log('save edit',term)

            let indexOfTask = tasks.indexOf(task)
            let newList = tasks
            newList[indexOfTask]=term
            console.log(newList)
            setTasks(newList)
        }
       
        const handleOnClickCheckbox=(task)=>{
                setCompletedTasks([...completedTasks,task])

                let newTasks = tasks.filter(item=>item!==task)
                console.log(newTasks)
                setTasks(newTasks)
        }

        

    return (
        <div>
            <form onSubmit={(e)=>handleOnSubmit(e)} className="ui fluid segment action input">
                <input onChange={(e)=>setTask(e.target.value)} value={task} type="text" placeholder="Enter Todo" />
                <button className="button ui"><i className="save icon"></i></button>
            </form>
            <div className="ui segement app-bdy">
                 <Tasks
                  tasks={tasks} 
                  handleOnClickCheckbox={handleOnClickCheckbox} 
                  handleDeleteButton={handleDeleteButton}
                  handleSaveButton={handleSaveButton}
                  />
                 <Completed handleDeleteButton={handleCompletedDeleteButton} tasks={completedTasks} handleOnClickCheckbox={handleOnClickCheckbox}/>
               </div> 
        </div>
    )
}
