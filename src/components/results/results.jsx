import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result.jsx';
import PercentResult from './PercentResult.jsx';
import DollarResult from './DollarResult';

class Results extends Component {
    render() {
        const resultsData = {
            year: this.props.year,
            taxBracket: this.props.taxBracket,
            taxAmount: this.props.taxAmount === null ? null : this.props.taxAmount.toLocaleString('en'), // Number formatting
            percOfInc: this.props.percOfInc,
            socialSecurityTax: this.props.socialSecurityTax,
            medicareTax: this.props.medicareTax,
            rate: this.props.rates
        };
        
        if (resultsData.year === null) return null;

        return (
            <article id="results">
                <section>
                    <h1>Results</h1>
                    <Result title="Year" data={resultsData.year}/>
                    <PercentResult title="Tax Bracket" data={resultsData.taxBracket}/>
                    <DollarResult title="Tax Amount" data={resultsData.taxAmount} />
                    <PercentResult title="Percentage of Income" data={resultsData.percOfInc} />
                    <DollarResult title="Social Security Tax" data={resultsData.socialSecurityTax} />
                    <DollarResult title="Medicare Tax" data={resultsData.medicareTax} />
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
    socialSecurityTax: state.bracket.socialSecurityTax,
    medicareTax: state.bracket.medicareTax,
    rates: state.bracket.rates
});

export default connect(mapStateToProps)(Results);