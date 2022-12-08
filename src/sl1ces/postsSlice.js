import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addShowReply, toggleCommentById } from "../utils/commentsRelated";
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

      if (data.length === 0) throw Error("no more posts found");

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
  "posts/loadMoreRepoPosts",
  async (repo, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const lastPost = state.posts.lastPost;

      const data = await redditApi.fetchMoreRepoPosts(repo, lastPost);

      if (data.length === 0) throw Error("no more posts found");

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
  "posts/loadMoreSearchPosts",
  async (searchInput, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const lastPost = state.posts.lastPost;

      const data = await redditApi.searchMorePosts(searchInput, lastPost);

      if (data.length === 0) throw Error("no more posts found");

      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getComments = createAsyncThunk(
  "posts/getComments",
  async ({ id, permalink }, { rejectWithValue }) => {
    try {
      const data = await redditApi.getPostComments(permalink);

      const comments = data[1].data.children;

      return comments;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getTopSubreddits = createAsyncThunk(
  "posts/getTopSubreddits",
  async (_, { rejectWithValue }) => {
    try {
      const data = await redditApi.fetchTopSubreddits();

      return data;
    } catch (err) {
      rejectWithValue(err.message);
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
  subreddits: [],
  status: null,
  loadMoreStatus: null,
  subredditsStatus: null,
  error: null,
  loadMoreError: null,
  subredditsError: null,
  lastPost: null,
  lastRequested: { requestType: null, param: null },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    toggleShowReplies(state, action) {
      const id = action.payload;

      const newPosts = toggleCommentById(id, state.posts);
      state.posts = newPosts;
    },
    increaseCommentsShowLength(state, action) {
      const id = action.payload;

      state.posts.find(
        (item) => item.data.id === id
      ).data.commentsShowLength += 9;
    },
  },
  extraReducers: {
    // getPosts
    [getPosts.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getPosts.fulfilled]: (state, action) => {
      const [data, categorie] = action.payload;

      const posts = data.map((item) => {
        item.data = {
          ...item.data,
          comments: [],
          commentsStatus: null,
          commentsError: null,
          commentsShowLength: 9,
        };
        return { ...item };
      });

      state.status = "success";
      state.posts = posts;
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
      state.loadMoreError = null;
    },
    [loadMorePosts.fulfilled]: (state, action) => {
      const data = action.payload;
      const posts = data.map((item) => {
        item.data = {
          ...item.data,
          comments: [],
          commentsStatus: null,
          commentsError: null,
        };
        return { ...item };
      });

      state.loadMoreStatus = "success";
      state.posts = [...state.posts, ...posts];
      state.lastPost = action.payload[action.payload.length - 1].data.name;
    },
    [loadMorePosts.rejected]: (state, action) => {
      state.loadMoreStatus = "failed";
      state.loadMoreError = action.payload;
    },

    // getRepo
    [getRepoPosts.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getRepoPosts.fulfilled]: (state, action) => {
      const [data, repo] = action.payload;

      const posts = data.map((item) => {
        item.data = {
          ...item.data,
          comments: [],
          commentsStatus: null,
          commentsError: null,
          commentsShowLength: 9,
        };
        return { ...item };
      });

      state.status = "success";
      state.posts = posts;
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
      state.loadMoreError = null;
    },
    [loadMoreRepoPosts.fulfilled]: (state, action) => {
      const data = action.payload;
      const posts = data.map((item) => {
        item.data = {
          ...item.data,
          comments: [],
          commentsStatus: null,
          commentsError: null,
        };
        return { ...item };
      });

      state.loadMoreStatus = "success";
      state.posts = [...state.posts, ...posts];
      state.lastPost = action.payload[action.payload.length - 1].data.name;
    },
    [loadMoreRepoPosts.rejected]: (state, action) => {
      state.loadMoreStatus = "failed";
      state.loadMoreError = action.payload;
    },

    // searchPosts
    [searchPosts.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [searchPosts.fulfilled]: (state, action) => {
      const [data, searchInput] = action.payload;

      const posts = data.map((item) => {
        item.data = {
          ...item.data,
          comments: [],
          commentsStatus: null,
          commentsError: null,
          commentsShowLength: 9,
        };
        return { ...item };
      });

      state.status = "success";
      state.posts = posts;
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
      state.loadMoreError = null;
    },
    [loadMoreSearchPosts.fulfilled]: (state, action) => {
      const data = action.payload;
      const posts = data.map((item) => {
        item.data = {
          ...item.data,
          comments: [],
          commentsStatus: null,
          commentsError: null,
        };
        return { ...item };
      });

      state.loadMoreStatus = "success";
      state.posts = [...state.posts, ...posts];
      state.lastPost = action.payload[action.payload.length - 1].data.name;
    },
    [loadMoreSearchPosts.rejected]: (state, action) => {
      state.loadMoreStatus = "failed";
      state.loadMoreError = action.payload;
    },

    // getPostComments
    [getComments.pending]: (state, action) => {
      const id = action.meta.arg.id;
      state.posts.find((item) => item.data.id === id).data.commentsStatus =
        "loading";
      state.posts.find((item) => item.data.id === id).data.commentsError = null;
    },
    [getComments.fulfilled]: (state, action) => {
      const id = action.meta.arg.id;
      const comments = action.payload;

      const newComments = addShowReply(comments);

      state.posts.find((item) => item.data.id === id).data.comments =
        newComments;
      state.posts.find((item) => item.data.id === id).data.commentsStatus =
        "success";
    },
    [getComments.rejected]: (state, action) => {
      const id = action.meta.arg.id;

      state.posts.find((item) => item.data.id === id).data.commentsStatus =
        "failed";
      state.posts.find((item) => item.data.id === id).data.commentsError =
        action.payload;
    },

    // getTopSubreddits
    [getTopSubreddits.pending]: (state, action) => {
      state.subredditsStatus = "loading";
      state.subredditsError = null;
    },
    [getTopSubreddits.fulfilled]: (state, action) => {
      state.subredditsStatus = "success";
      state.subreddits = action.payload;
    },
    [getTopSubreddits.rejected]: (state, action) => {
      state.subredditsStatus = "failed";
      state.subredditsError = action.payload;
    },
  },
});

export const { toggleShowReplies, increaseCommentsShowLength } =
  postsSlice.actions;
export default postsSlice.reducer;
