import {CountriesAction, CountriesActionTypes, CountriesState} from "../../types/countries";

const initialState: CountriesState = {
    countries: [],
    country: {},
    loading: false,
    error: null
}

export const countriesReducer = (state = initialState, action: CountriesAction): CountriesState => {
    switch (action.type) {
        case CountriesActionTypes.FETCH_COUNTRIES:
            return {...state, ...{loading: true, error: null, countries: []}}
        case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
            return {...state, ...{loading: false, error: null, countries: action.payload}}
        case CountriesActionTypes.FETCH_COUNTRIES_ERROR:
            return {...state, ...{loading: false, error: action.payload, countries: []}}
        case CountriesActionTypes.FETCH_COUNTRY:
            return {...state, ...{loading: true, error: null, country: {}}}
        case CountriesActionTypes.FETCH_COUNTRY_SUCCESS:
            return {...state, ...{loading: false, error: null, country: action.payload}}
        case CountriesActionTypes.FETCH_COUNTRY_ERROR:
            return {...state, ...{loading: false, error: action.payload, country: {}}}
        default:
            return state
    }
}
