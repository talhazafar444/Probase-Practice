import axios from "axios";
const API_URL = "http://3.97.206.109:8081/";

export function requestGetUser(payload) {
//  return axios.request({
//     method: "post",
//     url: API_URL + "admin-login",
//     data: { username: payload.username, password: payload.password },
//   });


//  return axios.request({
//     method: "get",
//     url: API_URL + "all-skills"    
//   });

return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user"
  });
}
