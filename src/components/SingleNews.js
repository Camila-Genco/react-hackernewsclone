import React from 'react'
import "./news.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingAction, setStoriesAction } from '../actions/newsActions';

const SingleNews = () => {
    const dispatch = useDispatch();
    const API = "https://hn.algolia.com/api/v1/search?";
    const {hits, isLoading, query, page} = useSelector((store) => store.news);

    useEffect(() => {
        const fecthStories = async(url) => {
            dispatch(loadingAction(true));
            try {
                const response = await fetch(url);
                const data = await response.json();
                dispatch(setStoriesAction({hits: data.hits, nbPages: data.nbPages}))
            } catch (error) {
                console.log(error);
            }
        }

        fecthStories(`${API}query=${query}&page=${page}`)}, 
        [query, dispatch, page])
    
          if (isLoading){
            return <div className='loading-container'><div className="lds-facebook"><div></div><div></div><div></div></div></div>;
          }


  return (
    <div className='card-container'>
    {hits.map((story) => {
        const {objectID, title, num_comments, url, author, created_at} = story;
        return (
            <div className='card' key= {objectID}>
                <div className='card-header'> <i>@{author}</i></div>
                <div className='card-content'>
                    <div className='card-title' >{title}</div>
                    <div className= 'card-text'>
                        <span className='date'>Release Date : {created_at}</span>
                    </div>
                    <div className= 'card-text'>
                        <span className='comments' >Comments : {num_comments}</span>
                    </div>
                    <button className='btn-news'><a href={url}>Details</a></button>
                </div>                
        </div>
        )        
    })}
    </div>
  )
}

export default SingleNews
