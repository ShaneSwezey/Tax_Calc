import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filingStatus: 'single',
            income: 0,
            filingYear: 0,
            incomeYears: []
        }

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.callApi = this.callApi.bind(this);
    }

    handleStatusChange(event) {
        this.setState({ filingStatus: event.target.value });
    }

    incomeChange(event) {
        this.setState({ income: event.target.value });
    }

    handleYearChange(event) {
        this.setState({ filingYear: event.target.value })
    }
 
    async callApi() {
        try {
            const url = `http://localhost:3001/${this.state.filingStatus}/${this.state.filingYear}`;
            console.log(url);
            const result = await fetch(url);
            const jsonResult = await result.json();
            console.log(jsonResult);
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
            this.setState({ 
                incomeYears: initialYears,
                filingYear: initialYears[0]
            });
            console.log(this.state.filingYear);
            console.log(initialYears);
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        let yearOptions = this.state.incomeYears.map((year, count = 0) => 
            <option key={count++} value={year}>{year}</option>
        );

        if (!yearOptions) { return null; }

        return (
            <article id="Calc">
                <section id="CalcSection">
                    <h1>Federal Income Tax Bracket Calculator</h1>
                    <div className="floatLeft">
                        <label htmlFor="FilingStatus">Filing Status</label>
                        <select id="FilingStatus" name="filing_status" value={this.state.filingStatus} onChange={this.handleStatusChange}>
                            <option value="single">Single</option>
                            <option value="marriedj">Married filing jointly</option>
                            <option value="marrieds">Married filing separately</option>
                            <option value="household">Head of household</option>
                        </select>
                    </div>
                    <div className="floatLeft marginAuto">
                    <label htmlFor="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <input type="number" id="AnnualWages" min="1" step="any" value={this.state.income} onChange={this.incomeChange}></input>
                        </div>
                    </div>
                    <div className="floatRight" >
                        <label htmlFor="IncomeYear" >Income Year</label>
                        <select id="IncomeYear" value={this.state.filingYear} onChange={this.handleYearChange}>
                            {yearOptions}
                        </select>
                    </div>
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