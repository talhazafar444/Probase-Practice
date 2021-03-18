import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const PostList = ({ posts }) => {
    const postList = posts;
    return (
        <ul>
            {
                posts && posts.map((item) => {
                    return <li>{item.content} </li>;
                })
            }
        </ul>
    );
}

const getPostList = state => {
    return {
        posts: state.postReducer.postList()
    };
};

export default connect(getPostList)(PostList);
