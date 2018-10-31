import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayResults from './DisplayResults';

class Results extends Component {
    render() {
        const resultsData = {
            year: this.props.year,
            taxBracket: this.props.taxBracket,
            taxAmount: this.props.taxAmount,
            percOfInc: this.props.percOfInc,
            rate: this.props.rates
        };
        
        if (resultsData.year === null) return ( <div></div> );

        return (
            <article id="results">
                <DisplayResults data={resultsData}/>
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