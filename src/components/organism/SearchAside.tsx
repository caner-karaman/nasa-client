import React from 'react';
import Logo from "../../assets/images/nasa-logo.svg";
import {Input} from "../atom";
import styled from 'styled-components';

const Aside = styled.aside`
  background-color: #0a1544;
  height: 100vh;
  width: 260px;
`;

const FormTitle = styled.h2`
  color: ${({theme}) => theme.color.white};
  font-size: 2em;
  margin-bottom: 0.75rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const FormWrapper = styled.form`
  padding: 0 1rem;
`

const SearchAside = () => {
  return(
    <Aside>
      <ImageWrapper>
        <img src={Logo} alt="nasa logo" />
      </ImageWrapper>
      <FormWrapper>
        <FormTitle>Search</FormTitle>
        <Input value='' placeholder='Name'/>
      </FormWrapper>
    </Aside>
  )
}

export default SearchAside;
