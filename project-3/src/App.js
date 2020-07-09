import React, { Component} from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import {registerUser, loginUser, verifyUser} from './services/api_helper';
// import PostContainer from './Components/Posts/PostContainer';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      currentUser: null

    }
  }

  

  render() {
  return (
    <div className="App">
      <div>
      <Login/>
      <Signup/>
      </div>
      
    </div>
    );
  }
}

export default App;
