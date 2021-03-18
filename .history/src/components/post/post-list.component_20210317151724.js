import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { viewPost } from "../../redux/actions/posts/post.actions";

const PostList = () => {
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <ul>
            {

            }
        </ul>
    );
}

export default connect(viewPost)(PostList);
