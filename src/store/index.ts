import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";

const rootReducer = combineReducers({
    modal: modalReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store