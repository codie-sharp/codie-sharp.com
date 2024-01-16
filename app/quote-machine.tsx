/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react';
import quoteMachineData from './quote-machine-data.json';
const { quotes, colors } = quoteMachineData;

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
    <div id="quote-machine" className='min-w-full text_shadow border_ p-4 text-center drop-shadow-xl' style={{background: `linear-gradient(to right top, ${color.gradient1}, ${color.gradient2})`}}>
      <p id="quote-text" className='text-xl font-bold'>"{quote.quote}"</p><br/>
      <p id="quote-author" className='italic text-lg'>- {quote.author}</p><br/>
      <button id="quote-button" className='p-4 text-lg font-bold rounded-full drop-shadow-xl' style={{background: color.button}} onClick={nextQuote}>Next Quote</button>
    </div>
  );
}

// transition, gradient, button that doesn't rerender
// perhaps render next quote off screen and horizontally scroll to it