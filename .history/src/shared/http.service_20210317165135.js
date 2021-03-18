const URL = 'my-json-server.typicode.com'
import axios from 'axios'

export const HttpService = () => {
    get = async(route) => {
        return await axios.get(URL + route).then()
    }
}
