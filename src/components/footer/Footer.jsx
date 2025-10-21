import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <footer>
           <div className="header__logo flex items-center gap-[12px]">
              <div className="header__logo--circle w-[41px] h-[41px] bg-[#458FF6] rounded-[50%] flex items-center justify-center mullish text-[26px] text-amber-50 font-bold">
                <span>T</span>
              </div>
              <Link to={"/"} className='mullish font-medium text-[24px] text-[#233348]'>Trafalgar</Link>
            </div>

    </footer>
    </div>
  )
}

export default Footer
