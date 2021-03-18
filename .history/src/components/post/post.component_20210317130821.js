import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";
import { REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE } from '../constants'

const AddPost = () => {
    const { register, handleSubmit, formState, errors } = useForm();
    comst 
    const onSubmit = data => console.log(data);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="content" placeholder="Enter Post Content here!" ref={register({ required: true, pattern: emailRegex })} />
            {errors.content?.type === "required" && REQUIRED_MESSAGE}
            {errors.content?.type === "pattern" && INVALID_EMAIL_MESSAGE}
            <input disabled={formState.isValid} type="submit" />
        </form>
    );
}

export default connect(
    null,
    { addPost }
)(AddPost);
// export default AddTodo;
