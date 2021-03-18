import { ADD_POST, VIEW_POST, COMMENT_POST } from '../../constants'

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

export const updatePost = paload => ({
    type: VIEW_POST,
    payload: { id }
});

export const deletePost = id => ({
    type: VIEW_POST,
    payload: { id }
});

export const postList = () => ({
    type: POST_LIST
});
