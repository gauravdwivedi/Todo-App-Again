import _ from 'lodash';
import {ADD_TODO, DELETE_TODO} from '../actions/types';
const initialState = {
    data:[],
}

export default (state=initialState,action)=>{

    switch(action.type){

           case ADD_TODO:
               //TODO: This is how we create objects inside Array in reducer
               return {
                   ...state,
                   data:[
                       ...state.data,
                       {
                           title:action.title,
                           id:action.id
                       }
                   ]
               }
            
            case DELETE_TODO:
               const todo = state.data.filter((todo)=>todo.id!==action.id);

                return {
                    ...state,
                    data:todo
                } 
            
               default:
                   return state;
    }
   

}