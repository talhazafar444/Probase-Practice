import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { POST_LIST } from "../../redux/constants";

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

const getPostList = state => ({
    type: POST_LIST
});

export default connect(getPostList)(PostList);
