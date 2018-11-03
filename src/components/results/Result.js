import React from 'react';
import './Result.css';

// Functional component: displays result data for each category
// Not sure if using a percent and dollarSign argument for displaying symbols is the best
// way of handing display cases. Might revise in future.
const Result = ({title, data, percent, dollarSign}) => (
    <div className="resultBox">
        <h1>{title}</h1>
        <hr/>
        <div><span>{dollarSign ? '$' : ''}</span>{data}<span>{percent ? '%' : ''}</span></div>
    </div>
);

export default Result;