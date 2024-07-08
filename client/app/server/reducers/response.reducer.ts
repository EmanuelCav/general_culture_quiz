import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IResponseReducer } from '../../interface/Response'

import * as userAction from '../actions/user.actions'
import * as dashboardAction from '../actions/dashboard.actions'

const initialState: IResponseReducer = {
    loading: false
}

const responseSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers(builder) {
        // builder.addCase(gameAction.gameAction.pending, (state) => {
        //     state.loading = true
        // })
        // builder.addCase(gameAction.gameAction.fulfilled, (state) => {
        //     state.loading = false
        // })
    },
})

export const { loadingAction } = responseSlice.actions

export default responseSlice.reducer