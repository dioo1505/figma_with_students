import React from 'react'
import myImage from '../assets/Mask.png'
const Customer = () => {
  return (
<div className="banner-page flex justify-center w-full">

  <div className='bg-[#5A98F2] w-[80%] h-[425px] text-center rounded-[24px] text-white justify-items-center
'>

<h3 className='mullish pt-[50px] text-3xl'>What our customer are saying</h3>

<div className='flex pt-[180px] p-[50px] gap-[50px]'>

<div className='w-[40%] flex text-center gap-[30px] items-center'>
 <img src={myImage} alt="man-image" />

 <div className="titles flex-col">
 <h4 className='Mulish'>Edward Newgate</h4>
 <p className='text-[#FFFFFFD9] Mulish'>Founder Circle</p>
 </div>
</div>

<div className='w-[40%]'>
  <span className='Mulish'>
    “Our dedicated patient engagement app and 
web portal allow you to access information instantaneously (no tedeous form, long calls, 
or administrative hassle) and securely”
  </span>
</div>

</div>

  </div>
</div>
  )
}

export default Customer
