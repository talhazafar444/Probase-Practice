import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/actions/posts/post.actions";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = { post: {} };
    }

    updateInput = target => {
        const {name, value} = target;
        this.state.post[name] = value;
        
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: "" });
    };

    render() {
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
}

export default connect(
    null,
    { addTodo }
)(AddPost);
// export default AddTodo;
