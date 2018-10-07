import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filingStatus: 'single',
            income: 0
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
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <article id="Calc">
                <section id="CalcSection">
                    <h1>Federal Income Tax Bracket Calculator</h1>
                    <div className="FloatLeftBox">
                        <label for="FilingStatus">Filing Status</label>
                        <select id="FilingStatus" name="filing_status" value={this.state.filingStatus} onChange={this.handleStatusChange}>
                            <option value="single">Single</option>
                            <option value="marriedj">Married filing jointly</option>
                            <option value="marrieds">Married filing separately</option>
                            <option value="household">Head of household</option>
                        </select>
                    </div>
                    <div className="FloatRightBox">
                        <label for="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <input type="number" id="AnnualWages" min="1" step="any" value={this.state.income} onChange={this.incomeChange}></input>
                        </div>
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