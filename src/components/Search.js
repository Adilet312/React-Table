import React ,{useState,useEffect,useContext,Fragment} from 'react';
import {ContextBook} from './App';


const Search =() =>{
  const {onSearch,searchTerm} = useContext(ContextBook);
  return(
    <Fragment>
      <input type = 'search' placeholder = 'Search' value = {searchTerm} onChange = {(e)=>onSearch(e.target.value)}/>
   </Fragment>
  )
}
export default Search;
