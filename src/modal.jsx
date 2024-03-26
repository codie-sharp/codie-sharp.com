import './style.css'

export default function Modal({ isOpen, onClose, content }) {

  return <div className={isOpen ? `modal` : `hidden`}>
    {content}
    <button onClick={onClose}>Close</button>
  </div>
}
