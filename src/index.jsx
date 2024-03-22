import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import ModelViewer from './model-viewer'
import Intro from './intro'
import Content from './content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className='flex flex-col text-lg
      lg:h-full lg:flex-row'
    >
      <Intro/>
      <Content/>
      {/* <ModelViewer/> */}
    </main>
  </React.StrictMode>,
)
