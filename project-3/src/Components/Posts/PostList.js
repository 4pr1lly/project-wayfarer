import React from 'react';
import { Link } from 'react-router-dom';
import './postlist.css';

function PostList(props) {
    return (
        <div className="post-container">
            {props.posts.map(post => {
                return <Link to={`/posts/${post.id}`}>
                    <h3 className="post-titles">{post.title}</h3></Link>
                    {/* <p className="post-body">{post.body}</p></Link> */}
                })}
        </div>
    )
}

export default PostList;