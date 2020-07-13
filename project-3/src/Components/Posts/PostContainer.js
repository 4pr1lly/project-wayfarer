import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { postPost, indexPosts, destroyPost, putPost } from '../../services/api_helper';
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import SinglePost from './SinglePost';
import UpdatePostForm from './UpdatePostForm';

class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.readAllPosts();
    }
    
    readAllPosts = async () => {
        const allPosts = await indexPosts();
        this.setState({
            posts: allPosts
        })
    }

    destroyPost = async (id) => {
        await destroyPost(id);
        const allPosts = this.state.posts;
        const remainingPosts = allPosts.filter(post => {
            return post.id !== id
        })
        this.setState({
            posts: remainingPosts
        })
        this.props.history.push('/posts');
    }

    updatePost = async (e, id, values) => {
        e.preventDefault();
        const updatedPost = await putPost(id, values);
        const allPosts = this.state.posts;
        const editedPosts = allPosts.map(post => {
            return post.id === parseInt(id) ? updatedPost : post
        })
        this.setState({
            post: editedPosts
        })
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div>
                <Route path="/posts/new" render={() => {
                    return <CreatePostForm handleSubmit={this.createPost} />
                }} />                
                <Route exact path="/posts/:id" render={() => {
                    return <PostList posts={this.state.posts} />
                }} />
                <Route path="/posts/:id/edit" render={(props) => {
                    return <UpdatePostForm
                                posts={this.state.posts}
                                updatePost={this.updatePost}
                                postId={props.match.params.id}
                            />
                }} />
                <Route exact path="/posts/:id" render={(props) => {
                    return <SinglePost 
                                postId={props.match.params.id} 
                                posts={this.state.posts}
                                destroyPost={this.destroyPost}
                    />
                }} />
            </div>
        )
    }    
}

export default withRouter(PostContainer);