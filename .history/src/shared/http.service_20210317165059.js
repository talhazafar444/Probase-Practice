const URL = 'my-json-server.typicode.com'
import axios from 'axios'

export const HttpService = () => {
    get = async(url) => {
        await axios.get(URL + url)

    }
}
