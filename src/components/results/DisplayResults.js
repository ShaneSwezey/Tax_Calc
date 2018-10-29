import React from 'react';

const DisplayResults = props => {
    <article id="results">
        <div>Year: {props.year}</div>
        <div>Tax Bracket: {props.taxBracket}</div>
        <div>Amount Taxed: ${props.taxAmount}</div>
        <div>Percentage of Income: {props.percOfInc}</div>
    </article>
};

export default DisplayResults;