import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";
import { useForm } from "react-hook-form";

export default function AddPost() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <input
                onChange={e => this.updateInput(e.target)}
                value={this.state.input}
            />
            <button className="add-todo" onClick={this.handleAddTodo}>
                Add Todo
                </button>
        </div>
    );
}

export default connect(
    null,
    { addTodo }
)(AddPost);
// export default AddTodo;
