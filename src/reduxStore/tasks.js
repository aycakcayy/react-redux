
import React from 'react';
import {v4 as uuidv4} from  "uuid";

//action types
const ADD_TASK ="ADD_TASK";
const REMOVE_TASK="REMOVE_TASK";

//action creators
 export const addTask=(title)=>({
    type: ADD_TASK,
    payload: {id: uuidv4(), title}
})

export const removeTask=(id)=>({
    type: REMOVE_TASK,
    payload: id
})

//reducer
const tasksReducer=(tasks =[], action) =>{
    switch (action.type){
        case ADD_TASK:
            return [action.payload, ...tasks];
            case REMOVE_TASK:
                return tasks.filter((item)=> item.id !== action.payload);
            default:
                return tasks;
                
                
    }
};


export default tasksReducer;
