/*
Reducers => funciones puras
Dado un valor de state y una accion, retorna el valor del state modificado
state es inmutable => copia el state actual y le agrega el valor de la modificación
*/

import { HANDLE_PAGE, HANDLE_SEARCH, SET_STORIES, SET_LOADING } from "../types";

const initialState = {
    isLoading: true,
    hits: [],
    query: "react",
    page: 0,
    nbPages: 0
}

const newsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_LOADING: 
            return {...state, isLoading: true}           
        case SET_STORIES:
            return {...state, isLoading: false, hits: action.payload.hits, nbPages: action.payload.nbPages}            
        case HANDLE_SEARCH:
            return {
                ...state,
                query: action.payload,
                page: 0
            }
        case HANDLE_PAGE:
            if(action.payload === "inc"){
                let nextPage = state.page +1
                if(nextPage > state.nbPages -1) nextPage = 0;
                return {
                    ...state,
                    page: nextPage
                }
            }
            if(action.payload === "dec"){
                let prevPage = state.page -1
                if(prevPage < 0 ) prevPage = state.nbPages -1;
                return {
                    ...state,
                    page: prevPage
                }
                }
                break;  
                default:
            return state;
    }
}

export default newsReducer;