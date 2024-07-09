import React from 'react'
import logo from '../images/intract_text.svg'
const Footer = () => {
  return (
    <div className='bg-[#000000] text-white pt-[50px]'>
      <div className='w-[100%] flex'>
        <div className='w-[35%] px-[12px] cursor-pointer'>
          <img className='w-[22%] mb-[20px]' src={logo} />
          <p className='w-[65%] text-sm text-[#6E6E6E]'>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
        </div>
        <div className='w-[15%] ml-[20px]'>
          <p>INTRACT</p>
          <ul className='mb-[30px] text-[#6E6E6E] cursor-pointer'>
            <li>Explore Quests</li>
            <li>Comunities</li>
            <li>Alpha Hub</li>
          </ul>
        </div>
        <div className='w-[15%]'>
          <p>EARN</p>
          <ul className='mb-[30px] text-[#6E6E6E] cursor-pointer'>
            <li>Refer & Earn</li>
            <li>Leaderboard</li>
            <li>Achievements</li>
          </ul>
        </div>
        <div className='w-[15%]'>
          <p>ABOUT</p>
          <ul className='mb-[30px] text-[#6E6E6E] cursor-pointer'>
            <li>Product Roadmap</li>
            <li>Affiliate Program</li>
            <li>Sign up Program</li>
            <li>Growth Community</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className='w-[15%]'>
          <p>SUPPORT</p>
          <ul className='mb-[30px] text-[#6E6E6E] cursor-pointer'>
            <li>Help Center</li>
            <li>Create your quest</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Community Guidelines</li>
          </ul>
        </div>
      </div>
      <div className='mt-[30px] flex flex-row items-center justify-center'>
        <p className='text-[#6E6E6E]'><span className='font-semibold font-m text-[#BBBBBB]'>Disclaimer:</span> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.</p>
      </div>
      <div className='flex flex-row mt-[30px]'>
        <h1>CREATED BY VENUGOPI</h1>
      </div>
    </div>
  )
}

export default Footer