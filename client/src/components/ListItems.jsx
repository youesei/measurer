import Link from 'next/link'
import Items from '../data/items.json'
import Image from 'next/image'

export const ListItems = () => {
  return (
    <article className='grid gap-[2rem] place-content-center sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]'>
      {
        Items.map(item => (
          <Link className='min-h-[2.7rem] rounded-lg text-center bg-neutral-700' key={item.id} href={`/item/${item.id}`}>
            <Image width={500} height={500} className='w-full rounded-t-lg' priority src={item.img} alt={item.code} />
            <h2 className='p-3'>{item.code}</h2>
          </Link>
        ))
      }
    </article>
  )
}
