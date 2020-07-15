import React, {Component} from 'react';

class UpdatePostForm extends Component {
    constructor(props){
        super(props);

        this.state ={
            title: "",
            description:"",
            
        }
    }

    handleChange=(e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    


    render() {
        return (
            <form onSubmit={(e)=>this.props.handleSubmit(e, this.state)}>
                
                <input 
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={this.handleChange}/>
                <input
                    type="text"
                    name="description"
                    placeholder="decription"
                    onChange={this.handleChange}/>
               
                <input 
                    type="submit"
                    value="submit post"/>

            </form>


        )
    }
}

export default UpdatePostForm;