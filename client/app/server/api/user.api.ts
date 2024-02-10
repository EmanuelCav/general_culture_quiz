import { api } from './api';

import { IAuthLoginData, IOptionUser, IPointsData } from '../../interface/User';
import { HelpType, RankingDateType } from '../../types/key.type';

export const firstTimeApi = async () => {

    return await api.post('/users/firsttime', null)

}

export const loginApi = async (id: string) => {

    return await api.post(`/users/${id}/login`, null)

}

export const usersApi = async (date: RankingDateType, token: string) => {

    return await api.get(`/users/${date}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const userApi = async (id: string, token: string) => {

    return await api.get(`/users/profile/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const optionsApi = async (optionData: IOptionUser, token: string) => {

    return await api.put('/users/options', optionData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const categoryApi = async (id: string, token: string) => {

    return await api.put(`/statistics/${id}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const categoryAllApi = async (query: boolean, token: string) => {

    return await api.put(`/statistics?query=${query}`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const authLoginApi = async (userData: IAuthLoginData) => {

    return await api.post('/users/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

export const countStatisticApi = async (id: string, token: string) => {

    return await api.put(`/statistics/${id}/count`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const correctStatisticApi = async (id: string, token: string) => {

    return await api.put(`/statistics/${id}/correct`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const isImageApi = async (token: string) => {

    return await api.put(`/users/image`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const isSoundsApi = async (token: string) => {

    return await api.put(`/users/sounds`, null, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}

export const registerApi = async (userData: IAuthLoginData, token: string) => {

    return await api.put(`/users/register`, userData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

}

export const updateExperienceApi = async (pointsData: IPointsData, token: string) => {

    return await api.put('/users/experience', pointsData, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

}

export const countryRankingApi = async (date: string, token: string) => {

    return await api.get(`/users/country/${date}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const helpsApi = async (type: HelpType, token: string) => {

    return await api.put(`/users/helps/${type}`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const countriesApi = async (token: string) => {

    return await api.get('/countries', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}

export const countryApi = async (id: string, token: string) => {

    return await api.put(`/users/country/${id}`, null, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}
