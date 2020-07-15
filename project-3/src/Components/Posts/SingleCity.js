import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import { getCityPost } from '../../services/api_helper';
import './singlecity.css';


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
        const foundPosts = this.props.posts.filter(post => {
            return post.City.id === parseInt(this.props.cityId)
        })
        
    return (
        <div>
            {foundCity[0] && 
            <div className="single-city">
                <h3 className="city-title"><u>{foundCity[0].name}</u></h3>
                <img className="img-img" src={foundCity[0].img} alt="place"/>
                <p className="city-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            }
            <div className="post-div">
            <h2 className="post-title">Posts</h2>
            <CreatePostForm
                handleSubmit={this.props.handleSubmit}
                cityId={this.props.cityId}
            />
            <PostList posts={foundPosts}
            />
            </div>
        </div>
    )
}

}

export default SingleCity;