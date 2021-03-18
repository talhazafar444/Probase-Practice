import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { POST_LIST } from "../../redux/constants";

const PostList = (props) => {
    const { posts } = props;
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

const getPostList = state => ({
    type: POST_LIST
});

export default connect(getPostList)(PostList);
