import { ADD_POST, VIEW_POST, POST_LIST, COMMENT_POST } from '../../constants'

const initialState = {
    posts: [],
    post: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            const { id, content } = action.payload;
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { id, content }
                ]
            };
        }
        case VIEW_POST: {
            const { id } = action.payload;
            return {
                ...state,
                post: state.posts.filter(post => post.id == id)
            };
        }
        case POST_LIST: {
            return {
                ...state.posts
            };
        }
        case DELETE_LIST: {
            const { id } = action.payload;
            return {
                ...state.posts
            };
        }
        default:
            return state;
    }
}
