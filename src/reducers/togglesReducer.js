import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: true,
  post: true,
  wiki: false,
};

const togglesReducer = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    toggleMobileMenu(state) {
      state.menu = !state.menu;
    },
    togglePost(state) {
      return {
        ...state,
        post: !state.post,
        wiki: false,
      };
    },
    toggleWiki(state) {
      return {
        ...state,
        wiki: !state.wiki,
        post: false,
      };
    },
  },
});

export const { toggleMobileMenu, togglePost, toggleWiki } =
  togglesReducer.actions;
export default togglesReducer.reducer;
