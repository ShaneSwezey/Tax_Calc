import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAvailableYears } from '../../actions/yearActions';
import './Calculator.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }

    handleStatusChange = event => {
        this.setState({ filingStatus: event.target.value });
    }

    incomeChange = event => {
        this.setState({ income: event.target.value });
    }

    handleYearChange = event => {
        this.setState({ filingYear: event.target.value })
    }
 
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
        const { error, loading, incomeYears, filingYear, filingStatus,  income } = this.props;

        
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
                            <option value="single">Single</option>
                            <option value="marriedj">Married filing jointly</option>
                            <option value="marrieds">Married filing separately</option>
                            <option value="household">Head of household</option>
                        </select>
                    </div>
                    <div className="floatLeft marginAuto">
                    <label htmlFor="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <input type="number" id="AnnualWages" min="1" step="any" value={income} onChange={this.incomeChange}></input>
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
    incomeYears: state.incomeYears,
    filingYear: state.filingYear,
    filingStatus: state.filingStatus,
    income: state.income,
    error: state.error,
    loading: state.loading
});

export default connect(mapStateToProps)(Form);