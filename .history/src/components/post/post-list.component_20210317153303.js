import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const PostList = ({ posts }) => {
    return (
        <ul>
            {
                posts.map((item) => {
                    <li>{item.content}</li>
                })
            }
        </ul>
    );
}

const getPostList = state => {
    const { posts } = state;
    return { posts };
};

export default connect(getPostList)(PostList);
