import { ADD_POST, VIEW_POST, COMMENT_POST } from '../../constants'

let nextPostId = 0;

export const addPost = content => ({
    type: ADD_POST,
    payload: {
        id: ++nextPostId,
        content
    }
});

export const viewTodo = id => ({
    type: VIEW_POST,
    payload: { id }
});

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
