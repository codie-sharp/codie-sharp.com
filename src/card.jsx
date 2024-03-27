import './style.css'
import { useState } from 'react';

export default function Card({image, tags, open}) {
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  return <div className='bg-slate-900 m-2 flex flex-col
    rounded-3xl max-w-full md:min-w-80'
  >
    <img src={`${image}`} onClick={openModal} className='rounded-t-3xl'/>
    <div className='m-2 p-1.5 flex flex-wrap justify-around'>
      {tags.map((item, i) => ( //() instead of {} returns!
        <div key={i} className='p-0.5'>
          {item}
        </div>
      ))}
    </div>
    <div className={modalState ? `modal` : `hidden`}>
      Hello World
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
}
