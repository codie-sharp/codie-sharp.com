import { useState } from 'react'
import Card from './card'
import ModelViewer from './model-viewer'
import PortalRed from './models/portal-red'

export default function Content() {
  const [activeId, setActiveId] = useState(false)
  const toggleAccordion = (id) => {
    if (id === activeId) {setActiveId('')} 
    else {setActiveId(id)}
  }
  
  return<div id='content' 
    className='bg-slate-700 p-1 flex basis-full flex-col h-full
    rounded-3xl rounded-t-none md:rounded-3xl md:rounded-l-none overflow-hidden'
  >
    <div id='projects'
      className={`${activeId === 'projects' ? 'basis-full' : ''}
      bg-slate-900 my-1 rounded-3xl flex flex-col
      overflow-hidden`}
    >
      <div onClick={() => toggleAccordion('projects')} 
        className='cursor-pointer py-3 px-6 flex justify-between text-lg'
      >
        <span>Projects</span>
        <span className='text-2xl'>+</span>
      </div>
      <div className={`${activeId === 'projects' ? '' : 'hidden'}
       bg-slate-800 rounded-3xl p-2 m-2 h-full flex flex-col 
       md:flex-row items-center lg:items-start overflow-auto
       md:overflow-y-hidden`}
      >
        <Card image={'portal-red-render.jpg'}
          tags={['Blender', 'Three.js', 'React']}
        >
          <ModelViewer>
            <PortalRed/>
          </ModelViewer>
        </Card>
      </div>
    </div>

    <div id='blog'
      className={`${activeId === 'blog' ? 'basis-full' : ''}
      bg-slate-900 my-1 rounded-3xl flex flex-col
      overflow-hidden`}
    >
      <div onClick={() => toggleAccordion('blog')}
        className='cursor-pointer py-3 px-6 flex justify-between text-lg'
      >
        <span>Blog</span>
        <span className='text-2xl'>+</span>
      </div>
      <div className={`${activeId === 'blog' ? '' : 'hidden'}
       bg-slate-800 rounded-3xl p-4 mt-2 h-full text-center text-3xl overflow-auto`}
      >
        Blog posts coming soon!
      </div>
    </div>
  </div>
}
