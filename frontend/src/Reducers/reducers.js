import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const phoneReducer = createReducer(initialState, {
    ALL_PHONE_REQUEST: (state) => {
        state.loading = true;
    },
    ALL_PHONE_SUCCESS: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    ALL_PHONE_FAIL: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

});
