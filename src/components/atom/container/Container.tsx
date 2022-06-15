import React, { FC } from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 70rem;
  margin: 0 auto;
`

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({children, className}) => {
  return(
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}

export default Container;
