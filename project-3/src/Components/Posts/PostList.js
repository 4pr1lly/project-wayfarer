//grabbing all posts by user and single post will need authorization

import React from 'react';
import { Link } from 'react-router-dom';

function PostList(props) {
    return (
        <div>
            {props.posts.map(post => {
                return <Link to={`/posts/${post.id}`}>
                    <h3>{post.title}</h3></Link>
            })}
        </div>
    )
}

export default PostList;