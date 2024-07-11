import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUser, IUserReducer } from '../../interface/User'

const initialState: IUserReducer = {
    user: {},
    isLoggedIn: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload,
            state.isLoggedIn = true
        }
    }
})

export const { createUser } = userSlice.actions

export default userSlice.reducer