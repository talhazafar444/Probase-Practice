const URL = 'my-json-server.typicode.com'
import axios from 'axios'

export const HttpService = () => {
    get = async() => {
        await axios.get(URL )

    }
}
