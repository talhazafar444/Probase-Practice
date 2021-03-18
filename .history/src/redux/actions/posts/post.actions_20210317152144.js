import { ADD_POST, VIEW_POST, COMMENT_POST, UPDATE_POST, DELETE_POST, POST_LIST } from '../../constants'

let nextPostId = 0;

export const addPost = content => ({
    type: ADD_POST,
    payload: {
        id: ++nextPostId,
        content
    }
});

export const viewPost = id => ({
    type: VIEW_POST,
    payload: { id }
});

export const updatePost = payload => ({
    type: UPDATE_POST,
    payload: payload
});

export const deletePost = id => ({
    type: DELETE_POST,
    payload: { id }
});

export const postList = () => ({
    type: POST_LIST
});
