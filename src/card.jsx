import './style.css'
import { useState } from 'react';

export default function Card({image, title, tags, description, children}) {
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  return <div id={`card-${title}`} className='bg-slate-700 m-2 flex flex-col 
    hover:ring-1 hover: ring-yellow-600 rounded-3xl shadow-lg basis-1/3 grow'
  >
    <img src={`${image}`} onClick={openModal} 
      className='rounded-t-3xl cursor-pointer object-cover aspect-video'
    />
    <div className='bg-slate-900 w-full sm:text-lg lg:text-xl p-1 
      text-center tracking-wider'>
      {title}
    </div>
    <div className='m-2 flex flex-wrap justify-around text-sm'>
      {tags.map((item, i) => ( //() instead of {} returns!
        <div key={i} className='bg-slate-900 rounded-full p-2'>
          {item}
        </div>
      ))}
    </div>
    <div
      className={modalState ? `modal max-h-screen flex flex-col md:flex-row-reverse` : `hidden`}
    >
      <div
        className='bg-slate-900 rounded-3xl flex flex-col md:basis-1/4'
      >
        <div className='p-4 text-lg sm:text-xl lg:text-2xl flex justify-between tracking-wider'>
          <div>
            {title}
          </div>
          <button onClick={closeModal}>X</button>
        </div>
        <div className='px-4 basis-1/2 overflow-auto'>
          {description}
        </div>
      </div>
      {children}
    </div>
  </div>
}
