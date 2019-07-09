import React from 'react';

const API = `http://taskmaster-dev-2.us-west-2.elasticbeanstalk.com/`;

class AddTask extends React.Component{
  render(){
    return(
      <form action={API} method="post" encType="multipart/form-data">
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