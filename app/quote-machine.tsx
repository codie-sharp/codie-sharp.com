/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react';
import { quotes, colors } from './quote-machine-data.json';

export default function QuoteMachine() {
  const [quoteArray, setQuoteArray] = useState(quotes.slice());
  const [quote, setQuote] = useState(getRandomQuote);
  const [colorArray, setColorArray] = useState(colors.slice());
  const [color, setColor] = useState(getRandomColor);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    const newQuote = quoteArray[randomIndex];
    const newQuoteArray = quoteArray.filter((_, index) => index !== randomIndex);
    newQuoteArray.length > 0 ? setQuoteArray(newQuoteArray) : setQuoteArray(quotes.slice().filter(q => q !== newQuote));
    return newQuote;
  }
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    const newColor = colorArray[randomIndex];
    const newColorArray = colorArray.filter((_, index) => index !== randomIndex);
    newColorArray.length > 0 ? setColorArray(newColorArray) : setColorArray(colors.slice().filter(c => c !== newColor));
    return newColor;
  }
  function nextQuote() {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }

  return (
    <div id="quote-machine" className={`w-10/12 ${color} text-center`}>
      <p id="quote" className="text-xl">"{quote.quote}"</p><br/>
      <p id="author" className="italic text-lg text-light">- {quote.author}</p><br/>
      <button className={`text-lg`} onClick={nextQuote}>Next Quote</button>
    </div>
  );
}
