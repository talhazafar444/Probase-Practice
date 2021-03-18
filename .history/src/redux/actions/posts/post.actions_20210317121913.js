import { ADD_POST, VIEW_POST, COMMENT_POST } from '../../constants'

let nextPostId = 0;

export const addPost = content => ({
    type: ADD_POST,
    payload: {
        id: ++nextPostId,
        content
    }
});

// export const toggleTodo = id => ({
//     type: TOGGLE_TODO,
//     payload: { id }
// });

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
