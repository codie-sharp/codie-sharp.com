'use client'

import { useState } from 'react';
import { quotes } from './quotes.json';

export default function QuoteMachine() {
  const [workingArray, setWorkingArray] = useState(quotes.slice());
  const [quote, setQuote] = useState(getRandomQuote);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * workingArray.length);
    const newQuote = workingArray[randomIndex];
    const newWorkingArray = workingArray.filter((_, index) => index !== randomIndex);
    newWorkingArray.length > 0 ? setWorkingArray(newWorkingArray) : setWorkingArray(quotes.slice().filter(q => q !== newQuote));
    return newQuote;
  }

  return (
    <div className="quote-machine">
      <p id="quote">{quote.quote}</p>
      <p id="author">- {quote.author}</p>
      <button onClick={() => setQuote(getRandomQuote)}>Next Quote</button>
    </div>
  );
}
