import { api } from './api';

export const firstTimeApi = async () => {

    return await api.post('/users/firsttime', null)

}