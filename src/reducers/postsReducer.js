import { createSlice } from "@reduxjs/toolkit";

import { getAll } from "../services/posts";

const initialState = {
  posts: [],
  lastPost: "",
  isLoadingNewData: false,
  maxLoadNewData: false,
  error: "",
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
      return initialState;
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
  },
});

export const fetchAll = (index = "", lastPost = "") => {
  return async (dispatch) => {
    try {
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

export const {
  setPosts,
  clearPosts,
  setLastPost,
  pushPosts,
  toggleLoadingNewData,
  setMaxLoadNewData,
  setError,
} = postsReducer.actions;
export default postsReducer.reducer;
