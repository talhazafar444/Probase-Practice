import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const PostList = ({ posts }) => {
    const postList = posts;
    return (
        <ul>
            {
                postList && postList.map((item) => {
                    return <li>{item.content} </li>;
                })
            }
        </ul>
    );
}

const getPostList = state => {
    this.state.
};

export default connect(getPostList)(PostList);
