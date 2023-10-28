'use client'
// import { useSocket } from '@/hook/useSocket'
import Image from 'next/image'
import Items from '../../../data/items.json'
import Link from 'next/link'
// import { useEffect, useState } from 'react'

// import { io } from 'socket.io-client'

// const socket = io('http://localhost:3001')

export default function ItemPage ({ params }) {
  const { id } = params

  const item = Items.find(item => item.id === parseInt(id))
  // const { data, resetData } = useSocket()

  // const [value, setValue] = useState(data)

  // useEffect(() => {
  //   setValue(data)
  // }, [data])

  // const handleReset = () => {
  //   resetData()
  //   socket.emit('reset')
  // }

  return (
    <div className='m-3 text-center grid md:m-9 md:h-screem md:place-items-center'>

      <div className='w-full flex justify-start mb-6 lg:mb-0  lg:top-6 lg:left-7'>
        <Link href='/'>
          <Image width={500} height={500} className='w-[3rem] color' src='/images/back-arrow.svg' alt='back_arrow' />
        </Link>
      </div>

      <div className='grid gap-12 w-full'>
        <h2 className='text-5xl p-2'>{item.code}</h2>

        <div className='flex flex-col items-center gap-10 justify-center lg:flex-row'>
          <Image width={500} height={500} className='max-w-[30rem] w-full rounded-t-lg' priority src={item.img} alt='image' />

          <div className='flex flex-col w-[90%] gap-7 justify-center place-items-center'>
            <ul className='w-full grid grid-cols-2 text-center gap-x-7 gap-y-[1rem] '>
              
              <li className='flex justify-between items-center'>
                <label className='text-gray-300 basis-2/5' htmlFor="provider">Proveedor</label>
                <input type='text' defaultValue='Metalicos S.A.S' id="provider" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b border-opacity-40'/>
              </li>
              <li className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300 basis-2/5' htmlFor="top-color">Top Color</label>
                <input type='text' defaultValue='Amarillo' id="top-color" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b'/>
              </li>
              <li className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300 basis-2/5' htmlFor="caliber">Calibre</label>
                <select className='text-center outline-none border-0 border-b bg-transparent p-2 flex-1' id='calibre'>
                  <option value=''>Seleccionar el Calibre</option>
                  <option value='Calibre'>50</option>
                  <option value='Calibre'>20</option>
                </select>
              </li>
              <li className='flex gap-2 justify-between items-center'>
              <label className='text-gray-300 basis-2/5' htmlFor="back-color">Back Color</label>
                <input type='text' defaultValue='Blanco' id="back-color" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b'/>
              </li>
              <li className='flex gap-2 justify-between items-center'>
              <label className='text-gray-300 basis-2/5' htmlFor="thickness">Espesor</label>
                <input type='text' defaultValue='70' id="thickness" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b'/>
              </li>
              <li className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300 basis-2/5' htmlFor="weight">Peso</label>
                <input type='text' defaultValue={0} id="weight" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b'/>
              </li>
              <li className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300 basis-2/5' htmlFor="footage">Metraje</label>
                <input type='text' defaultValue={0} id="footage" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b'/>
              </li>
              <li className='flex gap-2 justify-between items-center'> 
                <label className='text-gray-300 basis-2/5' htmlFor="descount">Desconteo</label>
                <input type='text' defaultValue={0} id="descount" className='text-white text-center bg-transparent outline-none basis-3/5 p-2 border-b'/>
              </li>
              <li className='grid gap-2 place-items-center md:col-span-2 md:grid-flow-col'>
                <label className='text-gray-300 basis-2/5' htmlFor="date">Fecha de Llegada</label>
                <input type='date'id="date" className='roll-date outline-none text-center bg-transparent  text-white w-full p-2 border-b felx-1'/>
              </li>
            </ul>
            
            <div className='flex w-full flex-col gap-5 md-gap-0 md:flex-row md:justify-evenly'>
              <button
                className='bg-[#3b71ca80] py-3 px-8 rounded-lg flex-1'
                // onClick={handleReset}
              >
                Reset
              </button>
              <button
                className='bg-[#40ca3b80] py-3 px-8 rounded-lg flex-1'
                // onClick={handleReset}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
