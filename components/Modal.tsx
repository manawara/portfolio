'use client'
import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react'
import Button from './Button'
type ModalProps = {
  children: ReactNode
}
export type ModalHandle = {
  open: () => void
  close: () => void
}

const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const handleModalClose = () => {
    dialogRef.current?.close()
  }
  useImperativeHandle(ref, () => {
    return {
      open: () => dialogRef.current?.showModal(),
      close: () => dialogRef.current?.close(),
    }
  })
  return (
    <dialog
      ref={dialogRef}
      className="md:max-w-3xl w-full text-inherit bg-darkMode border-gray-400 px-8 py-4 border-solid border last-child:ml-auto"
    >
      {children}

      <Button onClick={handleModalClose}>Close</Button>
    </dialog>
  )
})

Modal.displayName = 'Modal'
export default Modal
