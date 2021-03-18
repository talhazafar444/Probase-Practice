import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { postList, viewPost } from "../../redux/actions/posts/post.actions";

const PostList = () => {
    return (
        <ul>
            {
                props.posts.map((item) => {
                    <li>{item.content}</li>
                })
            }
        </ul>
    );
}

const postList = state => {
    const todos = postList(state, visibilityFilter);
    return { state };
};

export default connect(postList)(PostList);
