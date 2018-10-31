import React from 'react';

const DisplayResults = ({data: { year, taxBracket, taxAmount, percOfInc, rates }}) => (
    <section>
        <h2>Results</h2>
        <div>Year: {year}</div>
        <div>Tax Bracket: {taxBracket}</div>
        <div>Amount Taxed: ${taxAmount}</div>
        <div>Percentage of Income: {percOfInc}</div>
    </section>
);

export default DisplayResults;