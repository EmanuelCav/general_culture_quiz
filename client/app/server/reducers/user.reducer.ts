import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUserReducer } from '../../interface/User'

const initialState: IUserReducer = {
    user: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    }
})

export const {} = userSlice.actions

export default userSlice.reducer