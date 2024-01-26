import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUserInfo, IUserReducer } from '../../interface/User'

const initialState: IUserReducer = {
    user: {},
    isLoggedIn: false,
    profile: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        auth: (state, action: PayloadAction<IUserInfo>) => {
            state.isLoggedIn = true
            state.user = action.payload
            state.profile = action.payload.user!
        }
    }
})

export const { auth } = userSlice.actions

export default userSlice.reducer