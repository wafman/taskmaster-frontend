import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './app.scss';

// const API = "http://taskmaster-dev-2.us-west-2.elasticbeanstalk.com/tasks";
const API =   "http://localhost:5000";

function Tasks(){

  const [tasks, setTasks] = useState([])

  const _getTasks = () => {
    fetch( API, { mode : 'cors'})
    .then(data => data.json())
    .then(task => setTasks(task))
    .catch(console.error);
  }

  useEffect(_getTasks, []);

  return (
    <>
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Assignee</th>
        <th>Status</th>
      </tr>
      {tasks.map( (task) => 
        <tr>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.assignee}</td>
          <td>{task.status}</td>
        </tr>
        )}
    </table>
    </>
  );
}

// function AssigneeTasks(props) {
//   let tasks = props.tasks || [];
//   return (
//     <section>
//       {tasks.map()}
//     </section>
//   )
// }

function App() {
  return (
    <>
      <header>TaskMaster</header>
      <main>
        <Tasks />
      </main>
      <footer>Another Production By: William Fritts</footer>
    </>
  );
}

export default App;
