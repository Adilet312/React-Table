import React, { Fragment } from 'react';

const Task = ({task}) =>{
  console.log("from task: ",task);
  return(
      <h1>{task}</h1>
  )
}
export default Task;
