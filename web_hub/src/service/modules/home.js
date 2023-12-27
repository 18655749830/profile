import Request from "..";

export function getDynamicList() {
  return Request.get({
    url: "/moment/list"
  })
}