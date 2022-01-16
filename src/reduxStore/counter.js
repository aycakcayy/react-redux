import React from 'react';
//Action types
const INCREMENT="INCREMENT";
const DECREMENT="DECREMENT";

//action creators
export const increment=(value=1) =>({
    type:INCREMENT,
    payload:value,
});

export const decrement=(value=1) =>({
    type:DECREMENT,
    payload:value,
});


//Reducer
const counterReducer = (counter = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return counter + action.payload;
      case DECREMENT:
        return counter - action.payload;
      default:
        return counter;
    }
  };
  
  export default counterReducer;