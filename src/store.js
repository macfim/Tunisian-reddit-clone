import { configureStore } from "@reduxjs/toolkit";

import togglesSlice from "./Slices/togglesSlice";
import postsSlice from "./Slices/postsSlice";

const store = configureStore({
  reducer: {
    toggles: togglesSlice,
    posts: postsSlice,
  },
});

export default store;