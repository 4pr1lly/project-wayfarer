import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import { getCityPost } from '../../services/api_helper'


class SingleCity extends Component {
    constructor(props) {
        super(props)

        this.state= {
            posts: []
        }
    }

    async componentDidMount(){
        const post = await getCityPost(this.props.cityId)
        console.log(post)
        this.setState({
            posts: post
        })
    }

    render () {
       const foundCity = this.props.cities.filter(city => {
            return city.id === parseInt(this.props.cityId)
        })
    return (
        <div>
            {foundCity[0] && 
            <div><h3>{foundCity[0].name}</h3>
            <img src={foundCity[0].img} alt="place"/>
            </div>
            }
            <Link to="/posts/new">New Post</Link>
            <CreatePostForm 
                handleSubmit={this.props.handleSubmit}
                cityId={this.props.cityId}
                />
            <PostList posts={this.state.posts} />
        </div>
    )
}

}

export default SingleCity;