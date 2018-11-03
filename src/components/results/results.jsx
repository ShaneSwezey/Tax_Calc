import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';

class Results extends Component {
    render() {
        const resultsData = {
            year: this.props.year,
            taxBracket: this.props.taxBracket,
            taxAmount: (Math.floor(this.props.taxAmount * 100) / 100).toLocaleString('en'),
            percOfInc: this.props.percOfInc,
            rate: this.props.rates
        };
        
        if (resultsData.year === null) return ( <div></div> );

        return (
            <article id="results">
                <section>
                    <h1>Results</h1>
                    <Result title="Year" data={resultsData.year}/>
                    <Result title="Tax Bracket" data={resultsData.taxBracket} percent="t"/>
                    <Result title="Tax Amount" data={resultsData.taxAmount} dollarSign="t"/>
                    <Result title="Percentage of Income" data={resultsData.percOfInc} percent="t"/>
                </section>
            </article>
        );
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