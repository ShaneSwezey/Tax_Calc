import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailableYears } from '../../actions/yearActions';
import { reduxForm } from 'redux-form';
import './Calculator.css';

class Form extends Component { 
    callApi = async(event) => {
        event.preventDefault();
        try {
            const url = `http://localhost:3001/${this.state.filingStatus}/${this.state.filingYear}/${this.state.income}`;
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

        const { error, loading, incomeYears, filingYear, filingStatus, income } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }
        
        if (loading) {
            return <div>Loading...</div>;
        }
        
        return (
            <form onSubmit={this.callApi}>
                <h1>Federal Income Tax Bracket Calculator</h1>
                    <div className="floatLeft">
                        <label htmlFor="FilingStatus">Filing Status</label>
                        <select id="FilingStatus" name="filing_status" value={filingStatus} onChange={this.handleStatusChange}>
                            {statusSelections.map(selection => 
                                <option key={selection.key} value={selection.key}>{selection.value}</option>
                            )}
                        </select>
                    </div>
                    <div className="floatLeft marginAuto">
                    <label htmlFor="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <input type="number" id="AnnualWages" min="1" step="any" value={income} onChange={this.handleIncomeChange}></input>
                        </div>
                    </div>
                    <div className="floatRight" >
                        <label htmlFor="IncomeYear" >Income Year</label>
                        <select id="IncomeYear" value={filingYear} onChange={this.handleYearChange}>
                            {incomeYears.map((year, count = 0) => 
                                <option key={count++} value={year}>{year}</option>
                            )}
                        </select>
                    </div>
                    <div id="CalcButtonWrapper">
                        <button className="Button" id="CalcButton" >Calculate</button>
                    </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    incomeYears: state.year.incomeYears,
    filingYear: state.year.filingYear,
    filingStatus: state.year.filingStatus,
    income: state.year.income,
    error: state.year.error,
    loading: state.year.loading
});

export default connect(mapStateToProps)(Form);