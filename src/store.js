import { configureStore } from "@reduxjs/toolkit";

import togglesSlice from "./sl1ces/togglesSlice";
import postsSlice from "./sl1ces/postsSlice";

const store = configureStore({
  reducer: {
    toggles: togglesSlice,
    posts: postsSlice,
  },
});

export default store;
