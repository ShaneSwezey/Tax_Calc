import React from 'react';

const Result = ({title, data, percent}) => (
    <div>
        <h1>{title}</h1>
        <div>{data}<span>{percent ? '%' : ''}</span></div>
    </div>
);

export default Result;