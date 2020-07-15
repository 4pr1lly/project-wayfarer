import React, { Component } from 'react';
import "./login.css";


class Login extends Component {
    constructor(props){
        super(props);

        this.state ={
            username:"",
            password:"",
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div className="login-container">
                <p className="login-prompt">Please Log Into Your Account</p>
             <form className="login-form" onSubmit={(e)=>this.props.handleSubmit(e, this.state)}>
            
                 <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                 />
                 <br></br>
                 <br></br>
                 <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <input className="login-submit"
                 type="submit"
                 value="Login"
                 />
            </form>
            <img className="login-img" src="https://www.4kwallpaperhd.com/wp-content/uploads/2018/03/High-Quality-Vietnam-Waterfalls-Wallpaper-3840x2160.jpg" />
            </div>
        )
    }
}
export default Login;