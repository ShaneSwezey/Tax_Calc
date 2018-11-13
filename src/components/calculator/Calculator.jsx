import React from 'react';
import Title from '../title/Title';
import TaxBracketForm from './TaxBracketForm';
import './Calculator.css';
import CalcImg from '../../assets/img/calculator.png';

const title = 'Federal Income Tax Bracket Calculator';

const Calculator = () => (
    <article id="Calc">
        <section id="CalcSection">
            <Title headerTitle={title} imgSrc={CalcImg} altMessage={title}/>
            <TaxBracketForm />
        </section>
    </article>
);

export default Calculator;

// Icon made by Freepik from www.flaticon.com 