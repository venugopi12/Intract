import React from 'react'
import img1 from '../images/c7caa8a1de0d45f4acd7c51d145df808.png';
import img2 from '../images/58615645160e4aab89da48d9f62cedf8.png';
import img3 from '../images/493018d95dd24096a4badafe9390eea7.png';
import img4 from '../images/a9e03cd73a494e09864475c36318c03b.png'
const Experts = () => {
  return (
    <div className='bg-[#0E0E0E] pt-[50px] shadow-lg'>
      <div className='text-white'>
        <h1 className='text-2xl font-semibold'>Top Crypto Creators and Projects to Follow</h1>
        <h3 className='text-[#6B6B6B] font-semibold '>Answers to your crypto doubts, straight from the experts</h3>
      </div>
      <div className='flex p-4'>
        <div className='flex px-[12px] shadow-[#4F3C2B]'>
          <img className='relative w-full h-auto rounded-lg border-2 border-[#434343] shadow-lg' src={img1} />
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[350px]'>How to plan your</h1>
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[370px]'> retirement with crypto?</h1>
        </div>
        <div className='px-[12px] flex'>
          <img className='relative w-full h-auto rounded-lg border-2 border-[#434343] ' src={img2} />
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[350px]'>Why are there limited</h1>
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[370px]'> Bitcoin?</h1>
        </div>
        <div className='px-[12px] flex'>
          <img className='relative w-full h-auto rounded-lg border-2 border-[#434343]' src={img3} />
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[350px]'>How does Uniswap</h1>
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[370px]'> actually work?</h1>
        </div>
        <div className='px-[12px] flex'>
          <img className='relative w-full h-auto rounded-lg border-2 border-[#434343]' src={img4} />
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[350px]'>How to spot crypto</h1>
          <h1 className='absolute text-[#FFFFFF] text-2xl font-semibold ml-[20px] mt-[370px]'> projects to invest in?</h1>
        </div>
      </div>
    </div>
  )
}

export default Experts