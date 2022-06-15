import React, {FC} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 36px;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  color: ${({theme}) => theme.color.gray};
  padding: 0 0.5rem;
`;

interface InputProps {
  value: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input: FC<InputProps> = ({value, placeholder, onChange}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input;
