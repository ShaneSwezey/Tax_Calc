import React from 'react';
import './Result.css';

const PercentResult = ({ title, data }) => (
    <div className="resultBox">
        <h1>{title}</h1>
        <hr/>
        <div>{data}%</div>
    </div>
);

export default PercentResult;