import React from 'react';
import Logo from "../../assets/images/nasa-logo.svg";
import { Input, Dropdown } from "../atom";
import styled from 'styled-components';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { ILabelValue } from '../atom/dropdown/Dropdown';
import request from '../../common/service';

const Aside = styled.aside`
  width: 260px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.3);
  padding-bottom: 20px;
  background-color: ${({theme}) => theme.color.white};
  min-height: 100vh;
`;

const FormTitle = styled.h2`
  color: ${({theme}) => theme.color.black};
  font-size: 2em;
  margin-bottom: 0.75rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 2rem;
`;

const FormWrapper = styled.form`
  padding: 0 1rem;
`;

const Row = styled.div`
  margin: 7px 0;
`;

const ErrorLabel = styled.p`
  color: ${({theme}) => theme.color.error};
  font-size: 12px;
  text-align: right;
  margin: 5px 0 0;
`

const YEARS: ILabelValue[] = [
  {label: '2022', value: '2022'},
  {label: '2021', value: '2021'},
  {label: '2020', value: '2020'},
  {label: '2019', value: '2019'},
  {label: '2018', value: '2018'},
  {label: '2017', value: '2017'},
];

type Inputs = {
  name: string,
  startDate: ILabelValue,
  endDate: ILabelValue,
};

interface IParams {
  media_type: 'image';
  q: string;
  year_start?: string;
  year_end?: string;
}

const SearchAside = () => {
  const { control, handleSubmit, formState: {errors} } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({name, startDate, endDate}) => {
    const params: IParams = {
      media_type: 'image',
      q: name,
    }
    if(startDate?.value) params['year_start'] = startDate.value;
    if(endDate?.value) params['year_end'] = endDate.value;
    request.get('/search', {
      
      params: params
    });
  }

  return(
    <Aside>
      <ImageWrapper>
        <img src={Logo} alt="nasa logo" />
      </ImageWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Search</FormTitle>
        <Row>
          <Controller
            name="name"
            rules={{required: true}}
            control={control}
            render={({ field }) => <Input placeholder='Name' {...field} />}
          />
          {errors.name && <ErrorLabel>You need to fill this input</ErrorLabel> }
        </Row>
        <Row>
          <Controller
            name="startDate"
            control={control}
            render={({ field: {value, onChange} }) => <Dropdown placeholder='Start Date' value={value} onChange={onChange} options={YEARS} />}
          />
        </Row>
        <Row>
          <Controller
            name="endDate"
            control={control}
            render={({ field: {value, onChange} }) => <Dropdown placeholder='End Date' value={value} onChange={onChange} options={YEARS} />}
          />
        </Row>
        <button type="submit">Search</button>
      </FormWrapper>
    </Aside>
  )
}

export default SearchAside;
