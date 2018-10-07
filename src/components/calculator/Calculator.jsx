import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
    render() {
        return (
            <article id="Calc">
                <section id="CalcSection">
                    <h1>Federal Income Tax Bracket Calculator</h1>
                    <div className="FloatLeftBox">
                        <label for="FilingStatus">Filing Status</label>
                        <select id="FilingStatus" name="filing_status">
                            <option value="single">Single</option>
                            <option value="marriedj">Married filing jointly</option>
                            <option value="marrieds">Married filing separately</option>
                            <option value="household">Head of household</option>
                        </select>
                    </div>
                    <div className="FloatRightBox">
                        <label for="AnnualWages">Annual Wages</label>
                        <div className="Dollarsign">
                            <input type="number" id="AnnualWages" min="1" step="any"></input>
                        </div>
                    </div>
                </section>
                <section>
                    <div id="CalcButtonWrapper">
                        <button className="Button" id="CalcButton">Calculate</button>
                    </div>
                </section>
            </article>
        );
    }
}

export default Calculator;