import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "notification",
  initialState: { notification: null },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const ui_actions = uiSlice.actions;
export default uiSlice;
