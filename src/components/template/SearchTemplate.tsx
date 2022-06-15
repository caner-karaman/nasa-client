import React from 'react';
import styled from 'styled-components';
import SearchAside from "../organism/SearchAside";

const Wrapper = styled.div`
  display: flex;
`

const SearchTemplate = () => {
  return (
    <Wrapper>
      <SearchAside></SearchAside>
      <main></main>
    </Wrapper>  
  )
};

export default SearchTemplate;
