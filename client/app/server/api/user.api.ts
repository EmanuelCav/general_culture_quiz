import { api } from './api';

export const firstTimeApi = async () => {

    return await api.post('/users/firsttime', null)

}

export const loginApi = async (id: string) => {

    return await api.post(`/users/${id}/login`, null)

}