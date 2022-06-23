import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./Reducers/reducers";
const store = configureStore({
    reducer: {
        phonereducer:phoneReducer
    },
});

export default store;