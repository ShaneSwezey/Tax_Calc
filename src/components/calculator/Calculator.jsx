import React, { Component } from 'react';
import TaxBracketForm from './TaxBracketForm';
import './Calculator.css';


const Calculator = props => (
    <article id="Calc">
        <section id="CalcSection">
            <TaxBracketForm />
        </section>
    </article>
)

export default Calculator;