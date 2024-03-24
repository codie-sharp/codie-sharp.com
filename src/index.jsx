import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Intro from './intro'
import Content from './content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex flex-col h-full md:flex-row'>
      <Intro/>
      <Content/>
    </main>
  </React.StrictMode>,
)
