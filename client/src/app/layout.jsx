'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import { CreateButton } from '@/components'

export default function RootLayout({ children }) {
  const pathname = usePathname()

  return (
    <html lang='en'>
      <title>Measurer</title>
      <head>
        <link rel='icon' href='/assets/favicon.ico' sizes='any' />
      </head>
      <body className='parent relative'>
        {children}

        {pathname === '/' ? <CreateButton /> : null}

      </body>
    </html>
  )
}
