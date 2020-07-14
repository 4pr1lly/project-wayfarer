import React, {Component} from 'react';

class EditProfile extends Component {
    constructor(props){
        super(props);

        this.state= {
            name: "",
            image_url:"",
            username:"",
            
        
        }
    }
    
    handleChange=(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={(e)=>this.props.updatePost(e, this.props.postId, this.state)}>
            <input 
                type="text"
                name="name"
                placeholder="name"
                onChange={this.handleChange}/>
            <input
                type="text"
                name="image_url"
                placeholder="profile image"
                onChange={this.handleChange}/>
            <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}/>
           
            <input 
                type="submit"
                value="submit profile changes"/>

        </form>

        )
    }
}

export default EditProfile;