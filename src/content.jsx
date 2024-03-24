import { useState } from "react"

export default function Content() {
  const [activeId, setActiveId] = useState(false)
  const toggleAccordion = (id) => {
    if (id === activeId) {setActiveId('')} 
    else {setActiveId(id)}
  }

  return<div id='content' 
    className='bg-slate-700 p-1 flex basis-full flex-col h-full overflow-y-auto
    rounded-3xl rounded-t-none md:rounded-3xl md:rounded-l-none'
  >
    <div id='projects' onClick={() => toggleAccordion('projects')}
      className={`${activeId === 'projects' ? 'basis-full' : ''}
      bg-slate-900 cursor-pointer p-3 my-1 rounded-3xl flex flex-col`}
    >
      <div className='flex justify-between text-lg'>
        <span>Projects</span>
        <span className='text-2xl'>+</span>
      </div>
      <div className={`${activeId === 'projects' ? '' : 'hidden'}
       bg-slate-800 rounded-3xl p-4 mt-2 h-full`}
      >
        Content goes here
      </div>
    </div>

    <div id='blog' onClick={() => toggleAccordion('blog')}
      className={`${activeId === 'blog' ? 'basis-full' : ''}
      bg-slate-900 cursor-pointer p-3 my-1 rounded-3xl flex flex-col`}
    >
      <div className='flex justify-between text-lg'>
        <span>Blog</span>
        <span className='text-2xl'>+</span>
      </div>
      <div className={`${activeId === 'blog' ? '' : 'hidden'}
       bg-slate-800 rounded-3xl p-4 mt-2 h-full`}
      >
        Content goes here
      </div>
    </div>
  </div>
}
