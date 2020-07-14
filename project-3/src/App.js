import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import LoginModal from './Modal/LoginModal';
import Profile from './Components/Profile'; 
import City from './Components/Posts/City'; 
import PostContainer from './Components/Posts/PostContainer';
import {signupUser, loginUser, verifyUser} from './services/api_helper';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUser: null,
      loggedIn: false,
      isShowing: false
    }
  }

// openModalHandler = () => {
//     this.setState({
//         isShowing: true
//     });
// }

// closeModalHandler = () => {
//     this.setState({
//         isShowing: false
//     });
// }



  handleSignup = async (e, user) => {
     e.preventDefault();
    const loadedUser = await signupUser(user);
    console.log(loadedUser)
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push("/city")
  }

  handleLogin = async (e, user) => {
    console.log(user)
    e.preventDefault();
    const loadedUser = await loginUser(user);
    console.log(loadedUser)
    this.setState({
      currentUser: loadedUser
    })
    this.props.history.push("/city")
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
  }

  handleProfile = () => {
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
          {/* <Link to="/"><img src= "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= "travel"/> </Link> */}
          <Link to="/"><h1 className="wayfarer-heading">Wayfarer</h1></Link>
          {this.state.currentUser && <h3>Welcome: {this.state.currentUser.username}</h3>}
          {this.state.currentUser ? <button onClick={this.handleLogout}>Logout</button> : (
          
          <div>
            <ul className="navbar-right">
              <li className="nav-item1">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="nav-item2">
                <Link to="/login">Login</Link>
                
              </li>
              <li className="nav-item3">
              <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          
        )}
        </div>
        </div>
      </nav>
      </header>
      <div className="img-home">
        <img src="https://www.pxwall.com/wp-content/uploads/2018/08/Wallpaper%20Niagara%20Falls,%20Waterfall,%207K,%20Travel%207369715415.jpg"/>
      </div>
   
      {/* <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <LoginModal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </LoginModal>
      </div> */}
      
      
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
           <div className="topic-container">
            <div className="jumbotron">
                <h2 className="header">Wayfarer</h2>
                <main className="topics">
                  <div>
                    <h3 className="topic">San Francisco</h3>
                    <p className="topic-col">
                      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
                    </p>
                  </div>
                  <div>
                    <h3 className="topic">New York</h3>
                    <p className="topic-col">
                      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
                    </p>
                  </div>
                  <div>
                    <h3 className="topic">Sydney</h3>
                    <p className="topic-col">
                      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
                    </p>
                  </div>
                </main>
            </div>
      </div>
        
    </div>
    );
    
  }
}
export default withRouter (App);