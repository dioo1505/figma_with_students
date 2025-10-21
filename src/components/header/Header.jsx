import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='w-full h-[60px] px-[150px] flex items-center justify-between'>
      <div className="header__logo flex items-center gap-[12px]">
        <div className="header__logo--circle w-[41px] h-[41px] bg-[#458FF6] rounded-[50%] flex items-center justify-center mullish text-[26px] text-amber-50 font-bold">
          <span>T</span>
        </div>
        <Link to={"/"} className='mullish font-medium text-[24px] text-[#233348]'>Trafalgar</Link>
      </div>
      <nav>
        <ul className='flex items-center gap-[40px]'>
          <li>
            <Link className='font-normal text-[18px] mullish text-[#1F1534]'>Home</Link>
          </li>
          <li>
            <Link className='font-normal text-[18px] mullish text-[#1F1534]'>Find a doctor</Link>
          </li>
          <li>
            <Link className='font-normal text-[18px] mullish text-[#1F1534]'>Apps</Link>
          </li>
          <li>
            <Link className='font-normal text-[18px] mullish text-[#1F1534]'>Testimonials</Link>
          </li>
          <li>
            <Link className='font-normal text-[18px] mullish text-[#1F1534]'>About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
