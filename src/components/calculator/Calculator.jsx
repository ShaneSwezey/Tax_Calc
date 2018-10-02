import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    render() {
        return (
            <article id="Calc">
                <section id="CalcSection">
                    <h1>Federal Income Tax Calculator</h1>
                    <div className="FloatLeftBox">
                        <label for="FilingStatus">Filing Status</label>
                        <select id="FilingStatus" name="filing_status">
                            <option value="single">Single</option>
                            <option value="married_filing_jointly">Married filing jointly</option>
                            <option value="married_filing_separately">Married filing separately</option>
                            <option value="head_of_household">Head of household</option>
                        </select>
                        <label for="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <input type="number" id="AnnualWages" min="1" step="any"></input>
                        </div>
                        <label for="SelfWages">Self Employment</label>
                        <div className="Dollarsign">
                            <input type="number" id="SelfWages" min="1" step="any"></input>
                        </div>
                    </div>
                    <div className="FloatRightBox">
                        <label for="SocialSecurity">Social Security</label>
                        <div className="Dollarsign">
                            <input type="number" id="SocialSecurity" min="1" step="any"></input>
                        </div>
                        <label for="UnearnedIncome">Unearned Income </label>
                        <div className="Dollarsign">
                            <input type="number" id="UnearnedIncome" min="1" step="any"></input>
                        </div>
                        <label for="Capitalgains">Capital Gains</label>
                        <div className="Dollarsign">
                            <input type="number" id="Capitalgains" min="1" step="any"></input>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

export default Calculator;