import React, { Component } from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="cal-answer">
          <div className="answer">
            0
          </div>
        </div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="sign" type="button">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="sign" type="button">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="sign" type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="sign" type="button">+</button>
        <button className="number zero" type="button">0</button>
        <button type="button">.</button>
        <button className="assign" type="button">=</button>

      </div>
    );
  }
}

export default Calculator;
