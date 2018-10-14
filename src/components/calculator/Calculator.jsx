import React, { Component } from 'react';
import Form from './Form';
import './Calculator.css';

class Calculator extends Component {
    render() {
        return (
            <article id="Calc">
                <section id="CalcSection">
                    <Form />
                </section>
            </article>
        );
    }
}

export default Calculator;