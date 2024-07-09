import React from 'react'
import logo from '../images/intract_text.svg';
import broadcast from '../images/broadcast_or-04af786c.svg'
const Header = () => {
  return (
    <div className='bg-[#060606] flex h-[70px] w-[100%] top-[0px]'>
      <div className='flex w-[10%] items-center justify-center'>
        <img src={logo} />
      </div>
      <div className='w-[40%] flex flex-row items-center justify-center'>
        <div className='px-[12px] cursor-pointer text-[#E7E7E7]'><a className='font-semibold'>Compass</a></div>
        <div className='px-[12px] cursor-pointer text-[#E7E7E7]'><a className='font-semibold'>Explore</a></div>
        <div className='px-[12px] cursor-pointer text-[#E7E7E7]'><a className='font-semibold'>Academy <span className='m-1 bg-[#6435E9] rounded-lg font-semibold text-xs p-1 justify-center'>New</span></a></div>
        <div className='px-[12px] cursor-pointer text-[#E7E7E7]'><a className='font-semibold'>NFTs</a></div>
        <div className='px-[12px] cursor-pointer text-[#E7E7E7]'><a className='font-semibold'>For Projects</a></div>
      </div>
      <div className='w-[30%] flex justify-center items-center'>
        <input className='bg-[#181818] w-[100%] h-[50%] text-[#747474] rounded-lg focus:outline-none focus:border-[2px] pl-[20px]' type='text' placeholder='Search for ecosystems, trending quests etc,.' />
      </div>
      <div className='w-[20%] flex flex-row justify-center items-center'>
        <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center overflow-hidden bg-[#100A20] border border-[#FA8922] cursor-pointer'>
          <img src={broadcast} />
        </div>
        <button className='ml-[40px] p-2 bg-[#FFFFFF] rounded-full text-[#212121] font-bold corsor-pointer'>Sign In</button>
      </div>
    </div>
  )
}

export default Header