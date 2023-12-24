import request from '@/utils/request'
import { post, pureGet } from "../common/ajax";


export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
// export const login = (username, password, userType) =>
//   post("/user/login", {
//     username: username,
//     password: password,
//     userType: userType
//   });

// export const getLoginStatus = () => pureGet("/user/login/status");

// export const logout = () => pureGet("/user/logout");
