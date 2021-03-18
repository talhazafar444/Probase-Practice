import { ADD_POST, VIEW_POST, POST_LIST, COMMENT_POST, UPDATE_POST, DELETE_POST } from '../../constants'

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
                ...state
            };
        }
        case UPDATE_POST: {
            const { id, content } = action.payload;
            return {
                ...state,
                posts: state.posts.map((item, index) => {
                    if (item.id !== id) {
                        item.content = content;
                    }
                })
            }
        }
        case DELETE_POST: {
            const { id } = action.payload;
            return {
                ...state,
                posts: state.posts.filter(post => post.id != id)
            };
        }
        default:
            return state;
    }
}
