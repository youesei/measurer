'use client'
// import { useSocket } from '@/hook/useSocket'
import Image from 'next/image'
import Items from '../../../data/items.json'
import Link from 'next/link'
// import { useEffect, useState } from 'react'

// import { io } from 'socket.io-client'

// const socket = io('http://localhost:3001')

export default function ItemPage({ params }) {
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
    <div className='m-3 text-center grid xl:m-9 xl:h-screem xl:place-items-center'>

      <div className='w-full flex justify-start mb-6 xl:mb-0  xl:top-6 xl:left-7'>
        <Link href='/'>
          <Image width={500} height={500} className='w-[3rem] color' src='/images/back-arrow.svg' alt='back_arrow' />
        </Link>
      </div>

      <div className='grid gap-12 w-full'>
        <h2 className='text-5xl p-2 font-bold'>{item.code}</h2>

        <div className='flex flex-col items-center gap-10 justify-center xl:flex-row'>
          <Image width={500} height={500} className='max-w-[30rem] w-full rounded-t-lg' priority src={item.img} alt='image' />

          <div className='flex flex-col w-[90%] gap-7 justify-center place-items-center'>
            <form className='w-full text-center grid grid-flow-col grid-rows-[repeat(9,_1fr)] gap-4 xl:grid-flow-row xl:grid-rows-none xl:grid-cols-2 xl:gap-x-7 xl:gap-y-[1rem]'>

              <div className='flex justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="provider">Proveedor</label>
                <input type='text' defaultValue='Metalicos S.A.S' id="provider" className='text-white/80  text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="top-color">Top Color</label>
                <input type='text' defaultValue='Amarillo' id="top-color" className='text-white/80  text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="caliber">Calibre</label>
                <select className=' text-white/80 text-center outline-none border-0 border-b bg-primary p-2 basis-3/5 border-gray-500/70' id='calibre'>
                  <option value=''>Seleccionar el Calibre</option>
                  <option value='Calibre'>50</option>
                  <option value='Calibre'>20</option>
                </select>
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70' htmlFor="back-color">Back Color</label>
                <input type='text' defaultValue='Blanco' id="back-color" className='text-white/80 text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="thickness">Espesor</label>
                <input type='text' defaultValue='70' id="thickness" className='text-white/80  text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="weight">Peso</label>
                <input type='text' defaultValue={50} id="weight" className='text-white/80  text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="footage">Metraje</label>
                <input type='text' defaultValue={10000} id="footage" className='text-white/80  text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="discount">Desconteo</label>
                <input type='text' defaultValue={120} id="discount" className='text-white/80  text-center bg-transparent outline-none basis-3/5 p-2 border-b border-gray-500/70' />
              </div>
              <div className='flex gap-2 justify-between xl:col-span-2 items-center'>
                <label className='text-gray-300/70 text-gray-300' htmlFor="date">Fecha de Llegada</label>
                <input type='date' id="date" className='roll-date outline-none text-center bg-transparent basis-3/5 text-white/80  w-full p-2 border-b border-gray-500/70' />
              </div>
            </form>

            <div className='flex w-full flex-col gap-5 md-gap-0 md:flex-row md:justify-evenly'>
              <button
                className='bg-danger py-3 px-8 rounded-lg flex-1'
              // onClick={handleReset}
              >
                Iniciar
              </button>
              <button
                className='bg-darkBlue py-3 px-8 rounded-lg flex-1'
              // onClick={handleReset}
              >
                Resetear
              </button>
              <button
                className='bg-darkGreen py-3 px-8 rounded-lg flex-1'
              // onClick={handleReset}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
