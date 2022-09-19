import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import redditApi from "../services/redditApi";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (categorie = "hot", { rejectWithValue }) => {
    try {
      const data = await redditApi.fetchPosts(categorie);

      return [data, categorie];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadMorePosts = createAsyncThunk(
  "posts/loadMorePosts",
  async (categorie = "hot", { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const lastPost = state.posts.lastPost;

      const data = await redditApi.fetchMorePosts(categorie, lastPost);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getRepoPosts = createAsyncThunk(
  "posts/getRepoPosts",
  async (repo, { rejectWithValue }) => {
    try {
      const data = await redditApi.fetchRepoPosts(repo);

      return [data, repo];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadMoreRepoPosts = createAsyncThunk(
  "posts/loadMorePosts",
  async (repo, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const lastPost = state.posts.lastPost;

      const data = await redditApi.fetchMoreRepoPosts(repo, lastPost);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (searchInput, { rejectWithValue }) => {
    try {
      const data = await redditApi.searchPosts(searchInput);

      if (data.length === 0) throw Error("no posts found");

      return [data, searchInput];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadMoreSearchPosts = createAsyncThunk(
  "posts/loadMorePosts",
  async (searchInput, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const lastPost = state.posts.lastPost;

      const data = await redditApi.searchMorePosts(searchInput, lastPost);

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loadMore = () => {
  return (dispatch, getState) => {
    const state = getState();
    const lastRequested = state.posts.lastRequested;

    if (lastRequested.requestType === "categorie") {
      dispatch(loadMorePosts(lastRequested.param));
    } else if (lastRequested.requestType === "repo") {
      dispatch(loadMoreRepoPosts(lastRequested.param));
    } else if (lastRequested.requestType === "search") {
      dispatch(loadMoreSearchPosts(lastRequested.param));
    }
  };
};

const initialState = {
  posts: [],
  status: null,
  loadMoreStatus: null,
  error: null,
  loadMoreError: null,
  lastPost: null,
  lastRequested: { requestType: null, param: null },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // getPosts
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      const [data, categorie] = action.payload;

      state.status = "success";
      state.posts = data;
      state.lastPost = data[data.length - 1].data.name;
      state.lastRequested = {
        requestType: "categorie",
        param: categorie,
      };
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },

    // loadMorePosts
    [loadMorePosts.pending]: (state, action) => {
      state.loadMoreStatus = "loading";
    },
    [loadMorePosts.fulfilled]: (state, action) => {
      state.loadMoreStatus = "success";
      state.posts = [...state.posts, ...action.payload];
      state.lastPost = action.payload[action.payload.length - 1].data.name;
    },
    [loadMorePosts.rejected]: (state, action) => {
      state.loadMoreStatus = "failed";
      state.loadMoreError = action.payload;
    },

    // getRepo
    [getRepoPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [getRepoPosts.fulfilled]: (state, action) => {
      const [data, repo] = action.payload;

      state.status = "success";
      state.posts = data;
      state.lastPost = data[data.length - 1].data.name;
      state.lastRequested = {
        requestType: "repo",
        param: repo,
      };
    },
    [getRepoPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },

    // loadMoreRepoPosts
    [loadMoreRepoPosts.pending]: (state, action) => {
      state.loadMoreStatus = "loading";
    },
    [loadMoreRepoPosts.fulfilled]: (state, action) => {
      state.loadMoreStatus = "success";
      state.posts = [...state.posts, ...action.payload];
      state.lastPost = action.payload[action.payload.length - 1].data.name;
    },
    [loadMoreRepoPosts.rejected]: (state, action) => {
      state.loadMoreStatus = "failed";
      state.loadMoreError = action.payload;
    },

    // searchPosts
    [searchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [searchPosts.fulfilled]: (state, action) => {
      const [data, searchInput] = action.payload;

      state.status = "success";
      state.posts = data;
      state.lastPost = data[data.length - 1].data.name;
      state.lastRequested = {
        requestType: "search",
        param: searchInput,
      };
    },
    [searchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },

    // loadMoreSearchPosts
    [loadMoreSearchPosts.pending]: (state, action) => {
      state.loadMoreStatus = "loading";
    },
    [loadMoreSearchPosts.fulfilled]: (state, action) => {
      state.loadMoreStatus = "success";
      state.posts = [...state.posts, ...action.payload];
      state.lastPost = action.payload[action.payload.length - 1].data.name;
    },
    [loadMoreSearchPosts.rejected]: (state, action) => {
      state.loadMoreStatus = "failed";
      state.loadMoreError = action.payload;
    },
  },
});

export default postsSlice.reducer;
