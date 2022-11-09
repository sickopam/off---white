import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './footer'

import Men from '.././public/img/menscol.webp'
import Glam from '.././public/img/glam.webp'
import Glam2 from '.././public/img/glam2.webp'

const shoes = [
  {id: 1, image: 'img/shoe1.webp', desc: 'Out Of Office Calf Leather' },
  {id: 2, image: 'img/shoe2.webp', desc: 'Low Vulcanized Sneakers' },
  {id: 3, image: 'img/shoe3.webp', desc: 'Low Vulcanized Sneakers' },
  {id: 4, image: 'img/shoe4.webp', desc: 'Out Of Office Calf Leather' },
  {id: 5, image: 'img/shoe5.webp', desc: 'Out Of Office Calf Leather' },
  {id: 6, image: 'img/shoe6.webp', desc: 'Out Of Office Calf Leather' }
];

export default function collection() {
  return (
    <>
      <div className='mb-32'>
        <div className='flex justify-between pb-2 uppercase'>
          <p className='text-xs'>shop the "bling" menswear collection</p>
          <h2 className='text-sm'>[1]</h2>
        </div>
        <Image src={Men} alt='mens collection'></Image>
        <div className='flex justify-between text-2xl'>
          <h1>1</h1>
          <h2>Shop The "Bling" Menswear Collection</h2>
        </div>
      </div>

      <div className='w-[80%] mb-52'>
        <div className='flex justify-between uppercase pb-2'>
          <p className='text-xs'>the "glam" collection</p>
          <h2 className='text-sm'>[2]</h2>
        </div>
        <div className='flex flex-row space-x-5'>
          <div className='w-[62%]'>
            <Image src={Glam} alt='glam'></Image>
            <div className='flex justify-between text-2xl'>
              <h1>1</h1>
              <p>Shop The "Glam" Collection</p>
            </div>

          </div>
          <div className='w-[38%]'>
            {/* <h2>[2]</h2> */}
            <Image src={Glam2} alt='glam'></Image>
            <div className='flex flex-row justify-between text-2xl'>
              <h1>2</h1>
              <p>Shop The Beauty Collection</p>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[48vw] w-[90%] mb-44'>
        {/* <Skeleton width={1250} height={700} highlightColor='#f5f5dc'/> */}
        <iframe className='h-full w-full' src='https://www.youtube.com/embed/pwmGGoGnTXk' frameBorder='0'></iframe>
      </div>

      <div className='w-[75%]'>
        <div className='flex justify-between uppercase pb-2'>
          <h1 className='text-xs'>our picks for you</h1>
          <h2 className='text-sm'>[6]</h2>
        </div>

        <div className='flex flex-row space-x-5 mb-44'>
          {shoes.map((items, i) => (
            <div key={i} className='flex flex-row'>
              <div>
                <img src={items.image} alt='shoe'/>
                <h2>{items.desc}</h2>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </>
  )
}
