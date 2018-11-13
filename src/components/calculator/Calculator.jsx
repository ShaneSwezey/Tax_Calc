import React from 'react';
import TaxBracketForm from './TaxBracketForm';
import './Calculator.css';


const Calculator = () => (
    <article id="Calc">
        <section id="CalcSection">
            <h1>Federal Income Tax Bracket Calculator</h1>
            <TaxBracketForm />
        </section>
    </article>
)

export default Calculator;