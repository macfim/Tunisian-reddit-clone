import { configureStore } from "@reduxjs/toolkit";

import togglesReducer from "./reducers/togglesReducer";
import postsReducer from "./reducers/postsReducer";

const store = configureStore({
  reducer: {
    toggles: togglesReducer,
    posts: postsReducer,
  },
});

export default store;