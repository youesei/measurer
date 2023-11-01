import { createOptions } from '@/utils/range'
import Image from 'next/image'

export const Modal = ({ handleModal }) => {
  return (
    <div className='fixed top-0 left-0 z-10 w-full h-full bg-black/30 flex items-center'>
      <dialog open className='w-[90%] lg:w-[50%] h-[90%] bg-white rounded-lg flex flex-col justify-center p-4'>

        <header className='w-full flex justify-end'>
          <button onClick={handleModal}>
            <Image width={500} height={500} className='bg-white rounded-full w-[2rem]' src='/images/close.svg' alt='close' />
          </button>
        </header>

        <main className='grid text-center overflow-auto'>
          <h3 className='text-2xl'>Crear un Nuevo Item</h3>
          <form className='grid place-items-center gap-3 p-3'>
            <input className='p-2.5 w-full outline-none border-0 border-b border-gray-300/80' type='text' placeholder='Peso' />
            <input className='p-2.5 w-full outline-none border-0 border-b border-gray-300/80' type='text' placeholder='Metraje' />
            <input className='p-2.5 w-full outline-none border-0 border-b border-gray-300/80' type='text' placeholder='Top Color' />
            <input className='p-2.5 w-full outline-none border-0 border-b border-gray-300/80' type='text' placeholder='Back Color' />
            <select defaultValue='Proveedor' className='w-full border-0 border-b outline-none border-gray-300 p-2 flex-1' name='proveedor' id='proveedor'>
              <option disabled value='Proveedor'>Proveedor</option>
              <option value='1'>Metalicos S.A.S</option>
              <option value='2'>Fierros</option>
            </select>

            <select defaultValue='Espesor' className='w-full border-0 border-b outline-none border-gray-300 p-2 flex-1' name='calibre' id='calibre'>
              <option disabled value='Espesor'>Espesor</option>
              {createOptions(0.20, 0.50, 0.01)}
            </select>
            <select defaultValue='Calibre' className='w-full border-0 border-b outline-none border-gray-300 p-2 flex-1' name='calibre' id='calibre'>
              <option disabled value='Calibre' >Calibre</option>
              {createOptions(20, 40, 1)}
            </select>

            <select defaultValue='Ancho' className='w-full border-0 border-b outline-none border-gray-300 p-2 flex-1' name='calibre' id='calibre'>
              <option disabled value='Ancho' >Ancho</option>
              {createOptions(0.75, 1.50, 0.05)}
            </select>

            <div className='flex w-full items-center'>
              <label className='basis-2/5 text-start border-b p-[0.7rem]' htmlFor="date">Fecha de Llegada</label>
              <input className='basis-3/5 text-center p-2.5 w-full outline-none border-0 border-b border-gray-300/80' type='date' id="date" />
            </div>

          </form>
        </main>

        <footer className='mt-7 flex justify-end'>
          <button className='bg-lightGray w-full lg:w-[30%] text-white p-3 rounded-lg'>
            Crear
          </button>
        </footer>

      </dialog>
    </div>
  )
}
