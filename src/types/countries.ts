export interface CountriesState {
    countries?: any[];
    country?: any;
    loading: boolean;
    error: null | string;
}
export enum CountriesActionTypes {
    FETCH_COUNTRIES = 'FETCH_COUNTRIES',
    FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
    FETCH_COUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR',
    FETCH_COUNTRY = 'FETCH_COUNTRY',
    FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS',
    FETCH_COUNTRY_ERROR = 'FETCH_COUNTRY_ERROR',
}
interface FetchCountriesAction {
    type: CountriesActionTypes.FETCH_COUNTRIES;
}
interface FetchCountriesSuccessAction {
    type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS;
    payload: any[]
}
interface FetchCountriesErrorAction {
    type: CountriesActionTypes.FETCH_COUNTRIES_ERROR;
    payload: string;
}


interface FetchCountryAction {
    type: CountriesActionTypes.FETCH_COUNTRY;
}
interface FetchCountrySuccessAction {
    type: CountriesActionTypes.FETCH_COUNTRY_SUCCESS;
    payload: any[]
}
interface FetchCountryErrorAction {
    type: CountriesActionTypes.FETCH_COUNTRY_ERROR;
    payload: string;
}


export type CountriesAction = FetchCountriesAction | FetchCountriesErrorAction | FetchCountriesSuccessAction | FetchCountryAction | FetchCountrySuccessAction | FetchCountryErrorAction
