'use client'
import { useState } from 'react'
import { Modal } from '.'
import Image from 'next/image'

export const CreateButton = () => {
  const [show, setShow] = useState(false)
  const handleModal = () => {
    setShow(!show)
  }
  return (
    <div className='fixed bottom-6 right-10'>
      <button
        className='cursor-pointer'
        onClick={handleModal}
      >
        <Image width={500} height={500} className='bg-white rounded-full w-[3rem]' src='/images/plus.svg' alt='plus' />
      </button>
      {show ? <Modal handleModal={handleModal} /> : null}
    </div>
  )
}
