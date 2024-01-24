import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUserInfo, IUserReducer } from '../../interface/User'

const initialState: IUserReducer = {
    user: {},
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        firstTime: (state, action: PayloadAction<IUserInfo>) => {
            state.isLoggedIn = true
            state.user = action.payload
        }
    }
})

export const { firstTime } = userSlice.actions

export default userSlice.reducer