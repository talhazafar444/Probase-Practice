import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";
import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

const AddPost = () => {
    const { isValid, setFormValid } = useState(false);
    useEffect(() => {
        setFormValid(formState.isValid);
    }, [formState])
    const { register, handleSubmit, errors, formState } = useForm();

    const onSubmit = data => console.log(data);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="content" placeholder="Enter Post Content here!" ref={register({ required: true, pattern: emailRegex })} />
            {errors.content?.type === "required" && REQUIRED_MESSAGE}
            {errors.content?.type === "pattern" && INVALID_EMAIL_MESSAGE}
            {console.log("error", isValid)}
            <input disabled={!isValid} type="submit" />
        </form>
    );
}

export default connect(
    null,
    { addPost }
)(AddPost);
// export default AddTodo;
