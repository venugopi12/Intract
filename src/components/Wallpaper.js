import React from 'react'
import wallpaper from '../images/intract-academy-background-5547a705.png';
import arrow from '../images/arrow-right-1c96f4ae.svg';
const Wallpaper = () => {
  return (
    <div>
      <div className='relative'>
        <img className='w-full h-auto' src={wallpaper} />
        <div className='absolute inset-0 pt-[120px] items-center justify-center phone:pt-[40px]'>
          <div className='text-white bg-opacity-50'>
            <h1 className='text-2xl pr-[8%] phone:text-sm'>Intract</h1>
            <h1 className='text-5xl phone:text-sm phone:font-bold'>Academy</h1>
            <p className='pt-[50px] text-xl font-semibold phone:pt-[10px] phone:text-sm phone:font-thin'>Intract users <span className='text-[#656465]'>have together made more than</span> $100 <span className='text-[#656465]'>million in web3.</span></p>
            <p className='text-xl font-semibold phone:text-sm phone:font-thin'><span className='text-[#656465] '>Join them and </span> learn how to earn crypto!</p>
            <div className='flex '>
              <button className='flex flex-row text-center justify-center mt-[30px] bg-[#7344EC] rounded-lg w-[200px] ml-[40%] pt-[8px] h-[40px] phone:w-[80px] phone:text-[10px] phone:h-[20px] phone:pt-[2px] phone:ml-[35%] phone:mt-[10px]'>Get Started
                <img className='p-2 phone:w-[20px] phone:p-1' src={arrow} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallpaper