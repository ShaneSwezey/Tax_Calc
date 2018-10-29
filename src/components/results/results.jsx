import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
    
    render() {
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
}

const mapStateToProps = state => ({
    error: state.bracket.error,
    loading: state.bracket.loading,
    year: state.bracket.year,
    taxBracket: state.bracket.taxBracket,
    taxAmount: state.bracket.taxAmount,
    percOfInc: state.bracket.percOfInc,
    rates: state.bracket.rates
});

export default connect(mapStateToProps)(Results);