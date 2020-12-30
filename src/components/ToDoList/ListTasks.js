import React from 'react';
import Task from './Task.js';
import uuid from 'react-uuid'
const ListTasks = ({tasks}) =>{
  return(
    <ul>
      {
        tasks.map( task => <li key = {uuid()}><Task task = {task.name}/></li>)
      }
    </ul>
  )
}
export default ListTasks;
