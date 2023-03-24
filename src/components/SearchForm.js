import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSearchAction } from '../actions/newsActions';

const SearchForm = () => {
    const {query} = useSelector(store => store.news);
    const dispatch = useDispatch();

  return (
    <div>
    <div className='form-container'>
    <input type="text" className='input' value={query} onChange={(e) => dispatch(handleSearchAction(e.target.value))}></input>
    </div>
    </div>
  )
}

export default SearchForm
