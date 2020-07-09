import React, { Component} from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import { Link } from 'react-router-dom';
import Profile from './Components/Profile';

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
      <nav>
        <div>
          <img src= "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= "travel"/>
          <h1>Wayfarer</h1>
          <Login/>
          <Signup/>
        </div>
      </nav>
      <div>
        <Profile/>
      </div>
      
    </div>
    );
  }
}

export default Apppp;
