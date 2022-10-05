import {Action, combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {TypedUseSelectorHook, useDispatch} from "react-redux";
import chartSlice from "./chartSlice";

const rootReducer = combineReducers({
    chart: chartSlice
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware()
})

export const useAppDispatch: () => AppDispatch =  useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootStateType, unknown, Action>
export type RootStateType = ReturnType<typeof rootReducer>

export default  store;