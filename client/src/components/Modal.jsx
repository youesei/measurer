import Image from 'next/image'

export const Modal = ({ handleModal }) => {
  return (
    <div className='fixed top-0 z-10  w-full h-full bg-black/30 flex items-center'>
      <dialog open className='w-[90%] lg:w-[50%] h-[90%] bg-white rounded-lg flex flex-col justify-center p-4'>

        <header className='w-full flex justify-end'>
          <button onClick={handleModal}>
            <Image width={500} height={500} className='bg-white rounded-full w-[2rem]' src='/images/close.svg' alt='close' />
          </button>
        </header>

        <main className='grid text-center'>
          <h3 className='text-2xl mb-5'>Crear un Nuevo Item</h3>
          <form className='grid place-items-center gap-3'>
            <input className='p-2.5 rounded-lg w-full border border-gray-200' type='text' placeholder='Peso' />
            <input className='p-2.5 rounded-lg w-full border border-gray-200' type='text' placeholder='Metraje' />
            <input className='p-2.5 rounded-lg w-full border border-gray-200' type='text' placeholder='Proveedor' />
            <input className='p-2.5 rounded-lg w-full border border-gray-200' type='text' placeholder='Top Color' />
            <input className='p-2.5 rounded-lg w-full border border-gray-200' type='text' placeholder='Back Color' />
            <input className='p-2.5 rounded-lg w-full border border-gray-200' type='text' placeholder='Expesor' />
            <div className='flex gap-4 w-full'>
              <select className='border border-gray-200 rounded p-2 flex-1' name='calibre' id='calibre'>
                <option value='Calibre'>Calibre</option>
                <option value='Calibre'>50</option>
                <option value='Calibre'>20</option>
              </select>
              <select className='border border-gray-200 rounded p-2 flex-1' name='proveedor' id='proveedor'>
                <option value=''>Proveedor</option>
                <option value=''>Metalicos S.A.S</option>
                <option value=''>Fierros</option>
              </select>

            </div>

          </form>
        </main>

        <footer className='mt-5 flex justify-end'>
          <button className='bg-lightGray w-[20%] text-white p-3 rounded-lg'>
            Crear
          </button>
        </footer>

      </dialog>
    </div>
  )
}
