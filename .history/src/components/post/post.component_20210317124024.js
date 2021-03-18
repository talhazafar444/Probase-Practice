import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";

export default function AddPost() {
    const { post, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input name="content" placeholder="Enter Post Content here!" ref={post({ required: true })} />
            {console.log(errors.content)}
            { errors.content && <span>This field is required</span>}


            {/* include validation with required or other standard HTML validation rules */}
            <input name="exampleRequired" ref={post({ required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default connect(
    null,
    { addTodo }
)(AddPost);
// export default AddTodo;
