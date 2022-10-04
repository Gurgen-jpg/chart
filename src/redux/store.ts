import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {TypedUseSelectorHook, useDispatch} from "react-redux";

const rootReducer = combineReducers({})

export type RootStateType = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware()
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch =  useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export type AppThunk = ThunkAction<void, RootStateType, unknown, Action>

export default  store;