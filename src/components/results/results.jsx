import React from 'react';
import { connect } from 'react-redux';

const Results = props => {
    
    let { year, taxBracket, taxAmount, percOfInc, rates } = this.props;

    if (year === null) return ( <div></div> )

    return (
        <article id="results">
            <div>Year: {year}</div>
            <div>Tax Bracket: {taxBracket}</div>
            <div>Amount Taxed: ${taxAmount}</div>
            <div>Percentage of Income: {percOfInc}</div>
        </article>
    )
}

const mapStateToProps = state => ({
    error: state.error,
    loading: state.loading,
    year: state.year,
    taxBracket: state.taxBracket,
    taxAmount: state.taxAmount,
    percOfInc: state.percOfInc,
    rates: state.rates
});

export default connect(mapStateToProps)(Results);