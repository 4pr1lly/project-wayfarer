
// this is the parent post CRUD container

import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import PostForm from './PostForm';
 import {postPost,indexPosts} from '../../services/api_helper';
import PostList from './PostList';
import SinglePost from './SinglePost';
import EditPost from './EditPost';
import axios from 'axios'


class PostContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            posts:[]
        }
    }


    async componentDidMount() {
        const topCity = await axios.get("http://localhost:3001/city/all")
        console.log(topCity.data);
        this.setState({
          cities: topCity.data
        })
      }


     createPost= async(e, postData) => {
        e.preventDefault();
        const newPost= await postPost(postData);
        const posts= this.state.posts;
        posts.push(newPost.data);

        this.setState ({
            posts: posts
        })
    }

    readAllPosts= async() =>{
        const allPosts =await indexPosts();
        this.setState({
            posts: allPosts
        })
    }




    render(){
        return (
            <div>

                {/* create post */}
                <Route path="/post" render={()=>{
                    return <PostForm handleSubmit={this.createPost}/>
                }}/>

                {/* get all posts */}
                <Route exact path="/post/all" render={()=>{
                     return <PostList posts={this.state.posts}/>
                 }}/>


                 <Route path="/posts/:id/edit" render ={(props)=>{
                    return <EditPost
                        posts={this.state.posts}
                        updatePost={this.updatePost}
                        postId={props.match.params.id}/>
                }}/>

                   {/* get posts by user */}
                <Route exact path="/post/user" render={(props)=>{
                    return <SinglePost
                        postId={props.match.params.id} 
                        posts={this.state.posts}
                        destroyPost= {this.destroyPost}/>
                }}/>
            </div>
    
            )
        }
    }

export default withRouter(PostContainer);