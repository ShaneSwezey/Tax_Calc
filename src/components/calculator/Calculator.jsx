import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filingStatus: 'single',
            income: 0,
            incomeYears: []
        }

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }

    handleStatusChange(event) {
        this.setState({filingStatus: event.target.value});
    }

    incomeChange(event) {
        this.setState({ income: event.target.value });
    }
 
    async callApi() {
        try {
            const result = await fetch(`http://localhost:3001/${this.state.filingStatus}`);
            console.log(result.json());
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        let initialYears = [];
        try {
            const result = await fetch(`http://localhost:3001/years/`);
            const resJson = await result.json(); 
            initialYears = resJson[0].years;
            this.setState({ incomeYears: initialYears});
            console.log(initialYears);
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        let yearOptions = this.state.incomeYears.map((year) => 
            <option key={year} value={year}>{year}</option>
        );

        if (!yearOptions) { return null; }

        return (
            <article id="Calc">
                <section id="CalcSection">
                    <h1>Federal Income Tax Bracket Calculator</h1>
                    <label htmlFor="FilingStatus">Filing Status</label>
                    <select id="FilingStatus" name="filing_status" value={this.state.filingStatus} onChange={this.handleStatusChange}>
                        <option value="single">Single</option>
                        <option value="marriedj">Married filing jointly</option>
                        <option value="marrieds">Married filing separately</option>
                        <option value="household">Head of household</option>
                    </select>
                    <label htmlFor="AnnualWages">Annual Wages</label>
                    <div className="Dollarsign">
                        <input type="number" id="AnnualWages" min="1" step="any" value={this.state.income} onChange={this.incomeChange}></input>
                    </div>
                    <label htmlFor="IncomeYear">Income Year</label>
                    <select id="IncomeYear">
                        {yearOptions}
                    </select>
                </section>
                <section>
                    <div id="CalcButtonWrapper">
                        <button className="Button" id="CalcButton" onClick ={this.callApi}>Calculate</button>
                    </div>
                </section>
            </article>
        );
    }
}

export default Calculator;