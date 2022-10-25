import { configureStore } from "@reduxjs/toolkit";

import togglesSlice from "./slices/togglesSlice";
import postsSlice from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    toggles: togglesSlice,
    posts: postsSlice,
  },
});

export default store;
