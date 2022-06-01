import React from 'react';
import styles from './Quotes.module.css';

function Quotes() {
  return (
    <div className={styles.quotes}>
      <h1>Quotes from Mathematicians</h1>
      <ul>
        <li>
          Pure mathematics is, in its way, the poetry of logical ideas.
          <br />
          — Albert Einstein, German theoretical physicist
        </li>
        <li>
          Without mathematics, there’s nothing you can do. Everything around you is mathematics.
          Everything around you is numbers.
          <br />
          — Shakuntala Devi, Indian writer and mental calculator
        </li>
        <li>
          Mathematics is the most beautiful and most powerful creation of the human spirit.
          <br />
          — Stefan Banach, Polish mathematician
        </li>
        <li>
          As far as the laws of mathematics refer to reality, they are not certain,
          and as far as they are certain, they do not refer to reality.
          <br />
          — Albert Einstein
        </li>
        <li>
          What is mathematics? It is only a systematic effort of solving puzzles posed by nature.
          <br />
          — Shakuntala Devi
        </li>
      </ul>
    </div>

  );
}

export default Quotes;
