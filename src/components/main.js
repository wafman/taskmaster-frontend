import React from 'react';
import Tasks from './tasks.js'
import AddTask from './addTask.js';

class Main extends React.Component{
  render(){
    return(
      <>
        <AddTask />
        <Tasks />
      </>
    )
  }
}

export default Main;