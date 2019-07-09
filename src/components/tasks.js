import React, {useState, useEffect} from 'react';
import AddImage from './addImage';

const API = "http://taskmaster-dev-2.us-west-2.elasticbeanstalk.com/"
// const API =   "http://localhost:5000";

function Tasks(){

  const [tasks, setTasks] = useState([])

  const _getTasks = () => {
    fetch( API + "/tasks", { mode : 'cors'})
    .then(data => data.json())
    .then(task => setTasks(task))
    .catch(console.error);
  }

  useEffect(_getTasks, []);

  return (
    <>
    <table>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assignee</th>
          <th>Status</th>
        </tr>
        {tasks.map( (task) => 
          <tr id="task" key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.assignee}</td>
            <td>{task.status}</td>
            <td><AddImage id={task.id}/></td>
          </tr>
          )}
      </tbody>
    </table>
    
    </>
  );
}

export default Tasks;