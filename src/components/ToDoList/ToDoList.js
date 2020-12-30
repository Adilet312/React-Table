import React, { useReducer, useEffect, Fragment } from 'react';
import ListTasks from './ListTasks';
import uuid from 'react-uuid'
const style = { margin:"0 auto", width:"500px", display:"flex", flexDirection: "colum", justifyContent: "space-between"}

const taskReducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO' : {
      return  state.concat( action.task)
    }
    case 'REMOVE_TODO' : {
      return  state.concat( action.task)
    }
    case 'UPDATE_TODO' : {
      return  state.concat( action.task)
    }
    case 'TOGGLE_TODO' : {
      return  state.concat( action.task)
    }
  }
}

const ToDoList = () =>{
  const [ state, dispatch ] = useReducer(taskReducer, []);

  const addToDo = (input) =>{
    let task = input.target.previousElementSibling.value;

    const tempTask = [];
    tempTask.push({id:uuid(), name:task, completed: false})
      console.log(tempTask);
    dispatch({
      type: 'ADD_TODO',
      task: tempTask

    })
  }
  return(
      <section>
        <div class = 'add-task'>
          <input type='text' placeholder = "Add task"  />
          <input type = 'submit' value = 'Add task' onClick = {(e) => addToDo(e)}/>
        </div>
        <ListTasks tasks = {state}/>
     </section>
  )
}
export default ToDoList;
