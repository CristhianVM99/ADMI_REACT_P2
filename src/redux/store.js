import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import staticDataReducer from "./staticDataSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../api/apiSlice";

const store = configureStore({
    reducer: {
        staticData: staticDataReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
