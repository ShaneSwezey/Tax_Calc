import React from 'react';

const DisplayResults = ({data: { year, taxBracket, taxAmount, percOfInc, rates }}) => (
    <div>
        <div>Year: {year}</div>
        <div>Tax Bracket: {taxBracket}%</div>
        <div>Amount Taxed: ${taxAmount}</div>
        <div>Percentage of Income: {percOfInc}%</div>
    </div>
);

export default DisplayResults;