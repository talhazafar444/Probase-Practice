import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { viewPost } from "../../redux/actions/posts/post.actions";

const PostList = () => {
    return (
        <ul>
            {
                props.posts.map((item)
            }
        </ul>
    );
}

const viewPost = (state, ownProps) => {
    ownProps = state;
}

export default connect(viewPost)(PostList);
