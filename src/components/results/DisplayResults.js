import React from 'react';

const DisplayResults = ({data: { year, taxBracket, taxAmount, percOfInc, rates }}) => (
    <article id="results">
        <div>Year: {year}</div>
        <div>Tax Bracket: {taxBracket}</div>
        <div>Amount Taxed: ${taxAmount}</div>
        <div>Percentage of Income: {percOfInc}</div>
    </article>
);

export default DisplayResults;