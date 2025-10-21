import React from 'react'
import img from '../../assets/trafalgar-illustration sec02 1.png'
import two from '../../assets/trafalgar-illustration sec03 1.png'
const Providers = () => {
  return (
    <div>
      <div className='flex gap-[100px] ml-[135px]'>
        <div className='cursor-pointer'>
        <img src={img} alt="" />
        </div>
        <div><br /><br />
          <h1 className='font-[700] text-[36px] text-[#000000]'>
            Leading healthcare
            providers
          </h1><br /><br />
          <p className='font-[300] text-[#7D7987] text-[18px]'>
            Trafalgar provides progressive, and affordable <br />
             healthcare, accessible on mobile and online for <br />
              everyone. To us, it's not just work. We take pride <br />
              in the solutions we deliver
          </p>
          <button className="text-[#458FF6] bg-[aliceblue] border border-[#458FF6] w-[200px] h-[60px] rounded-[55px] mt-[55px] cursor-pointer">Learn more</button>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br />





      <div className='flex gap-[100px] ml-[135px]'>
        <div><br /><br />
          <h1 className='font-[700] text-[36px] text-[#000000]'>
            Download our 
            mobile apps
          </h1><br /><br />
          <p className='font-[300] text-[#7D7987] text-[18px]'>
            Our dedicated patient engagement app and <br />
            web portal allow you to access information <br />
            instantaneously (no tedeous form, long calls, <br />
            or administrative hassle) and securely
          </p>
          <button className='text-[#458FF6] bg-[aliceblue] border border-[] w-[200px] h-[56px] rounded-[55px] mt-[55px] cursor-pointer'>Download</button>
        </div>
        <div>
          <img src={two} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Providers
