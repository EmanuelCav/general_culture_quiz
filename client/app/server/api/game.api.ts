import { api } from './api';

export const gameApi = async (token: string) => {
    return await api.post('/games', null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const questionGameApi = async (id: string, token: string) => {
    return await api.patch(`/questions/games/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const generateQuestionApi = async (qid: string, gid: string, token: string) => {
    return await api.patch(`/questions/${qid}/games/${gid}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}