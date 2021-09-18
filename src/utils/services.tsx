import { PostType } from "../types";
import API from "../config/api";

export const getPosts = () => API.get("/posts");

export const getUsers = () => API.get("/users");

export const updatePost = (post_id: number | undefined, data: PostType) => {
  const id = post_id || -1;
  return API.put("/posts/" + id, data, {
    headers: {
      ContentType: "application/json",
      Accept: "application/json",
    },
  });
};

export const addPost = (data: PostType) =>
  API.post("/posts", data, {
    headers: {
      ContentType: "application/json",
      Accept: "application/json",
    },
  });
