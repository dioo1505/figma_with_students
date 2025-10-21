import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
   <br />
   <br />
    <footer className='bg-blue-500 text-amber-50 h-100 p-25 flex gap-50 '>
      <div>

           <div className="header__logo flex items-center gap-[12px]">
              <div className="header__logo--circle w-[41px] h-[41px] text-blue-700 rounded-[50%] flex items-center justify-center mullish text-[26px] bg-white font-bold">
                <span>T</span>
              </div>
       <Link to={"/"} className='mullish font-medium text-[24px] text-amber-50'>
  Trafalgar
</Link>

            </div>
            <br />
<p className='w-100 text-xl'>
  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone
</p>
<br />
<span>
  ©Trafalgar PTY LTD 2020. All rights reserved
</span>
      </div>


<div>
<h2>
  Company
</h2>
<br />

About
<br />
<br />
Testimonials
<br />
<br />

Find a doctor
<br />
<br />

Apps

</div>
<div>
<h2>
  Region
</h2>
<br />

Indonesia
<br />
<br />

Singapore
<br />
<br />

Hongkong
<br />
<br />

Canada
<br />

</div>
<div>
<h2>
  Help
</h2>
<br />
Help center
<br />
<br />
Contact support
<br />
<br />

Instructions
<br />
<br />

How it works
</div>
    </footer>
    </div>
  )
}

export default Footer
