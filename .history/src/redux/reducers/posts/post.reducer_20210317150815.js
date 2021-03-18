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
        case UPDATE_POST: {
            const { id, content } = action.payload;
            return array.map((item, index) => {
                if (index !== action.index) {
                    // This isn't the item we care about - keep it as-is
                    return item
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    ...action.item
                }
            return {
                ...state,
            };
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
