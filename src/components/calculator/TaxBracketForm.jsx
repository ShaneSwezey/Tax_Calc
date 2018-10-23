import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailableYears } from '../../actions/yearActions';
import { reduxForm, Field } from 'redux-form';
import './Calculator.css';

class TaxBracketForm extends Component { 
    callApi = async (values) => {
        try {
            const url = `http://localhost:3001/${values.filing_status}/${values.income_year}/${values.annual_wages}`;
            const result = await fetch(url);
            const jsonResult = await result.json();
            console.log(jsonResult);
        } catch (error) {
            console.log(error);
        }  
    }

    componentDidMount() {
      this.props.dispatch(getAvailableYears());
    }

    render() {
        const statusSelections = [{ key: 'single', value: 'Single'}, 
        {key: 'marriedj', value: 'Married filing jointly'}, {key: 'marrieds', value: 'Married filing Seperately'}, 
        {key: 'household', value: 'Head of household'}];

        const { error, loading, incomeYears, handleSubmit } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }
        
        if (loading) {
            return <div>Loading...</div>;
        }
        
        return (
            <form onSubmit={handleSubmit(this.callApi.bind(this))}>
                <h1>Federal Income Tax Bracket Calculator</h1>
                    <div className="floatLeft">
                        <label htmlFor="FilingStatus">Filing Status</label>
                        <Field component="select" id="FilingStatus" name="filing_status">
                            {statusSelections.map(selection => 
                                <option key={selection.key} value={selection.key}>{selection.value}</option>
                            )}
                        </Field>
                    </div>
                    <div className="floatLeft marginAuto">
                    <label htmlFor="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <Field component="input" type="number" id="AnnualWages" name="annual_wages" min="1" step="any"></Field>
                        </div>
                    </div>
                    <div className="floatRight" >
                        <label htmlFor="IncomeYear" >Income Year</label>
                        <Field component="select" id="IncomeYear" name="income_year">
                            {incomeYears.map((year, count = 0) => 
                                <option key={count++} value={year}>{year}</option>
                            )}
                        </Field>
                    </div>
                    <div id="CalcButtonWrapper">
                        <button className="Button" id="CalcButton" >Calculate</button>
                    </div>
            </form>
        );
    }
}

TaxBracketForm = reduxForm({
    form: 'taxBracketForm' // Unique identifier
})(TaxBracketForm)

TaxBracketForm = connect( state => ({
    incomeYears: state.year.incomeYears,
    error: state.year.error,
    loading: state.year.loading
}))(TaxBracketForm)

/*
const mapStateToProps = state => ({
    incomeYears: state.year.incomeYears,
    filingYear: state.year.filingYear,
    filingStatus: state.year.filingStatus,
    income: state.year.income,
    error: state.year.error,
    loading: state.year.loading
});
*/

export default TaxBracketForm;