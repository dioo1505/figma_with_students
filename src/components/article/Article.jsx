import React from 'react'
import Doctor from '../../assets/doctor.png'
import Skop from '../../assets/skop.png'
import Maska from '../../assets/maska.png'
import { FaArrowRight } from "react-icons/fa6";

const Article = () => {
  return (
    <div>
      <section className='w-full h-[810px]'>
        <div className="all ">
          <span className='font-bold text-[36px] text-[#000000] ml-[540px]'>Check out our latest article</span>
          <hr className='w-[56px] h-[2px] bg-[black] mx-[735px] mt-[20px]' />
          <div className="job w-[1225px] h-[512px] flex justify-between ml-[180px] mt-[79px]">
            <div className="card w-[350px] h-[512px] rounded-[20px]">
              <img src={Doctor} alt="doctor" />
              <span className='w-[251px] h-[64px] text-[21px] font-bold'>
                Disease detection, check
                up in the laboratory
              </span>
              <p className='w-[266px] h-[84px] text-[#7D7987] text-[16px]
              font-light'>
                In this case, the role of the health laboratory is very important to do
                a disease detection...
              </p>
              <a href="/" className='flex items-center gap-[10px] text-[#4089ED] text-[17px]'>Read more <FaArrowRight /></a>
            </div>


            <div className="card w-[350px] h-[512px] rounded-[20px]">
              <img src={Skop} alt="mikroskop" />
              <span className='w-[251px] h-[64px] text-[21px] font-bold'>Herbal medicines that are
                safe for consumption
              </span>

              <p className='w-[266px] h-[84px] text-[#7D7987] text-[16px]
              font-light'>Herbal medicine is very widely used at this time because of its very good for your health...
              </p>
              <a href="/" className='flex items-center gap-[10px]  text-[#4089ED] text-[17px]'>Read more <FaArrowRight /></a>
            </div>
            <div className="card w-[350px] h-[512px] rounded-[20px]">
              <img src={Maska} alt="opani betidagi maskasi" />

              <span className='inline-block w-[311px] h-[64px] text-[21px] font-bold'>
                Natural care for healthy
                facial skin
              </span>
              <p className=' w-[266px] h-[84px] text-[#7D7987] text-[16px]
              font-light'>
                A healthy lifestyle should start from now and also for your skin health.
                There are some...
              </p>
              <a href="/" className='flex items-center gap-[10px]  text-[#4089ED] text-[17px]'>Read more <FaArrowRight /></a>
               </div>
          </div>
          <button className='w-[200px] h-[60px] border-2 border-[#4089ED] rounded-[55px] text-[18px] text-[#4089ED] ml-[690px]'>View all</button>
        </div>
      </section>
    </div>
  )
}

export default Article
