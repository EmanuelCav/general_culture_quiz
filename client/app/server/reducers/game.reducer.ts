import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    games: [],
    game: {}
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        games: (state, action: PayloadAction<any>) => {
            state.games = action.payload
        }
    }
})

export const { games } = gameSlice.actions

export default gameSlice.reducer