import { ADD_POST, VIEW_POST, COMMENT_POST} from '../../constants'

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
                    {id, content}
                ]
            };
        }
        case VIEW_POST: {
            const { id } = action.payload;
            return {
                ...state,
                post: state.posts.filter()
            };
        }
        default:
            return state;
    }
}
