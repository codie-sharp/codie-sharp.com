import { useState } from "react"

export default function Accordion({title, content}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return <div id={title} onClick={toggleAccordion}
    className='bg-slate-900 cursor-pointer p-3 my-1 rounded-3xl
      '>
    <div className='flex justify-between text-lg'>
      <span>{title}</span>
      <span className='text-2xl'>{isOpen ? '-' : '+'}</span>
    </div>
    <div className={isOpen ? 'bg-slate-800 rounded-3xl p-4 mt-2' 
      : 'hidden'}>
      {content}
    </div>
  </div>
}