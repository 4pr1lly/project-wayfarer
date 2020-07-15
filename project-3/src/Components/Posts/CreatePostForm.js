import React, { Component } from 'react';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 
    render() {
        return (
            <form className="post-form" onSubmit={(e) => this.props.handleSubmit(e, this.state, this.props.cityId)}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Post Something..."
                    onChange={this.handleChange}
                />
                <br></br>
                <br></br>
                <input className="post-submit"
                    type="submit"
                    value="Submit Post"
                />
            </form>
        )
    }
}

export default CreatePostForm;