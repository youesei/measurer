'use client'
import Image from 'next/image'
import './globals.css'
import { Modal } from '@/components/Modal'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'

export default function RootLayout ({ children }) {
  const pathname = usePathname()

  const [show, setShow] = useState(false)
  const handleModal = () => {
    setShow(!show)
  }
  return (
    <html lang='en'>
      <title>Measurer</title>
      <head>
        <link rel='icon' href='/assets/favicon.ico' sizes='any' />
      </head>
      <body className={`${show ? 'overflow-y-hidden' : 'overflow-auto'} relative`}>
        {children}


        { pathname === '/'
        ? (
          <>
              <div className='fixed bottom-6 right-10'>
                <button
                  className='cursor-pointer'
                  onClick={handleModal}
                >
                  <Image width={500} height={500} className='bg-white rounded-full w-[3rem]' src='/images/plus.svg' alt='plus' />
                </button>
              </div>
      
              {show ? <Modal handleModal={handleModal} /> : null}
          </>

        ):null
        }

      </body>
    </html>
  )
}




