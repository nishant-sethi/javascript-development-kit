import "whatwg-fetch";
import baseUrl from "./baseUrl";

const base = baseUrl();
const onSuccess = (res) => {
  return res.json();
};
const onError = (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
};
const get = (url) => {
  return fetch(base + url).then(onSuccess, onError);
};
const del = (url) => {
  const req = new Request(base + url, {
    method: "DELETE",
  });
  return fetch(req).then(onSuccess, onError);
};
export const deleteUsers = (id) => {
  return del(`users/${id}`);
};
export const getUsers = () => {
  return get("users");
};
