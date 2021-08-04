import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const CustomSelectProps = props => {
  return (
    <Select
      {...props}
      isSearchable
      options={options}
    />
  );
};

export default CustomSelectProps;