import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile'; 
import City from './Components/Posts/City'; 
import PostContainer from './Components/Posts/PostContainer';
import {signupUser, loginUser, verifyUser} from './services/api_helper';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUser: null,
    }
  }

  handleSignup = async (e, user) => {
     e.preventDefault();
    const loadedUser = await signupUser(user);
    console.log(loadedUser)
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push("/profile")
  }

  handleLogin = async (e, user) => {
    console.log(user)
    e.preventDefault();
    const loadedUser = await loginUser(user);
    console.log(loadedUser)
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push("/profile")
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

  handleChange=(e)=> {
    this.setState({
        [e.target.name]:e.target.value
    })
}

  render() {
  return (
    <div className="App">
      <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
          <Link to="/"><h1 className="wayfarer-heading">Wayfarer</h1></Link>
          <Link to="/profile">
          {this.state.currentUser && <h3 className="nav-item3">Profile</h3>}</Link>
          {this.state.currentUser ?
          <a className="nav-item4" href="#" onClick={this.handleLogout}>Logout</a>
          : (
          <div>
            <ul className="navbar-right">
              <li className="nav-item1">
                <Link to="/signup">Create Account</Link>
              </li>
              <li className="nav-item2">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
        </div>
        </div>
      </nav>
      </header>
      <Route exact path="/" render={() => {
        return <Home />
      }} />      
      <Route path="/profile" render={() => {
        return <Profile currentUser={this.state.currentUser}/>
      }} />
      <Route path="/city" render={() => {
        return <City />
      }}/>
      <Route path="/signup" render={() => {
        return <Signup handleSubmit={this.handleSignup}/>
      }} />
      <Route path="/login" render={() => {
        return <Login handleSubmit={this.handleLogin}/>
      }} />
      <Route path='/posts' render={() => {
        return this.state.currentUser &&
      <PostContainer />
        }} />
    </div>
    );
  }
}
export default withRouter (App);