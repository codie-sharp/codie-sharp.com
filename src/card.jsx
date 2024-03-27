import './style.css'
import { useState } from 'react';

export default function Card({image, title, tags, description, children}) {
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  return <div id = {`${title}-card`} className='bg-slate-700 sm:m-2 flex flex-col
    rounded-3xl max-w-full md:min-w-80 md:max-w-80'
  >
    <img id={`${title}-image`} src={`${image}`} onClick={openModal} 
      className='rounded-t-3xl cursor-pointer'
    />
    <div id={`${title}-title`} className='bg-slate-900 w-full sm:text-lg lg:text-xl p-1 
      text-center tracking-wider'>
      {title}
    </div>
    <div id={`${title}-tags`} className='m-2 flex flex-wrap justify-around text-sm'>
      {tags.map((item, i) => ( //() instead of {} returns!
        <div key={i} className='bg-slate-900 rounded-full p-2'>
          {item}
        </div>
      ))}
    </div>
    <div id={`${title}-modal`} 
      className={modalState ? `modal max-h-screen flex flex-col md:flex-row-reverse` : `hidden`}
    >
      <div id={`${title}-modal-heading`} 
        className='bg-slate-900 rounded-3xl flex flex-col md:basis-1/4'
      >
        <div className='p-4 text-lg sm:text-xl lg:text-2xl flex justify-between tracking-wider'>
          <div id={`${title}-modal-title`}>
            {title}
          </div>
          <button id={`${title}-modal-close`} onClick={closeModal}>X</button>
        </div>
        <div id={`${title}-modal-description`} className='px-4 basis-1/2 overflow-auto'>
          {description}
        </div>
      </div>
      {children}
    </div>
  </div>
}
