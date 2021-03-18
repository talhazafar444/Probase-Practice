import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const PostList = ({ posts }) => {
    return (
        <ul>
            {
                posts && posts.map((item) => {
                    <li>{item.content}</li>
                })
            }
        </ul>
    );
}

const getPostList = state => {
    return {
        posts: state.postReducer.posts
    };
};

export default connect(getPostList)(PostList);
