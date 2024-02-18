import Request from "..";

export function getDynamicList() {
  return Request.get({
    url: "/moment/list"
  })
}
export function loginRequest(data) {
  return Request.post({
    url: "/login",
    data
  })
}
export function registerRequest(data) {
  return Request.post({
    url: "/user",
    data
  })
}

export function userListRequest(data) {
  return Request.post({
    url: "/user/list",
    data
  })
}