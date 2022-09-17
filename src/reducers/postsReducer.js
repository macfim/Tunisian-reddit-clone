import { createSlice } from "@reduxjs/toolkit";

import { getAll, search } from "../services/posts";

const initialState = {
  posts: [],
  lastPost: "",
  isLoadingNewData: false,
  maxLoadNewData: false,
  error: "",
  currentDataType: "default",
  lastSearch: "",
};

const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    pushPosts(state, action) {
      state.posts.push(...action.payload);
    },
    toggleLoadingNewData(state, action) {
      state.isLoadingNewData = !state.isLoadingNewData;
    },
    clearPosts(state, action) {
      return {
        ...state,
        posts: [],
        lastPost: "",
        lastSearch: "",
      };
    },
    setLastPost(state, action) {
      state.lastPost = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMaxLoadNewData(state, action) {
      state.maxLoadNewData = action.payload;
    },
    setCurrentDataType(state, action) {
      state.currentDataType = action.payload;
    },
    setLastSearch(state, action) {
      state.lastSearch = action.payload;
    },
  },
});

export const fetchAll = (index = "", lastPost = "") => {
  return async (dispatch) => {
    try {
      dispatch(setCurrentDataType("default"));
      !lastPost && dispatch(clearPosts());
      lastPost && dispatch(toggleLoadingNewData());
      const response = await getAll(index, lastPost);
      const data = response.data.children;
      if (data.length === 0) {
        dispatch(toggleLoadingNewData());
      }
      dispatch(setLastPost(data[data.length - 1].data.name));
      !lastPost ? dispatch(setPosts(data)) : dispatch(pushPosts(data));
      lastPost && dispatch(toggleLoadingNewData());
    } catch (err) {
      if (err.message === "Network Error") dispatch(setError(err.message));
      if (
        err.message === "Cannot read properties of undefined (reading 'data')"
      )
        dispatch(setMaxLoadNewData(true));
    }
  };
};

export const searchPost = (q, type = "load", lastPost) => {
  return async (dispatch) => {
    try {
      dispatch(setCurrentDataType("search"));
      type === "load" && dispatch(clearPosts());
      type === "load" && dispatch(setLastSearch(q));
      type !== "load" && dispatch(toggleLoadingNewData());
      const response = await search(q, lastPost);
      const data = response.data.children;
      dispatch(setLastPost(data[data.length - 1].data.name));
      type === "load" ? dispatch(setPosts(data)) : dispatch(pushPosts(data));
      type !== "load" && dispatch(toggleLoadingNewData());
    } catch (err) {
      if (err.message === "Network Error") dispatch(setError(err.message));
      if (
        err.message === "Cannot read properties of undefined (reading 'data')"
      )
        dispatch(setMaxLoadNewData(true));
    }
  };
};

export const {
  setPosts,
  clearPosts,
  setLastPost,
  pushPosts,
  toggleLoadingNewData,
  setMaxLoadNewData,
  setError,
  setCurrentDataType,
  setLastSearch,
} = postsReducer.actions;
export default postsReducer.reducer;
