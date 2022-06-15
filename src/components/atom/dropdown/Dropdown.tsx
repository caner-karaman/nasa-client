import React, { FC } from 'react';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';

export interface ILabelValue {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: Array<ILabelValue>;
  placeholder?: string;
  value: ILabelValue;
  onChange?(event: Option): void; 
}

const CustomDropdown: FC<CustomDropdownProps> = ({options, value, placeholder, onChange}) => {
  return(
    <Dropdown value={value} placeholder={placeholder} options={options} onChange={onChange}/>
  )
}

export default CustomDropdown;
