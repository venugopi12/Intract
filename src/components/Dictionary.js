import React from 'react'
import img from '../images/2e422c461a9a447b8c67c5642f6bf0fd.svg'
const Dictionary = () => {
  return (
    <div className='bg-[#0C0C0C] pt-[50px]'>
      <div>
        <h1 className='text-white text-2xl font-semibold'>Crypto Dictionary</h1>
        <h3 className='text-[#6B6B6B] font-semibold'>Your one-stop to catch up on all crypto terms</h3>
      </div>
      <div className='flex'>
        <img className='relative m-8 h-auto border-2 rounded-lg border-[#434343]' src={img} />
        <h1 className='absolute text-[#AFB7B6] font-bold mt-[400px] ml-[50px] text-2xl'>Web3 + Degen Glossary</h1>
        <p className='absolute text-[#AFB7B6] font-semibold mt-[430px] ml-[50px] text-md'>Your own crypto dictionary</p>
      </div>
      <div className='mt-[20px] items-center justify-center flex'>
        <button className='p-2 bg-[#393939] text-white rounded-full w-[10%] mb-[20px]'>Essentials</button>
        <button className='p-2 bg-[#151515] text-white rounded-full w-[10%] mb-[20px]'>Alpha Hub</button>     
      </div>
    </div>
  )
}

export default Dictionary