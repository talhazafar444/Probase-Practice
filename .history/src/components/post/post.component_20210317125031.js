import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";

const AddPost = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="content" placeholder="Enter Post Content here!" ref={register({ required: true, pattern: emailRegex })} />
            {errors.content?.type === "required" && "Content field is required"}
            {errors.content?.type === "pattern" && "Your email is in-valid"}
            <input type="submit" />
        </form>
    );
}

export default connect(
    null,
    { addPost }
)(AddPost);
// export default AddTodo;
