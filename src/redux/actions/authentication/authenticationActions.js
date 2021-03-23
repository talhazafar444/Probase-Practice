import { SET_USER } from '../../constants'

export const login = data => ({
    type: SET_USER,
    payload: {
        username: data.email,
        password: data.password
    }
});