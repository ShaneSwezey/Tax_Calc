import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailableYears } from '../../actions/yearActions';
import { retrieveBracketInfo } from '../../actions/infoActions';
import { reduxForm, Field } from 'redux-form';
import './Calculator.css';

class TaxBracketForm extends Component { 
    
    getBracketInfo = (values) => {
        retrieveBracketInfo(values);
    }


    // Initialize form with respecting data from props
    handleInitialization() {
        const intialData = {
            "filing_status": this.props.filingStatus,
            "annual_wages": this.props.income,
            "income_year": this.props.incomeYears[0]
        };
        this.props.initialize(intialData);  
    }

    async componentDidMount() {
      await this.props.dispatch(getAvailableYears());
      this.handleInitialization();
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
            <form onSubmit={handleSubmit(this.getBracketInfo.bind(this))}>
                <h1>Federal Income Tax Bracket Calculator</h1>
                    <div className="floatLeft">
                        <label htmlFor="FilingStatus">Filing Status</label>
                        <Field component="select" id="FilingStatus" name="filing_status">
                            {statusSelections.map(selection => 
                                <option key={selection.key}>{selection.value}</option>
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
                            {incomeYears.map(year => 
                                <option key={year}>{year}</option>
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


// Populate prop with state values 
TaxBracketForm = connect( state => ({
    incomeYears: state.year.incomeYears,
    filingStatus: state.year.filingStatus,
    income: state.year.income,
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