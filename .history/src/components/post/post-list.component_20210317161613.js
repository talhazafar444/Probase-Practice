import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const PostList = ({ posts }) => {
    const postList = posts;
    return (
        <ul>
            {
                postList && postList.map((item) => {
                    ret <li>{item.content}</li>
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
