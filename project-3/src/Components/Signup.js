import React, { Component } from 'react';

class Signup extends Component {
    constructor(props){
        super(props)

        this.state= {
            username: "",
            password: ""
        }
    }

    // handleChange=(e)=> {
    //     this.setState({
    //         //e target below allows user to enter in string info
    //         [e.target.name]:e.target.value
    //     })
    // }

    render() {
        return (
            //(e) is a trick that holds javascript from running code until the button is clicked
            <form onSubmit={(e)=>this.props.handleSubmit(e, this.state)}>
                <h2>Signup now!
                </h2>
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
                 value="Register"
                 />
            </form>

        )
    }
}

export default Signup;