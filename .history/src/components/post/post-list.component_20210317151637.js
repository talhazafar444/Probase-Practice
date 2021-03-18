import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { viewPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../shared/error.messages";

const PostList = () => {
    const { register, handleSubmit, errors, formState } = useForm({ mode: 'onChange' });
    const onSubmit = data => {
        addPost(data.content);
    };
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <ul
    );
}

export default connect(null, { viewPost })(PostList);
