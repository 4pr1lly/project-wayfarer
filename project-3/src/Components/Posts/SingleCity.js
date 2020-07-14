import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import { getCityPost } from '../../services/api_helper'
import SinglePost from './SinglePost';



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




        // handleSubmit = (event) => {
        //     event.preventDefault();
        //     const posts = this.state.posts;
        //     posts.push(this.state.postsText);
            
        //     this.setState({
        //         posts:'',
        //         postsText: ''
        //     })
        // }



    return (
        <div>
            {foundCity[0] && 
            <div><h3>{foundCity[0].name}</h3>
            <img src={foundCity[0].img} alt="place"/>
            </div>
            }
            {this.state.posts && <Link to="posts/new">Create new post></Link>}
            
            <Link to="/posts/new">see all posts</Link>
            <CreatePostForm 
                handleSubmit={this.props.handleSubmit}
                cityId={this.props.cityId}
                />
            <PostList posts={this.state.posts} />
            <SinglePost posts ={this.state.posts}/>
        </div>
    )
}

}

export default SingleCity;