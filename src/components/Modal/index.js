import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import style from './style.module.css'

const Modal = ({ isOpen, closeModal, title, children }) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.target && e.target.id === 'overlay') closeModal()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('click', handleClick)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen, closeModal])

  return (
    isOpen &&
    createPortal(
      <div id="overlay" className={style.overlay}>
        <div className={style.modal}>
          <div className={style.header}>
            <h3>{title}</h3>
            <FaTimes
              className={style.closeButton}
              onClick={() => closeModal()}
            />
          </div>
          <div className={style.body}>{children}</div>
        </div>
      </div>,
      document.body
    )
  )
}

export default Modal
