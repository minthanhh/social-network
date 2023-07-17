import { combineReducers, configureStore } from "@reduxjs/toolkit";


const RootReducer = combineReducers({})

const store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store