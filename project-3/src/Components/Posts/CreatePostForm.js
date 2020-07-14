//deleting and editing posts will need authorization
import React, { Component } from 'react';
import City from './City';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            image_url: '',
            description: '',
            posts:'',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

   

 
    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state, this.props.cityId)}>
                  {/* <City/> */}
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="image_url"
                    placeholder="Image"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="Submit Post"
                />
            </form>
        )
    }
}  

export default CreatePostForm;