import styles from '../styles/Home.module.css'
import axios from 'axios'
import { CiSearch, CiHeart } from 'react-icons/ci'
import { BsBag } from 'react-icons/bs'
import { HiXMark } from 'react-icons/hi2' 
import { AiOutlineEllipsis } from 'react-icons/ai'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Collection from './collection'
import Footer from './footer'
import { countries } from './footer'



export default function Home() {
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

  const [show, setShow] = useState<any>(false)
  const toggle = () => setShow(true)
  const toggleX = () => setShow(false)

  const [bar, setBar] = useState(false)

  // const[selected, setSelected] = useState(undefined)
  // const buttonHandler = (e, id, i) => {
  //     e.currentTarget.classList.toggle('active')
  //     if (id !== selected) {
  //       const button = document.querySelectorAll('.faq-button')
  //       button.forEach((btn, index) => {
  //         if (index !== i) {
  //           btn.classList.remove('active');
  //         }
  //       });
  //       setSelected(id);
  //     } else {
  //       const button = document.querySelectorAll('.faq-button')
  //       button.forEach((btn) => {
  //         btn.classList.remove('active')
  //       });
  //       setSelected(undefined)
  //     }
  //   }

  return (
    <>
    <div id='header' className='w-full'>
      <div className='lg:pt-[1.5rem] px-[1rem] lg:px-[1.3rem] lg:pb-[0.5rem] py-3 lg:py-0 sticky top-0 bg-white'>
        <div className='flex justify-between text-2xs relative self-center'>

          {show && (
            <div className='glass overflow-y-scroll px-4'>
              <div className='flex justify-between sticky top-0 uppercase'>
                <h1>delivery destination</h1>
                <button className='grid items-start' onClick={toggleX}>
                  <HiXMark size={20}/>
                </button>
              </div>
              <div className='border-t-[2.25rem] border-transparent h-fit'>
                <div className='space-y-2'>
                  <h1 className='uppercase'>current location</h1>
                  <button className='uppercase current'>{state.countryName + ' / USD $'}</button>
                  <h2 className='text-3xs w-[90%] pt-2'>You are currently shipping to <a>{state.countryName}</a> and your order will be billed in USD $.</h2>
                </div>

                <div className='pt-9'>
                  <input type='text' placeholder='ENTER A NEW LOCATION'/>
                </div>

                <div className='uppercase pt-8 pb-4'>
                  <div className='flex justify-between'>
                    <h1>all countries and regions</h1>
                    <h2>[225]</h2>
                  </div>
                  <div className='flex-wrap space-y-2'>
                    {countries.map((items, i) => (
                      <button className='country uppercase mr-2'>{items.name + ' / USD $'}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className='relative self-center hidden lg:block'>
            <div className=' inline-flex space-x-7'>
              <div className='flex flex-row space-x-2'>
                <button onClick={toggle} className='hover:underline grid items-center'>{state.countryName + '  $'}</button>
                <h1 className='grid items-center'>/</h1>
                <a className='hover:underline grid items-center'>EN</a>
              </div>
              <h1 className='hover:underline grid items-center'>Contact us</h1>
            </div>
          </div>

          <div onClick={() => setBar(!bar)} className='block lg:hidden'>
            <AiOutlineEllipsis size={25}/>
          </div>

          {bar && (
            <div className='block lg:hidden drop pt-3 lg:pt-0 text-sm'>
              {nav.map((items, i) => (
                <div key={i} className='flex flex-col uppercase'>
                  {items.li.map((li) => (
                    <h2 className='cursor-pointer py-[0.9rem] px-[1rem] lg:px-[1.3rem] hover:bg-stone-200' key={li}>{li}</h2>
                  ))}
                </div>
              ))}
              <div className='border-b-[1px]'/>
              <div className='flex flex-col space-y-7 px-[1rem] lg:px-[1.3rem] font-monospace'>
                <a className='pt-5 cursor-pointer'>Login</a>
                <a className='cursor-pointer pb-5'>Wishlist [0]</a>
              </div>
              <div className='flex flex-col '>
                <a className='bg-gray-200 px-[1rem] lg:px-[1.3rem] py-[1.2rem] border-b-[0.5px] border-gray-400'>Contact us</a>
                <a className='bg-gray-200 px-[1rem] lg:px-[1.3rem] py-[1.2rem] border-b-[0.5px] border-gray-400'>Store locator</a>
                <a className='bg-gray-200 px-[1rem] lg:px-[1.3rem] py-[1.2rem] '>{state.countryName + ' $ / EN'}</a>
              </div>
            </div>
          )}

          <div className='flex place-items-center justify-center pl-4 lg:pl-0 lg:pt-3 lg:pr-6'>
            <svg height="1em" width="5.35em" viewBox="0 0 1236 231" data-test="offw-logo" className='scale-[160%] lg:scale-[350%]'><clipPath id="a"><path d="m0 0h1236v231h-1236z"></path></clipPath><g clipPath="url(#a)"><path d="m195.134 868.224c-55.313 0-91.054 37.144-91.054 94.628 0 25.969 8.762 49.663 24.67 66.717 17.035 18.262 40.907 27.914 69.034 27.914 55.313 0 91.053-37.145 91.053-94.631 0-25.968-8.761-49.662-24.669-66.715-17.034-18.261-40.906-27.913-69.034-27.913zm66.543 103.369c0 42.915-23.416 70.645-59.656 70.645-17.738 0-35.369-8.3-48.372-22.777-10.282-11.447-22.538-32.076-22.538-65.35 0-42.916 23.467-70.646 59.786-70.646 34.312 0 70.78 30.886 70.78 88.128z" transform="translate(-87.212 -838.99)"></path><path d="m360.646 936.424h-18.256c-3.266 0-4.7-.657-4.7-6.945 0-49.485 22.523-56.874 35.949-56.874a21.278 21.278 0 0 1 12.479 3.611c2.834 1.675 5.765 3.408 11.094 3.408 8.134 0 12.523-5.769 12.523-11.2 0-6.2-5.98-15.433-22.455-15.433-17.755 0-34.036 6.716-45.846 18.91-13.244 13.676-20.772 33.938-21.767 58.584-.27 5.261-2.794 5.936-4.962 5.936h-6.753c-6.611 0-10.268 6.151-10.268 10.4 0 2.2 1.162 5.9 8.944 5.9 9.515 0 11.978 1.974 11.978 9.6v50.722c0 22.122-1.151 27.256-13.343 31.361-2.831.906-5.6 2.084-5.6 5.588 0 1.906.931 4.179 5.37 4.179 5.249 0 11.014-.3 14.878-.531l1.691-.074c2.3-.1 4.283-.191 5.547-.191h6.888c3.752 0 6.87.14 9.617.265l.152.007c2.573.128 5.233.259 8.376.259 3.751 0 7.753-.364 7.753-4.709 0-3.588-2.923-4.766-5.123-5.339-10.327-2.673-16.6-6.081-16.6-30.815v-55.09c0-3.818 1.58-5.754 4.7-5.754h15.088c7.091 0 10.8-6.428 10.8-9.874 0-3.915-2.745-5.901-8.154-5.901z" transform="translate(-87.212 -838.99)"></path><path d="m452.371 872.6a21.279 21.279 0 0 1 12.48 3.611c2.834 1.675 5.765 3.408 11.094 3.408 8.133 0 12.523-5.769 12.523-11.2 0-6.2-5.98-15.433-22.456-15.433-17.754 0-34.036 6.716-45.845 18.91-13.245 13.676-20.772 33.938-21.767 58.584-.27 5.261-2.794 5.936-4.963 5.936h-5.337c-6.611 0-10.268 6.151-10.268 10.4 0 2.2 1.162 5.9 8.945 5.9 9.514 0 10.566 1.974 10.566 9.6v50.722c0 22.122-1.151 27.256-13.342 31.361-2.832.906-5.6 2.084-5.6 5.588 0 1.906.932 4.179 5.37 4.179 5.25 0 11.014-.3 14.879-.531l1.69-.074c2.3-.1 4.284-.191 5.548-.191h6.887c3.754 0 6.871.14 9.617.265l.153.007c2.573.128 5.233.259 8.375.259 3.752 0 7.754-.364 7.754-4.709 0-3.588-2.922-4.766-5.122-5.339-10.328-2.673-16.6-6.081-16.6-30.815v-55.085c0-3.818 1.581-5.754 4.7-5.754h15.494c7.092 0 10.8-6.428 10.8-9.874 0-3.915-2.743-5.9-8.153-5.9h-18.675c-3.265 0-4.7-.657-4.7-6.945.005-49.486 22.528-56.88 35.953-56.88z" transform="translate(-87.212 -838.99)"></path><path d="m774.992 871.267a54.588 54.588 0 0 0 -6.066.4 107.787 107.787 0 0 1 -12.61.662h-8.21c-7.323 0-11.728-.377-15.269-.68-2.38-.2-4.437-.381-6.716-.381-5.094 0-8.016 2.152-8.016 5.9 0 2.151 1.029 4.961 5.94 6.137 5.533 1.267 9.524 4.127 11.863 8.5 3.915 7.324 3.139 18.67-2.244 32.817l-35.363 93.9c-1.076 2.919-2.026 3.2-2.292 3.22-.3 0-1.372-.169-3.042-3.35a585.282 585.282 0 0 1 -26.709-56.459 7.486 7.486 0 0 1 -.122-6.4c4.456-11.409 9.393-22.883 14.671-34.1 11.2-23.788 18.058-31.272 23.566-37.287.773-.844 1.516-1.655 2.228-2.464 2.338-2.58 3.164-5.4 2.212-7.553-.474-1.068-1.813-2.86-5.468-2.86-1.594 0-2.887.076-4.677.18-4.2.245-11.227.655-31.88.748l-27.938.133c-15.25 0-21.346-.419-25.8-.726-2.716-.187-4.862-.335-8.106-.335-3.811 0-5.167 1.706-5.636 2.723-.937 2.031-.126 4.778 2.235 7.546 3.963 4.53 9.892 12.632 20.643 35.263 7.894 16.58 11.253 24.432 17.989 41.145a7.976 7.976 0 0 1 -.011 6.405c-7 18.217-14.926 36.821-23.548 55.3-.917 2-1.913 3.192-2.663 3.192-.749 0-1.747-1.194-2.674-3.2a1174.793 1174.793 0 0 1 -45.121-109.828c-2.672-7.535-3.806-12.665-1.7-16.588 2.171-4.039 7.869-7.016 18.479-9.651 2.94-.737 6.849-2.2 6.849-6.4 0-3.75-2.923-5.9-8.018-5.9-2.968 0-6.574.2-10.749.43-5.368.3-11.452.631-17.859.631h-12.442c-3.405 0-6.714-.276-9.913-.543s-6.2-.518-9.29-.518c-4.164 0-6.961 2.052-6.961 5.106 0 2.79 1.978 4.68 4.941 6.654 5.656 3.828 12.98 15.453 21.768 34.551 15.613 34.129 34.769 79.246 52.556 123.781 4.357 10.888 9.039 15.328 16.158 15.328 6.927 0 10.587-5.617 14.568-15.321 7.23-17.7 15.679-37.989 24.456-54.737.911-1.714 1.878-2.7 2.655-2.7h.006c.767.005 1.71.983 2.583 2.676 9.251 18.368 17.571 36.789 24.728 54.747 4.818 12.179 7.868 15.331 14.837 15.331 5.945 0 10.226-4.588 14.31-15.34l44.1-114.819c13.878-36.056 21-41.345 24.816-44.179 2.256-1.628 4.122-3.211 4.122-6.11-.003-3.025-2.422-4.977-6.166-4.977zm-107.142 43.54c-2.85 7.186-5.959 14.816-9.376 21.92v.009c-.752 1.6-1.679 2.526-2.546 2.537-.935.021-1.944-.968-2.807-2.7a166.694 166.694 0 0 1 -11.324-27.255c-2.816-9.13-2.638-16.214.514-20.484 2.5-3.388 6.907-5.107 13.1-5.107 7.055 0 11.905 1.876 14.415 5.575 3.411 5.04 2.749 13.619-1.976 25.505z" transform="translate(-87.212 -838.99)"></path><path d="m911.7 1042.936c-12.844-3.459-16.077-7.337-16.077-29.891 0-6.167.1-12.839.2-19.29.1-6.407.2-13.032.2-19.117 0-20.351-15.774-42.317-41.259-42.317-8.539 0-14.424 1.868-24.231 7.7-1.763 1.1-3.507 1.365-4.667.721s-1.754-2.15-1.754-4.373v-23.178c0-38.574 2.359-47.935 3.493-52.434a14.362 14.362 0 0 0 .613-3.718 5.134 5.134 0 0 0 -2.843-5.016c-2.658-1.227-6.544-.263-9.662 2.4a50.36 50.36 0 0 1 -21.792 10.908c-3.681.7-5.71 2.6-5.71 5.355 0 2.35 1.4 3.667 3.573 5.43q.636.483 1.245.936c7.237 5.406 11.224 8.385 11.471 36.144v99.854c0 22.122-1.162 27.257-13.487 31.365-2.826.94-5.585 2.147-5.585 5.584 0 1.561.7 4.179 5.371 4.179 5.023 0 10.5-.28 14.9-.5 3.052-.156 5.689-.291 7.35-.291h6.75c3.78 0 6.742.209 9.607.412 2.786.2 5.418.383 8.67.383 4.028 0 7.756-.571 7.756-4.709 0-3.33-2.567-4.563-5.075-5.328-10.356-3.2-16.645-6.894-16.645-31.091v-43.7c0-13.321 7.09-19.526 22.311-19.526 16.609 0 28.662 15.008 28.662 35.684v27.546c0 21.145-2.882 27.3-14.679 31.366-3.954 1.317-6.377 2.292-6.377 5.583 0 1.257.6 4.179 6.166 4.179 5.032 0 9.074-.281 12.321-.506 2.238-.155 4.172-.289 5.822-.289h7.548c3.719 0 7.986.245 12.111.481 3.987.23 7.752.446 10.933.446 5.32 0 8.018-1.807 8.018-5.371-.002-3.047-1.766-5.063-5.248-6.011z" transform="translate(-87.212 -838.99)"></path><path d="m958.008 906.495c9.4 0 16.229-6.714 16.229-15.964 0-8.995-6.522-15.037-16.229-15.037s-16.232 6.042-16.232 15.037c0 9.548 6.524 15.964 16.232 15.964z" transform="translate(-87.212 -838.99)"></path><path d="m1065.453 937.485h-22.253c-12.77 0-13.7-1.547-13.7-11.184v-29.931c0-6.646-2.86-9.836-5.694-10.05-2.39-.175-5.547 1.817-6.488 8.019-5.764 31.9-12.63 40.39-25.848 47.371l-.335.181c-4.9 2.648-8.131 4.4-8.131 7.452 0 4.709 4.53 4.709 10.8 4.709 13.022 0 14.759 3.234 14.759 16.085 0 3.5-.368 10.045-.793 17.627-.591 10.508-1.325 23.587-1.325 33.359 0 11.179 3.7 20.295 10.707 26.365 6.246 5.412 14.8 8.274 24.726 8.274 16.457 0 26.958-11.81 26.958-19.94a3.3 3.3 0 0 0 -1.354-2.97c-.73-.485-2.066-.867-4.244.051-3.479 1.34-7.019 2.448-15.138 2.448-9.785 0-19.659-5.054-19.659-16.346v-56.152c0-5.511 3.191-8.8 8.538-8.8h14.034c11.167 0 20.6-5.128 20.6-11.2.005-2.004-.796-5.368-6.16-5.368z" transform="translate(-87.212 -838.99)"></path><g transform="translate(-87.212 -838.99)"><path d="m1214.1 871.3a12.278 12.278 0 0 0 -2 .191c-1.994.3-5.705.856-20.328.856-17.337 0-21.5-.689-23.5-1.021a10.6 10.6 0 0 0 -1.877-.2c-2.718 0-4.474 1.928-4.474 4.911 0 1.109.086 2.675.194 4.658.2 3.634.5 9.127.5 16.708 0 3.623 1.868 5.786 5 5.786a5.148 5.148 0 0 0 5.171-5.349c0-10.649 4.011-15.5 7.737-15.5 2.7 0 3 .475 3.2 2.661l-.35 29.651c.081 10.154-4.7 11.92-8.311 12.365-3.326.573-5.12 2.993-5.12 4.978a4.982 4.982 0 0 0 5.346 5.173c2.005 0 3.371-.1 4.959-.213 2.028-.145 4.327-.31 8.734-.31 4.556 0 7.089.168 9.377.319 1.662.109 3.1.2 5.014.2a5.386 5.386 0 0 0 5.779-5.347c0-1.207-.531-4.092-5.471-4.817-3.342-.341-7.776-1.992-7.7-12.336l.611-30.086c0-1.593.7-2.242 2.416-2.242 3.545 0 8.259 1.5 8.259 14.451 0 5.061 3.494 5.608 5 5.608 2.426 0 5.259-1.446 5.259-5.52 0-3.882.225-9.588.389-13.755l.019-.472c.109-2.828.2-5.27.2-6.443.002-3.525-1.133-4.905-4.033-4.905z"></path><path d="m1301.649 926.566c-6.724-2.058-7.168-3.4-7.168-11.8v-18.75c0-10.255.672-10.943 6.792-14.082 3.046-1.613 4.809-3.037 4.809-5.543 0-2.857-1.933-4.563-5.17-4.563-.822 0-1.871.092-3.227.211-1.689.147-3.6.314-5.5.314h-9.856a5.667 5.667 0 0 0 -5.224 3.48l-10.636 23.1c-.128.273-.287.376-.354.377s-.233-.108-.382-.405l-11.791-23.582a5.527 5.527 0 0 0 -4.668-2.973h-9.674c-2.592 0-4.875-.168-6.9-.317-1.5-.111-2.8-.208-3.918-.208-3.294 0-5.26 1.706-5.26 4.563 0 2.726 2.28 3.875 5.038 5 7.566 2.927 8.654 3.958 8.654 13.232v19.537c0 11.187-.824 11.757-8.333 13.532-3.308.858-4.487 2.9-4.487 4.52 0 3.089 2.167 5.084 5.521 5.084 1.051 0 2.467-.115 4.111-.25 2.067-.168 4.408-.359 6.53-.359h3.488c2.442 0 5.041.194 7.128.35 1.867.14 3.478.259 4.819.259 3.729 0 6.044-2.182 6.044-5.694 0-2.514-1.581-4.213-4.712-5.055-8.015-1.746-8.544-3.184-8.544-12.387v-20.589a2.686 2.686 0 0 1 .311-1.541c.26.01.467.118 1.088 1.359l7.631 15.084c3.231 6.375 4.44 8.761 8.038 8.761s4.805-2.573 7.2-7.7l7.96-16.876c.631-1.328.791-1.328 1.323-1.328.388 0 .585.636.585 1.89v21.543c0 10.112-1.221 10.54-8 12.911l-.78.277c-3.086.823-5 2.554-5 4.517 0 2.974 2.283 4.822 5.958 4.822 1.851 0 4.1-.146 6.28-.286 1.7-.111 3.618-.236 4.881-.236h3.577c2.078 0 4.263.159 6.189.3 1.586.116 3.084.224 4.279.224 3.726 0 6.042-2.216 6.042-5.782.003-2.321-1.576-3.983-4.692-4.941z"></path></g><path d="m523.869 972.975h-51.913c-5.208 0-8.018 7.2-8.018 13.98 0 4.289.761 9.21 6.694 9.21h51.915c5.265 0 8.284-4.9 8.284-13.448 0-6.017-1.164-9.742-6.962-9.742z" transform="translate(-87.212 -838.99)"></path><path d="m984.012 1044.406c-11.13-3.579-16.4-7.842-16.657-31.368l-.265-38.268c0-12.11.638-22.69 1.02-29.01.178-2.947.306-5.075.306-6.217v-3.31c0-4.1-2.535-6.958-6.165-6.958-4.489 0-6.595 2.528-9.329 6.434-4.1 6.67-10.07 10.228-16.992 14.355-2.133 1.222-3.681 3.537-3.681 5.506 0 1.571.765 3.806 4.459 5.558 7.548 3.115 10.365 9.88 10.769 25.826v26.091c0 21.746-1.646 27.7-13.95 31.345-4.08 1.053-6.442 2.307-6.442 5.6 0 1.561.8 4.179 6.164 4.179 4.927 0 10.411-.28 14.817-.5 3.093-.157 5.764-.293 7.432-.293h7.548a94.679 94.679 0 0 1 9.519.55c2.79.263 5.426.512 8.623.512 2.647 0 8.152 0 8.152-4.71 0-3.869-4.04-4.972-5.328-5.322z" transform="translate(-87.212 -838.99)"></path><path d="m1170.125 964.541c-6.312-20.309-22.637-31.956-44.788-31.956-30.618 0-53.708 27.075-53.708 62.979 0 19.537 5.964 35.76 17.247 46.913a52.374 52.374 0 0 0 37.122 15c21.931 0 40.2-12.962 45.475-32.3a15.944 15.944 0 0 0 .422-3.4c0-2.5-1.141-4.378-2.978-4.913-1.556-.452-3.885.111-5.761 3.062a36.567 36.567 0 0 1 -30.536 16.874c-18.4 0-38.069-11.844-38.069-45.087 0-2.925.416-4.642 1.349-5.567 1.47-1.46 4.675-1.434 9.994-1.393.941.007 1.947.015 3.02.015 6.155 0 12.7-.047 20.283-.1 10.606-.076 22.626-.161 38.385-.161 4.875 0 8.15-2.744 8.15-6.827a10.155 10.155 0 0 0 -2.191-5.907c-1.315-1.702-2.162-3.222-3.416-7.232zm-71.209 5.032c-.389-.5-.842-1.417-.293-3.541 1.9-6.9 7.836-18.467 26.315-18.467 11.692 0 20.851 7.587 20.851 17.273 0 5.683 0 7.211-23.765 7.211h-2.543c-11.229.008-18.628.022-20.565-2.476z" transform="translate(-87.212 -838.99)"></path></g></svg>
          </div>

          <div className='flex flex-row justify-between space-x-1 lg:space-x-7'>
            <a className='hidden lg:block self-center'>Login</a>
            <div className='scale-75 lg:scale-100'>
              <CiSearch size={25}/>
            </div>
            <div className='scale-75 lg:scale-100'>
              <CiHeart className='hidden lg:block' size={25}/>
            </div>
            <div className='scale-75 lg:scale-100'>
              <BsBag size={20}/>
            </div>
          </div>

        </div>

        <div className='flex justify-center lg:pt-8'>
          <ul className='hidden lg:block uppercase text-xs'>
              {nav.map((items, i) => (
                <div key={i} className='flex flex-row space-x-3'>
                  {items.li.map((li) => (
                    <li className='cursor-pointer' key={li}>{li}</li>
                  ))}
                </div>
              ))}
          </ul>
        </div>
      </div>
      <Collection/>
    <Footer/>
    </div>
    </>
  )
}

const nav = [
  {
    li: ['gifts', 'man', 'woman', 'kids', 'icons', 'eyewear', 'homeware', 'special items', 'brand']
  }
]


