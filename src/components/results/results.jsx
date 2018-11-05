import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result.jsx';
import PercentResult from './PercentResult.jsx';
import DollarResult from './DollarResult';
import Chart from '../charts/Chart.jsx';
import Highcharts from 'highcharts';

class Results extends Component {
    render() {
        if (this.props.year == null) return null;
        
        const resultsData = {
            year: this.props.year,
            taxBracket: this.props.taxBracket,
            taxAmount: this.props.taxAmount.toLocaleString('en'), // Number formatting
            percOfInc: this.props.percOfInc,
            socialSecurityTax: this.props.socialSecurityTax.toLocaleString('en'),
            medicareTax: this.props.medicareTax.toLocaleString('en'),
            rate: this.props.rates
        };
        
        const options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Income Tax Breakdown'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }]
        };


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
                    <Chart  options={options}/>
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