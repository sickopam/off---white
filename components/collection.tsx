import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from './footer'

import Men from '.././public/img/menscol.webp'
import Glam from '.././public/img/glam.webp'
import Glam2 from '.././public/img/glam2.webp'

const shoes = [
  {id: 1, image: 'img/shoe1.webp', desc: 'Out Of Office Calf Leather' },
  {id: 2, image: 'img/shoe2.webp', desc: 'Low Vulcanized' },
  {id: 3, image: 'img/shoe3.webp', desc: 'Low Vulcanized' },
  {id: 4, image: 'img/shoe4.webp', desc: 'Out Of Office Calf Leather' },
  {id: 5, image: 'img/shoe5.webp', desc: 'Out Of Office Calf Leather' },
  {id: 6, image: 'img/shoe6.webp', desc: 'Out Of Office Calf Leather' }
];

export default function collection() {
  return (
    <>
    <div className='px-[1rem] lg:px-[1.3rem]'>
      <div className='mb-32'>
        <div className='flex justify-between pb-2 uppercase text-3xs'>
          <p className=''>shop the "bling" menswear collection</p>
          <h2 className=''>[1]</h2>
        </div>
        <Image src={Men} alt='mens collection'></Image>
        <div className='flex justify-between text-xl lg:text-2xl font-Bookish'>
          <h1>1</h1>
          <h2>Shop The "Bling" Menswear Collection</h2>
        </div>
      </div>

      <div className='lg:w-[80%] mb-52'>
        <div className='flex justify-between uppercase pb-2 text-3xs'>
          <p>the "glam" collection</p>
          <h2>[2]</h2>
        </div>
        <div className='overflow-x-scroll'>
          <div className='flex flex-row w-[160%] lg:w-full space-x-4 lg:space-x-5 font-Bookish'>
            <div className='w-full lg:w-[62%]'>
              <Image src={Glam} alt='glam'></Image>
              <div className='flex justify-between text-xl lg:text-2xl'>
                <h1 className='hidden lg:block'>1</h1>
                <p>Shop The "Glam" Collection</p>
              </div>

            </div>
            <div className='w-full lg:w-[38%]'>
              {/* <h2>[2]</h2> */}
              <Image src={Glam2} alt='glam'></Image>
              <div className='flex flex-row justify-between text-xl lg:text-2xl'>
                <h1 className='hidden lg:block'>2</h1>
                <p>Shop The Beauty Collection</p>
              </div>
            </div>
        </div>
        </div>
      </div>

      <div className='h-[150vw] md:h-[50vw] lg:h-[48vw] w-full lg:w-[90%] mb-44'>
        {/* <Skeleton width={1250} height={700} highlightColor='#f5f5dc'/> */}
        <iframe className='h-full w-full' src='https://www.youtube.com/embed/pwmGGoGnTXk' frameBorder='0'></iframe>
      </div>

      <div className='lg:w-[75%]'>

        <div className='flex justify-between uppercase pb-2 text-3xs'>
          <h1>our picks for you</h1>
          <h2>[6]</h2>
        </div>

        <div className='overflow-x-scroll'>
          <div className='flex flex-row w-[225%] lg:w-full overflow-x-scroll scroll-hidden space-x-4 lg:space-x-5 mb-32 lg:mb-44 font-Bookish'>
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

      </div>
    </div>
      {/* <Footer/> */}
    </>
  )
}
