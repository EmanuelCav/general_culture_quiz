import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IGame, IGameReducer } from '../../interface/Game'

const initialState: IGameReducer = {
    games: [],
    game: {}
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        games: (state, action: PayloadAction<IGame[]>) => {
            state.games = action.payload
        },
        showGame: (state, action: PayloadAction<IGame>) => {
            state.game = action.payload
        },
    }
})

export const { games, showGame } = gameSlice.actions

export default gameSlice.reducer