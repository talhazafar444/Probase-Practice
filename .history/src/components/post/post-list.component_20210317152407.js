import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { viewPost } from "../../redux/actions/posts/post.actions";

const PostList = () => {
    return (
        <ul>
            {
                props.posts.map((item) => {
                    <li>{item.content}</li>
                })
            }
        </ul>
    );
}

const viewPost = (state, ownProps) => {
    ownProps = state;
}

const viewPost = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
    //   const allTodos = getTodos(state);
    //   return {
    //     todos:
    //       visibilityFilter === VISIBILITY_FILTERS.ALL
    //         ? allTodos
    //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
    //           ? allTodos.filter(todo => todo.completed)
    //           : allTodos.filter(todo => !todo.completed)
    //   };
};

export default connect(viewPost)(PostList);
