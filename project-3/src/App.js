import React, { Component } from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import { Link } from 'react-router-dom';
// import Profile from './Components/Profile';
import {signupUser, loginUser, verifyUser} from './services/api_helper';
// import PostContainer from './Components/Posts/PostContainer';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUser: null
    }
  }
  handleSignup = async (e, user) => {
    e.preventDefault();
    const loadedUser = await signupUser(user);
    this.setState({

      currentUser: loadedUser
    })
  }
  handleLogin = async (e, user) => {
    console.log(user)
    e.preventDefault();
    const loadedUser = await loginUser(user);
    console.log(loadedUser)
    this.setState({

      currentUser: loadedUser
    })
  }
  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }
  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser: currentUser
      })
    }
  }

  

  render() {
    console.log(this.state.currentUser)
  return (
    <div className="App">
      <nav>
        <div>
          <img src= "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= "travel"/>
          <h1>Wayfarer</h1>
          {this.state.currentUser && <h3>Welcome: {this.state.currentUser.username}</h3>}
          {this.state.currentUser ? <button onClick={this.handleLogout}>Logout</button> : (
          <div>
            <Signup handleSubmit={this.handleSignup}/>
            <Login handleSubmit={this.handleLogin}/>
          </div>
        )}
        </div>
      </nav>
      <div>
        {/* <Profile/> */}
      </div>
    </div>
    );
  }
}
export default App;