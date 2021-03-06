import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

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
            <nav>
            <form onSubmit={(e)=>this.props.handleSubmit(e, this.state)}>
                
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange}
                 />
                 <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input
                 type="submit"
                 value="Sign Up"
                 />
            </form>
        </nav>
        )
    }
}

export default Signup;