import {Dispatch} from "redux";
import axios from "axios";

import {CountriesAction, CountriesActionTypes} from "../../types/countries";

export const fetchCountries = () => {
    return _fetchCountriesAll()
}

export const fetchCountry = (data: any) => {
    if (data.fullText && data.name) {
        return _fetchCountryName(data.name);
    } else if (!data.fullText && data.name) {
        return _fetchCountryPartName(data.name)
    } else if (data.code) {
        return _fetchCountryCode(data.code);
    } else {
        return _fetchCountriesAll();
    }
}

export const fetchCountriesRegion = (data: any) => {
    if (!data.region || data.region === ' ') {
        return _fetchCountriesAll();
    } else {
        return _fetchCountryRegion(data.region)

    }
}

export const fetchCountriesCode = (data: any) => {
    if (!data.code) {
        return _fetchCountriesAll();
    } else {
        return _fetchCountryCode(data.code)

    }
}

const _fetchCountryName = (name: string) => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        try {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRY})
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        
            dispatch({type: CountriesActionTypes.FETCH_COUNTRY_SUCCESS, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.FETCH_COUNTRY_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

const _fetchCountryPartName = (name: string) => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        try {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES})
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)

            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.FETCH_COUNTRY_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

const _fetchCountriesAll = () => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        try {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES})
            // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags')
            
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.FETCH_COUNTRIES_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

const _fetchCountryRegion = (region: string) => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        try {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES})
            const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
        
            dispatch({type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.FETCH_COUNTRIES_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

const _fetchCountryCode = (code: string) => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        try {
            dispatch({type: CountriesActionTypes.FETCH_COUNTRY})
            const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)

            dispatch({type: CountriesActionTypes.FETCH_COUNTRY_SUCCESS, payload: response.data[0]})
        } catch (e) {
            dispatch({
                type: CountriesActionTypes.FETCH_COUNTRY_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}