import React from 'react';

const FormattedDate = ({ isoDateTime }) => {

  const date = new Date(isoDateTime);
  const ukFormat = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (<span className={'date'}>{ukFormat}</span>);
};

export default FormattedDate;