import React from 'react';
import styled from 'styled-components';
import { Container } from '../atom';
import SearchAside from "../organism/SearchAside";

const Wrapper = styled(Container)`
  display: flex;
`;

const Main = styled.main`
  width: 100%;
`

const SearchTemplate = () => {
  return (
    <Wrapper>
      <SearchAside></SearchAside>
      <Main></Main>
    </Wrapper>  
  )
};

export default SearchTemplate;
