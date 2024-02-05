import { api } from './api';

export const gameApi = async (token: string) => {
    return await api.post('/games', null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const questionGameApi = async (id: string, token: string) => {
    return await api.post(`/questions/games/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}