import {ChartSliceType, ECategoryName, EStatus} from "../types/chartSliceType";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {prodAPI} from "../api/productApi";


const initialState = {
    products:[],
    chartTitle: '',
    status: null,
    error: null
} as ChartSliceType


export const fetchCategory = createAsyncThunk(
    'chart/fetchCategory',
    async (category: ECategoryName) => {
        const response = await prodAPI.getCategory(category)
        return response
    }
)

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        addTitle (state, action: PayloadAction<ECategoryName>){
            state.chartTitle = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.status = EStatus.loading;
            state.error = null
        })
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.status = EStatus.success;
            state.products = action.payload.products;
        })
        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.status = EStatus.failed
            if (action.payload) {
                state.error = action.payload
            } else {
                state.error = action.error.message
            }
        })
    }
})

const { actions, reducer } = chartSlice
export const { addTitle } = actions
export default reducer;