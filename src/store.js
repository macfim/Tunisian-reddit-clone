import { configureStore } from "@reduxjs/toolkit";

import togglesReducer from "./reducers/togglesReducer";

const store = configureStore({
  reducer: {
    toggles: togglesReducer,
  },
});

export default store;