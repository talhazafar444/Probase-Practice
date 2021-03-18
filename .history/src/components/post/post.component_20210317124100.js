import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";

export default function AddPost() {
    const { post, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="content" placeholder="Enter Post Content here!" ref={post({ required: true })} />
            {console.log(errors.content)}
            { errors.content && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}

export default connect(
    null,
    { addTodo }
)(AddPost);
// export default AddTodo;
