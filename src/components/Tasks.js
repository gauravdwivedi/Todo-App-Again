import React from 'react'
import TaskItem from './TaskItem'

import { connect } from 'react-redux';



import './Tasks.css'

function Tasks(props) {
   
   console.log(props);

    return (
        <div className="tasks-body">
            <label>Todo Items</label>
            {props.todos.map((item)=>(
             <div key={item.id}><TaskItem task={item} />
                </div>)
            )}
        </div>
    )
}

const mapStateToProps =(state)=>({
    todos: state.todos.data
})



export default connect(mapStateToProps)(Tasks);
