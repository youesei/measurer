import { Footer } from '@/components/Footer'
import { Header } from '@/app/Header'
import { ListItems } from '@/components/ListItems'

export default function Home () {
  return (
    <main className='my-5 mx-[.8rem] md:mx-[4rem]'>
      <Header />
      <div className='grid gap-8 my-12'>
        <div>
          <h2 className='text-2xl mb-5 border-b border-gray-600 w-[50%]'>Más recientes</h2>
          <ListItems />
        </div>

        <div>
          <h2 className='text-2xl mb-5 border-b border-gray-600 w-[50%]'>Más usados</h2>
          <ListItems />
        </div>
      </div>
      <Footer />
    </main>
  )
}
