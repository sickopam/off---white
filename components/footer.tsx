import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function footer() {
    const [state, setState] = useState({
        countryName: '',
        });

        // console.log(state)
        const getCN = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
            let data = response.data;
            setState({
                ...state,
                countryName: data.country_name
            })
            })
            .catch((error) => {
            console.log(error);
            });
        };

        useEffect(() => {
        getCN();
        }, []);

        const [check, setCheck] = useState<any>('Womenswear')
        
  return (
    <div className='w-[95%] pb-5 flex justify-between'>
        <div className='w-[25%] text-3xs'>
            <div className='w-[100%] space-y-4'>
                <h1 className='uppercase font-Mono text-xs'>newsletter sign up</h1>
                <p className='text-justify'>Sign up to our newsletter to receive information regarding exclusive collection previews, special events, and seasonal sale offers.</p>
                <input type='email' placeholder='EMAIL ADDRESS' className='w-full' required/>
                <div>
                    <h1 className='uppercase text-[#636c72]'>country</h1>
                    <select className='text-sm'>
                        <option value='init'>{state.countryName}</option>
                        {countries.map((item, i) => (
                            item.name !== state.countryName &&
                            <option key={i}>{item.name}</option>
                        ))}
                    </select>
                    
                </div>

                <div className='flex flex-row space-x-7 text-3xs'>
                    <div onClick={() => {setCheck('Womenswear')}} className='space-x-2 inline-flex'>
                        <input type='checkbox' checked={check === 'Womenswear'} readOnly
                        className='appearance-none  checked:bg-black'/>
                        <h1 className='cursor-pointer'>Womenswear</h1>
                    </div>
                    <div onClick={() => {setCheck('Menswear')}} className='space-x-2 inline-flex'>
                        <input type='checkbox' checked={check === 'Menswear'} readOnly
                        className='appearance-none checked:bg-black'/>
                        <h1 className='cursor-pointer'>Menswear</h1>
                    </div>
                </div>

                <div>
                    <p className='tracking-wide'>By registering you agree to accept the <a href='/' className='underline hover:no-underline'>Terms & Conditions</a> and have read the <a href='/' className='underline hover:no-underline'>Privacy Policy.</a> </p>
                </div>

                <button id='sub'>
                    <h1 className='text-xs font-bold text-white'>SUBSCRIBE</h1>
                </button>

            </div>
            <div className='w-[150%]'>
                <h1 className='text-4xs pt-20'>© 2021 Off-White™. All rights reserved. <a href='/' className='underline hover:no-underline'>Privacy Policy.</a></h1>
            </div>
        </div>

      <div className='w-[68%] h-fit text-sm'>
            <div className='uppercase w-[90%]'>
                <div className='flex flex-row w-full justify-between'>
                    {foot.map((items, i) => (
                        <div key={i} className='space-y-4 text-xs'>
                            <h1 className='font-Mono'>{items.title}</h1>
                            <div className='flex flex-col space-y-2'>
                                {items.list.map((i) => (
                                    <a key={i} href='/'>{i}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='space-y-5 text-xs'>
                        <h1 className='font-Mono'>find us</h1>
                        <div className='space-y-3'>
                            <a>store locator</a>
                            <div className='pt-7 space-y-4'>
                                <h2 className='font-Mono'>follow off-white</h2>
                                <div className='flex flex-col space-y-3'>
                                    <a href='/'>instagram</a>
                                    <a href='/'>vimeo</a>
                                </div>
                                <h1 className='py-4 font-Mono'>OFF-WHITE™ IOS APP</h1>
                                <a href='/'>
                                    <Image src='/img/apple.png' alt='download' width='140' height='10'></Image>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div/>
            </div>
      </div>
    </div>
  )
}

const foot = [
    {
        id: 1,
        title: 'help',
        list: ['contact us', 'faqs', 'shipping & returns', 'guest returns', 'payment method', 'track your order', 'eyewear certificates'],
    },
    {
        id: 2,
        title: 'legal',
        list: ['terms & conditions', 'accessibility', 'privact & cookie policy', 'cookie preferences', 'regulatory framework']
    },
    // {
    //     id: 3,
    //     title: 'find us',
    //     list: ['store locator', 'follow off-white', 'instagram', 'vimeo', 'off-white ios app']
    // }
]

const countries = [
    { name: 'Afghanistan' },
    { name: 'Albania' },
    { name: 'Algeria' },
    { name: 'Andorra' },
    { name: 'Angola' },
    { name: 'Anguilla' },
    { name: 'Antartica' },
    { name: 'Antigua and Barbuda' },
    { name: 'Argentina' },
    { name: 'Armenia' },
    { name: 'Aruba' },
    { name: 'Australia' },
    { name: 'Austria' },
    { name: 'Azerbaijan' },
    { name: 'Bahamas' },
    { name: 'Bahrain' },
    { name: 'Bangladesh' },
    { name: 'Barbados' },
    { name: 'Belarus' },
    { name: 'Belgium' },
    { name: 'Belize' },
    { name: 'Benin' },
    { name: 'Bermuda' },
    { name: 'Bhutan' },
    { name: 'Bolivia' },
    { name: 'Bosnia Herzegovina' },
    { name: 'Bostwana' },
    { name: 'Bouvet Island' },
    { name: 'British Indian Ocean Territory' },
    { name: 'Brunei Darussalam' },
    { name: 'Bulgaria' },
    { name: 'Burkina Faso' },
    { name: 'Burundi' },
    { name: 'Cambodia' },
    { name: 'Cameroon' },
    { name: 'Canada' },
    { name: 'Cape Verde' },
    { name: 'Cayman Islands' },
    { name: 'Cenral African Republic' },
    { name: 'Chad' },
    { name: 'Chile' },
    { name: 'China, Mainland' },
    { name: 'Christmas Island' },
    { name: 'Cocos Islands' },
    { name: 'Colombia' },
    { name: 'Comoros' },
    { name: 'Congo' },
    { name: 'Cook Islands' },
    { name: 'Costa Rica' },
    { name: "Cote D'Ivoire" },
    { name: 'Croatia' },
    { name: 'Curacao' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    { name: 'Chad' },
    
]
