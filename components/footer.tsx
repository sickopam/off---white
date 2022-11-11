import { useState, useEffect } from 'react'
import axios from 'axios'
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
    <div className='w-full lg:w-[95%] pb-5 flex flex-col lg:flex-row lg:justify-between'>
        <div className='w-full md:w-[90%] lg:w-[25%] px-[1rem] lg:px-[1.3rem] text-4xs lg:text-3xs'>
            <div className='w-[100%] space-y-4'>
                <h1 className='uppercase font-Mono text-xs'>newsletter sign up</h1>
                <p className='text-justify'>Sign up to our newsletter to receive information regarding exclusive collection previews, special events, and seasonal sale offers.</p>
                <form className='space-y-5'>
                    <div>
                        <input type='email' placeholder='EMAIL ADDRESS' className='w-[35%] lg:w-full' required/>
                        <p className='invisible peer-invalid:visible text-red-500'>hi</p>
                        <div className='w-[35%] lg:w-full'>
                            <h1 className='uppercase text-[#636c72]'>country</h1>
                            <select className='text-2xs lg:text-sm'>
                                <option value='init'>{state.countryName}</option>
                                {countries.map((item, i) => (
                                    item.name !== state.countryName &&
                                    <option key={i}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-7 text-3xs'>
                        <div onClick={() => {setCheck('Womenswear')}} className='space-x-2 inline-flex'>
                            <input type='checkbox' checked={check === 'Womenswear'} readOnly
                            className='appearance-none checked:bg-black checked:ring-2 checked:ring-inset checked:ring-white'/>
                            <h1 className='cursor-pointer'>Womenswear</h1>
                        </div>
                        <div onClick={() => {setCheck('Menswear')}} className='space-x-2 inline-flex'>
                            <input type='checkbox' checked={check === 'Menswear'} readOnly
                            className='appearance-none checked:bg-black checked:ring-2 checked:ring-inset checked:ring-white'/>
                            <h1 className='cursor-pointer'>Menswear</h1>
                        </div>
                    </div>

                    <div className='text-5xs lg:text-4xs'>
                        <p className='tracking-wide'>By registering you agree to accept the <a href='/' className='underline hover:no-underline'>Terms & Conditions</a> and have read the <a href='/' className='underline hover:no-underline'>Privacy Policy.</a> </p>
                    </div>

                    <button className='sub'>
                        <h1 className='text-xs font-bold text-white'>SUBSCRIBE</h1>
                    </button>
                </form>
            </div>
            <div className='hidden lg:block w-[150%]'>
                <h1 className='text-4xs pt-20'>© 2021 Off-White™. All rights reserved. <a href='/' className='underline hover:no-underline'>Privacy Policy.</a></h1>
            </div>
        </div>

      <div className='w-full lg:w-[68%] h-fit pt-12 lg:pt-0 text-sm'>
            <div className='uppercase w-full lg:w-[90%]'>
                <div className='block lg:hidden border-[0.5px] mb-4'/>
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between'>
                    {foot.map((items, i) => (
                        <div key={i} className='space-y-4 text-xs'>
                            <h1 className='font-Mono px-[1rem] lg:px-[1.3rem]'>{items.title}</h1>
                            <div className='flex flex-col space-y-2 footer lg:bg-transparent p-3 lg:p-0 px-[1rem] lg:px-[1.3rem]'>
                                {items.list.map((i) => (
                                    <a className='w-fit text-2xs lg:text-sm pl-3 lg:pl-0' key={i} href='/'>{i}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='space-y-5 text-xs px-[1rem] lg:px-[1.3rem]'>
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
      <div className='block lg:hidden w-[150%] px-[1rem] lg:px-[1.3rem]'>
                <h1 className='text-4xs pt-20'>© 2021 Off-White™. All rights reserved. <a href='/' className='underline hover:no-underline'>Privacy Policy.</a></h1>
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

export const countries = [
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
    { name: 'Cyprus' },
    { name: 'Czech Republic' },
    { name: 'Denmark' },
    { name: 'Djibouti' },
    { name: 'Dominica' },
    { name: 'Dominican Republic' },
    { name: 'East Timor' },
    { name: 'Ecuador' },
    { name: 'Egypt' },
    { name: 'El Savador' },
    { name: 'Equatorial Guinea' },
    { name: 'Estonia' },
    { name: 'Faeroe Islands' },
    { name: 'Falkland Islands (Malvinas)' },
    { name: 'Fiji' },
    { name: 'Finland' },
    { name: 'France' },
    { name: 'French Guiana' },
    { name: 'French Polynesia' },
    { name: 'Gabon' },
    { name: 'Gambia' },
    { name: 'Georgia' },
    { name: 'Germany' },
    { name: 'Ghana' },
    { name: 'Gibraltar' },
    { name: 'Greece' },
    { name: 'Greenland' },
    { name: 'Grenada' },
    { name: 'Guadeloupe' },
    { name: 'Guam' },
    { name: 'Guatemala' },
    { name: 'Guernsey, C.I.' },
    { name: 'Guinea' },
    { name: 'Guinea-Bissau' },
    { name: 'Guyana' },
    { name: 'Haiti' },
    { name: 'Heard and Mcdonald Islands' },
    { name: 'Honduras' },
    { name: 'Hong Kong SAR' },
    { name: 'Hungary' },
    { name: 'Iceland' },
    { name: 'India' },
    { name: 'Indonesia' },
    { name: 'Iraq' },
    { name: 'Ireland' },
    { name: 'Israel' },
    { name: 'Italy' },
    { name: 'Jamaica' },
    { name: 'Japan' },
    { name: 'Jersey, C.I.' },
    { name: 'Jordan' },
    { name: 'Kazakhstan' },
    { name: 'Kenya' },
    { name: 'Kiribati' },
    { name: 'Korea, Republic Of' },
    { name: 'Kosovo' },
    { name: 'Kuwait' },
    { name: 'Kyrgystan' },
    { name: "Lao People's Democratic Republic" },
    { name: 'Latvia' },
    { name: 'Lebanon' },
    { name: 'Lesotho' },
    { name: 'Liechtenstein' },
    { name: 'Lithuania' },
    { name: 'Luxembourg' },
    { name: 'Macau SAR' },
    { name: 'Madagascar' },
    { name: 'Malawi' },
    { name: 'Malaysia' },
    { name: 'Maldives' },
    { name: 'Mali' },
    { name: 'Malta' },
    { name: 'Marshall Islands' },
    { name: 'Martinique' },
    { name: 'Mauritania' },
    { name: 'Mauritius' },
    { name: 'Mexico' },
    { name: 'Micronesia, Fed. States Of' },
    { name: 'Moldova, Republic Of' },
    { name: 'Monaco' },
    { name: 'Mongolia' },
    { name: 'Montonegro' },
    { name: 'Montserrat' },
    { name: 'Morroco' },
    { name: 'Mozambique' },
    { name: 'Namibia' },
    { name: 'Nauru' },
    { name: 'Nepal' },
    { name: 'Netherland Antilles' },
    { name: 'Netherlands' },
    { name: 'New Caledonia' },
    { name: 'New Zealand' },
    { name: 'Nicaragua' },
    { name: 'Niger' },
    { name: 'Nigeria' },
    { name: 'Niue' },
    { name: 'Norfolk' },
    { name: 'North Macedonia' },
    { name: 'Northern Mariana Islands' },
    { name: 'Norway' },
    { name: 'Oman' },
    { name: 'Pakistan' },
    { name: 'Palau' },
    { name: 'Panama' },
    { name: 'Papua New Guinea' },
    { name: 'Paraguay' },
    { name: 'Peru' },
    { name: 'Philippines' },
    { name: 'Pitcairn' },
    { name: 'Poland' },
    { name: 'Portugal' },
    { name: 'Puerto Rico' },
    { name: 'Qatar' },
    { name: 'Reunion' },
    { name: 'Romania' },
    { name: 'Russian Federation' },
    { name: 'Rwanda' },
    { name: 'Saint Kitts and Nevis' },
    { name: 'Saint Lucia' },
    { name: 'San Marino' },
    { name: 'Sao Tome and Principe' },
    { name: 'Saudi Arabia' },
    { name: 'Senegal' },
    { name: 'Serbia' },
    { name: 'Seychelles' },
    { name: 'Sierra Leone' },
    { name: 'Singapore' },
    { name: 'Slovekia' },
    { name: 'Slovenia' },
    { name: 'Solomon Islands' },
    { name: 'Somalia' },
    { name: 'South Africa' },
    { name: 'Spain' },
    { name: 'Spain – Canary Islands' },
    { name: 'Sri Lanka' },
    { name: 'St. Helena' },
    { name: 'St. Pierre and Miquelon' },
    { name: 'St. Vincent and the Grenadines' },
    { name: 'Suriname' },
    { name: 'Sweden' },
    { name: 'Switzerland' },
    { name: 'Taiwan Region' },
    { name: 'Tajikistan' },
    { name: 'Tanzania, United Republic of' },
    { name: 'Thailand' },
    { name: 'Togo' },
    { name: 'Tokelau' },
    { name: 'Tonga' },
    { name: 'Trinidad and Tobago' },
    { name: 'Tunisia' },
    { name: 'Turkey' },
    { name: 'Turks and Caicos Islands' },
    { name: 'Tuvalu' },
    { name: 'U.A.E' },
    { name: 'Uganda' },
    { name: 'Ukraine' },
    { name: 'United Kingdom' },
    { name: 'United States' },
    { name: 'Uruguay' },
    { name: 'Uzbekistan' },
    { name: 'Vanuatu' },
    { name: 'Vatican City State' },
    { name: 'Venezuela' },
    { name: 'Vietnam' },
    { name: 'Virgin Islands (British)' },
    { name: 'Virgin Islands, U.S' },
    { name: 'Wallis and Futuna Islands' },
    { name: 'Western Sahara' },
    { name: 'Yemen, Republic of' },
    { name: 'Zambia' },
    { name: 'Zimbabwe' }
]
