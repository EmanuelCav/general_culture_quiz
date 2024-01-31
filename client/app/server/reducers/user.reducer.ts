import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUser, IUserInfo, IUserReducer } from '../../interface/User'

const initialState: IUserReducer = {
    users: {},
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
        },
        users: (state, action: PayloadAction<IUser[]>) => {
            state.users.ranking = action.payload
        },
        profile: (state, action: PayloadAction<IUser>) => {
            state.profile = action.payload
        }
    }
})

export const { auth, users, profile } = userSlice.actions

export default userSlice.reducer