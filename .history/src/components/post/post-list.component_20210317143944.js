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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="content" placeholder="Enter Post Content here!" ref={register({ required: true, pattern: emailRegex })} />
            <ErrorMessage type={errors.content?.type} patternType={'email'} />
            <input disabled={!formState.isValid} type="submit" />
        </form>
    );
}

export default connect(null, { viewPost })(PostList);
