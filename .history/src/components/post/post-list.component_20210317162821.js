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
   ret state.postList()
};

export default connect(getPostList)(PostList);
