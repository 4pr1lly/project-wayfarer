import React, { Component } from 'react';
import "./signup.css";


class Signup extends Component {
    constructor(props){
        super(props)

        this.state= {
            username: "",
            password: ""
        }
    }

    handleChange=(e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <div className="signup-container">
                <p className="signup-prompt">Please Create An Account</p>
            <form className="signup-form" onSubmit={(e)=>this.props.handleSubmit(e, this.state)}>
                
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
                <input className="signup-submit"
                 type="submit"
                 value="Sign-Up"
                 />
            </form>
            <img className="signup-img" src="https://i.pinimg.com/originals/f9/8e/55/f98e55b976714b95b9799c01d9d94f18.jpg" />
            </div>
        )
    }
}

export default Signup;