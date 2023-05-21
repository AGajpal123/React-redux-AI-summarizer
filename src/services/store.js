import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    //slice of a cake

    reducer : {
        [articleApi.reducerPath] : articleApi.reducer
    },

    
    middleware:(getDefaultMiddleware)=> 
    getDefaultMiddleware().concat(articleApi.middleware)
})


