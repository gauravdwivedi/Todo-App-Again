import {
        
        ADD_TODO,
        DELETE_TODO,
        SAVE_TODO,
        EDIT_TODO 

        } from './types';



export const createTodo=(title,id)=>{

    return  {
                type:ADD_TODO,
                title,
                id

            }
        }

export const deleteTodo=(id)=>{

    return {
                type:DELETE_TODO,
                id
            }
        }

export const editTodo =(id,title)=>{
    
}

