import React from 'react';
import { format } from 'util';

class AddTask extends React.Component{
  render(){
    return(
      <form>
        <input type="text" placeholder="Title"></input>
        <input type="text" placeholder="Description"></input>
        <input type="text" placeholder="Status"></input>
        <input type="text" placeholder="Assignee"></input>
        <input type="file"></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default AddTask;