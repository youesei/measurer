export const Header = () => {
  return (
    <header className='flex gap-3 flex-col md:flex-row md:justify-between md:py-3 md:items-center'>
      <h1 className='text-4xl'>Measurer</h1>

      <div className='md:w-[30%]'>
        <input className='bg-lightGray p-2.5 rounded-lg w-full border-0' type='search' placeholder='Buscar Referencia' />
      </div>

      <div className='flex gap-3'>
        <select className='bg-lightGray border-0 rounded p-2 flex-1' name='proveedor' id='proveedor'>
          <option value=''>Proveedor</option>
          <option value=''>Metalicos S.A.S</option>
          <option value=''>Fierros</option>
        </select>

        <select className='bg-lightGray border-0 rounded p-2 flex-1' name='calibre' id='calibre'>
          <option value='Calibre'>Calibre</option>
          <option value='Calibre'>50</option>
          <option value='Calibre'>20</option>
        </select>

      </div>
    </header>
  )
}
