import React from 'react';

const API = "http://taskmaster-dev-2.us-west-2.elasticbeanstalk.com/"
// const API =   "http://localhost:5000";

class AddTask extends React.Component{
  render(){
    return(
      <form action={API + "/tasks"} method="post" encType="multipart/form-data">
        <input type="text" name="title" placeholder="Title"></input>
        <input type="text" name="description" placeholder="Description"></input>
        <input type="text" name="status" placeholder="Status"></input>
        <input type="text" name="assignee" placeholder="Assignee"></input>
        <input type="file" name="pic"></input>
        <input type="submit" name="submit"></input>
      </form>
    )
  }
}

export default AddTask;