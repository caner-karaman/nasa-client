import React from 'react';
import SearchAside from "../organism/SearchAside";

const SearchTemplate = () => {
  return (
    <div className='flex'>
      <SearchAside></SearchAside>
      <main></main>
    </div>  
  )
};

export default SearchTemplate;
