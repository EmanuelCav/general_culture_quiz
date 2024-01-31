import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IResponseReducer } from '../../interface/Response'

import * as userAction from '../actions/user.actions'

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
        builder.addCase(userAction.firstTimeAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.firstTimeAction.fulfilled, (state) => {
            state.loading = false
        })

        builder.addCase(userAction.loginAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.loginAction.fulfilled, (state) => {
            state.loading = false
        })

        builder.addCase(userAction.usersRankingAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.usersRankingAction.fulfilled, (state) => {
            state.loading = false
        })

        builder.addCase(userAction.profileAction.pending, (state) => {
            state.loading = true
        })
        builder.addCase(userAction.profileAction.fulfilled, (state) => {
            state.loading = false
        })
    },
})

export const { loadingAction } = responseSlice.actions

export default responseSlice.reducer