import { useState } from 'react'
import Card from './card'
import ModelViewer from './model-viewer'
import PortalRed from './models/portal-red'
import Mosh from './models/mosh'

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
    <div id='projects-heading'
      className={`${activeId === 'projects' ? 'basis-full' : 'hover:ring-1 hover: ring-yellow-600'}
      bg-slate-900 my-1 rounded-3xl flex flex-col overflow-hidden shadow-lg`}
    >
      <div onClick={() => toggleAccordion('projects')} 
        className='cursor-pointer py-3 px-6 flex justify-between'
      >
        <span className='sm:text-xl lg:text-2xl tracking-wide'>Projects</span>
        <span className='text-2xl sm:text-3xl'>
          {activeId === 'projects' ? '-' : '+'}
        </span>
      </div>
      <div id='projects-body' className={`${activeId === 'projects' ? '' : 'hidden'}
        bg-slate-800 rounded-3xl p-2 h-full flex flex-col md:flex-wrap md:justify-around
        md:flex-row items-center md:items-start overflow-auto`}
      >
        <Card image={'models/portal-red/portal-red-render.jpg'}
          title={'Red Portal'} tags={['Blender', 'Three.js']}
          description={`My first 3D scene, created with Blender using noise nodes for 
          textures and baked to optimize rendering in the browser with Three.js. It was
          inspired by my experiences doing wildfire rehabilitation in California, with
          a supernatural twist.`}
        >
          <ModelViewer>
            <PortalRed/>
          </ModelViewer>
        </Card>

        <Card image={'models/mosh/mosh.jpg'}
          title={'Mosh'} tags={['Blender', 'Inkscape']}
          description={`My debut animation, built in Blender with particle and 
          force field systems, brings a mosh pit's energy to life with vibrant 
          bouncing shapes. Inspired by the unifying spirit of moshing, 
          the animation abstracts the experience of diverse individuals 
          coming together in a dynamic, colorful whole.`}
        >
          <Mosh/>
        </Card>
      </div>
    </div>

    <div id='blog-heading'
      className={`${activeId === 'blog' ? 'basis-full' : 'hover:ring-1 hover: ring-yellow-600'}
      bg-slate-900 my-1 rounded-3xl flex flex-col overflow-hidden shadow-lg`}
    >
      <div onClick={() => toggleAccordion('blog')}
        className='cursor-pointer py-3 px-6 flex justify-between'
      >
        <span className='sm:text-xl lg:text-2xl tracking-wide'>Blog</span>
        <span className='text-2xl sm:text-3xl'>
          {activeId === 'blog' ? '-' : '+'}
        </span>
      </div>
      <div id='blog-body' className={`${activeId === 'blog' ? '' : 'hidden'}
       bg-slate-800 rounded-3xl p-4 mt-2 h-full text-center text-3xl overflow-auto`}
      >
        Blog posts coming soon!
      </div>
    </div>
  </div>
}
