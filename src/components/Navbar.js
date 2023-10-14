import React from 'react'
import logo from '../assets/logo.svg'
import { NAVBAR } from '../common/languages'
import { useSelector } from 'react-redux'
import Button from './button/Button'

const Navbar = () => {
  const { lang } = useSelector((store) => store.global)
  return (
    <div
      className='fixed top-0 left-0 w-full h-[90px] bg-white px-10 z-50'
      style={{ boxShadow: '0px 6px 20px 0px rgba(17, 194, 237, 0.10)' }}
    >
      <div className='max-w-7xl m-auto bg-white py-5 h-full flex justify-between'>
        <div className='flex items-center'>
          <div className='mr-20'>
            <img src={logo} alt='' />
          </div>
          <ul className='flex font-medium gap-10'>
            {NAVBAR.map((nav, index) => {
              return (
                <li key={index} className='relative group'>
                  <a
                    href='#'
                    className='group-hover:text-p500 transition-all ease-linear'
                  >
                    {nav[lang]}
                  </a>
                  <div className='absolute bg-p500 h-[2px] duration-300 w-0 group-hover:w-full bottom-0 left-0 transition-all ease-linear'></div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='flex items-center'>
          <Button type='secondary' text='Request a demo' />
          <div className='h-full w-[1px] bg-gray mx-4 '></div>
          <div className='relative group'>
            <div className='center-list'>
              <span className='text-base font-semibold'>
                {lang === 'en' ? 'EN' : 'IT'}
              </span>
              {/* <IconChevronDown /> */}
            </div>
            <ul className='absolute hidden group-hover:hidden  bottom-0  translate-y-full left-0 bg-white shadow-sm'>
              <li>
                <div
                  onClick={() => ''}
                  className={`${lang === 'en' ? 'bg-gray' : 'bg-white'}`}
                >
                  EN
                </div>
              </li>
              <li>
                <div
                  onClick={() => ''}
                  className={`${lang !== 'en' ? 'bg-gray' : 'bg-white'}`}
                >
                  IT
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
