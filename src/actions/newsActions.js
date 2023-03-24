import { HANDLE_PAGE, HANDLE_SEARCH, SET_LOADING, SET_STORIES } from "../types"
//action creators

export const loadingAction = (loading) => ({type: SET_LOADING, payload: loading});

export const setStoriesAction = (data) => ({type: SET_STORIES, payload: data});

export const handlePageAction= (value) => ({type: HANDLE_PAGE, payload: value});

export const handleSearchAction = (query) => ({type: HANDLE_SEARCH, payload: query});

