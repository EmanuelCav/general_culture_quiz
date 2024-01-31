import { api } from './api';

export const firstTimeApi = async () => {

    return await api.post('/users/firsttime', null)

}

export const loginApi = async (id: string) => {

    return await api.post(`/users/${id}/login`, null)

}

export const usersApi = async (token: string) => {

    return await api.get('/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const userApi = async (id: string, token: string) => {

    return await api.get(`/users/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}