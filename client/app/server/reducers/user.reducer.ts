import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUser, IUserReducer } from '../../interface/User'
import { LanguagesTypes, PallettesTypes } from '../../types/key.type'

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
        },
        updateLanguage: (state, action: PayloadAction<LanguagesTypes>) => {
            state.user.language = action.payload
        },
        updateBackground: (state, action: PayloadAction<PallettesTypes>) => {
            state.user.palletteBackground = action.payload
        },
        updateText: (state, action: PayloadAction<PallettesTypes>) => {
            state.user.palletteText = action.payload
        }
    }
})

export const { createUser, updateBackground, updateLanguage, updateText } = userSlice.actions

export default userSlice.reducer