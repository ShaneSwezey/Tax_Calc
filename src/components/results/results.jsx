import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result.jsx';
import PercentResult from './PercentResult.jsx';
import DollarResult from './DollarResult';
import Chart from '../charts/Chart.jsx';
import ChartOptionFactory from '../charts/chartoptions/ChartOptionFactory';

class Results extends Component {
    render() {
        if (this.props.year == null) return null;
        
        const resultsData = {
            year: this.props.year,
            taxBracket: this.props.taxBracket,
            taxAmount: this.props.taxAmount.toLocaleString('en'), // Number formatting
            percOfInc: this.props.percOfInc,
            socialSecurityTax: this.props.socialSecurityTax.toLocaleString('en'), // Number formatting
            medicareTax: this.props.medicareTax.toLocaleString('en'), // Number formatting
            rate: this.props.rates
        };

        const incomeVsTaxOption = ChartOptionFactory('IncomeVsTaxOption', {
            taxAmount: this.props.taxAmount,
            socialSecurityTax: this.props.socialSecurityTax
        });

        const taxComparisonTaxOption = ChartOptionFactory('TaxComparisonOption', {
            taxAmount: this.props.taxAmount,
            socialSecurityTax: this.props.socialSecurityTax,
            medicareTax: this.props.medicareTax
        });
        
        return (
            <article id="results">
                <section> 
                    <h1>Results</h1>
                        <div className="flexBoxContainer">
                            <Result title="Year" data={resultsData.year}/>
                            <PercentResult title="Top Marginal Tax Bracket" data={resultsData.taxBracket}/>
                            <DollarResult title="Tax Amount" data={resultsData.taxAmount} />
                            <PercentResult title="Percentage of Income" data={resultsData.percOfInc} />
                            <DollarResult title="Social Security Tax" data={resultsData.socialSecurityTax} />
                            <DollarResult title="Medicare Tax" data={resultsData.medicareTax} />
                        </div>
                </section>
                <section className="chart">
                    <Chart options={incomeVsTaxOption}/>
                </section>
                <section className="chart">
                    <Chart options={taxComparisonTaxOption}/>
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