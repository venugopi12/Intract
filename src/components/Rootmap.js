import React from 'react'
import crypto from '../images/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png';
import cat from '../images/1b1912563b964393b0478949efad5ed3.png';
import flower from '../images/85903745c34d42d684a2dc505768afa7.png';
import catwithgun from '../images/83bd377d91ff441aa6f7c46a63c88506.png';
import reward from '../images/kol-reward-12e6ae06.gif';
import discord from '../images/discord-50baa5cf.svg';
import arrow from '../images/arrow-right-1c96f4ae.svg';
const Rootmap = () => {
  return (
    <div className='bg-[#0C0C0C] pb-[300px] shadow-lg phone:overflow-hidden phone:pb-[2px]'>
      <div className='flex items-center'>
        <svg className='absolute inset-0 flex-grow pt-[38%] phone:relative phone:pt-[0px]'>
          <path d="M0 50 Q50 50 100 70" stroke="#A286F2" fill='transparent' className='stroke-dotted' />
        </svg>
        <div className='inset-0 absolute bg-[#363232] rounded-md shadow-md p-4 flex items-center w-[30%] h-[30%] mt-[35%] ml-[5%] cursor-pointer phone:w-[30%] phone:h-[20%] phone:p-2 phone:absolute phone:top-2/4 phone:mt-[25px]' >
          <div>
            <img className='w-[80%] h-[150px] rounded phone:w-[100%] phone:h-[80px]' src={crypto} />
          </div>
          <div className='phone:text-[7px]'>
            <h1 className='font-bold text-[#FFFFFF] text-2xl phone:text-sm'>Basics of Crypto</h1>
            <p className='text-[#807F7F] font-semibold'>The safest and easiest place to start your crypto journey!</p>
          </div>
        </div>
        <div>
          <svg className=' absolute inset-0 ml-[200px] mt-[620px] w-[721px] h-[274px] phone:mt-[380px] phone:ml-[100px] phone:w-[200px]'>
            <path d="M10 1 Q150 500 20000 100" stroke='gray' fill='transparent' className='stroke-dotted' />
          </svg>
        </div>
      </div>
      <div className='float-right mr-[60px] phone:ml-[300px] phone:mr-[30px] '>
        <img className='w-[200px] h-[260px] rounded-lg phone:w-[100px] phone:h-[100px]' src={cat} />
        <div className='phone:text-[5px]'>
          <h1 className='text-[#9B9B9B] font-bold text-xl phone:text-[5px]'>Intract Certified: Learner NFT</h1>
          <p className='text-[#9B9B9B]'>Your crypto black-belt certificate</p>
          <button className='text-white border bg-[#151515] p-2 m-2 w-[30%] rounded'>Claim</button>
        </div>
      </div>
      <div className='float-right ml-[550px] phone:ml-[650px]'>
        <svg className='w-[721px] h-[274px] phone:w-[580px] phone:h-[150px]'>
          <path d="M1000 10 Q1 1000 500 1" stroke='gray' fill='transparent' className='stroke-dotted' />
        </svg>
      </div>
      <div className='items-center justify-center flex mt-[500px] ml-[450px] phone:ml-[0px] phone:mt-[330px]'>
        <div className='bg-[#363232] rounded-md shadow-md p-4 flex items-center justify-center w-[40%] h-[40%] cursor-pointer phone:w-[70%] phone:h-[100px]' >
          <div>
            <img className='w-[200px] h-[150px] rounded phone:w-[100px] phone:h-[90px]' src={flower} />
          </div>
          <div className=''>
            <h1 className='font-bold text-[#FFFFFF] text-2xl phone:text-sm'>Introduction to Airdrops</h1>
            <p className='text-[#807F7F] font-semibold phone:text-xs'>Your best bet to make it big in crypto!</p>
          </div>
        </div>
      </div>
      <div className=''>
        <svg className='w-[721px] h-[274px] phone:w-[800px] phone:h-[70px] phone:float-right phone:mr-[150px]'>
          <path d="M1000 2 Q100 10 -400 1000" stroke='gray' fill='transparent' className='stroke-dotted' />
        </svg>
      </div>
      <div className=''>
        <img className='rounded w-[15%] h-[20%] ml-[20px]' src={catwithgun} />
        <div className='float-left '>
          <h1 className='text-[#9B9B9B] font-bold text-lg phone:text-[8px]'>Intract Certified: Learner NFT</h1>
          <p className='text-[#9B9B9B] phone:text-[10px]'>Your proof of airdrop expertise</p>
          <button className='text-white border border-[#9B9B9B] bg-[#151515] p-2 m-2 w-[50%] rounded phone:w-[30%] phone:h-[20px] phone:text-[10px] phone:m-0 phone:p-0'>Claim</button>
        </div>
      </div>
      <div>
        <svg className='mt-[110px] ml-[90px] w-[721px] h-[274px] phone:ml-[60px] phone:mt-[70px] phone:w-[250px] phone:h-[100px]'>
          <path d="M10 1 Q150 500 2000 100" stroke='gray' fill='transparent' className='stroke-dotted' />
        </svg>
      </div>
      <div className='flex ml-[400px] p-4 m-2 phone:ml-[30px] phone:m-1 phone:m-0'>
        <div className=''>
          <div className='bg-[#151515] rounded-md shadow-md p-4 items-center justify-center w-[100%] h-[40%] cursor-pointer phone:w-[100px] phone:h-[20%]'>
            <p className='text-[#737373] phone:text-[7px]'>Rewards unlocks in</p>
            <div>
              {/* clock */}
            </div>
          </div>
          <div className='bg-[#151515] rounded-md shadow-md w-[350px] h-[85%] cursor-pointer mt-[50px] m-1 p-3 phone:w-[100px] phone:h-[80%] phone:p-1 phone:mt-[5px]'>
            <div className='flex items-center justify-center'>
              <img className='rounded w-[340px] h-[70%]' src={reward} />
            </div>
            <div className='flex mt-[10px] mb-[10px] phone:mt-[2px] phone:mb-[2px]'>
              <p className=' flex flex-row text-[#737373] text-sm phone:text-[5px]'>Exclusive Community</p>
              <div className='flex ml-[100px] phone:ml-[7px]'>
                <img className='w-[20px] phone:w-[10px]' src={discord} />
                <p className='text-[#FFFFFF] ml-[5px] phone:text-[5px] phone:mt-[5px]'>Earndrop</p>
              </div>
            </div>
            <hr></hr>
            <div className='mt-[20px] phone:mt-[0px]'>
              <p className='text-[#737373] flex phone:text-[7px]'>Complete all Essential quests</p>
              <p className='text-[#737373] flex phone:text-[7px]'>Complete at least 1 Alpha Hub quest today</p>
              <div className=''>
                <button className='items-center justify-center flex flex-row text-center mt-[30px] bg-[#252525] rounded-lg w-[100%] h-[50px] text-[#A9A9A9] phone:h-[20px] phone:w-[90%] phone:text-[10px] phone:mt-[8px] phone:ml-[5px]'>Claim Now
                  <img className='p-2 phone:w-[25px]' src={arrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-[50px] '>
          <div className='bg-[#151515] rounded-md shadow-md w-[300px] h-[50%] cursor-pointer mt-[50px] phone:w-[200px]'>
            <div>
              <p className='text-[#6B6B6B] phone:text-[10px]'>Reward info</p>
              <hr></hr>
              <div className='text-left'>
                <h1 className='text-[#BCBCBC] phone:text-[8px]'>Free access to paid KOL (crypto earning) communities!</h1>
                <p className='text-[#7D7D7D] phone:text-[8px]'>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
                <p className='text-[#7D7D7D] phone:text-[8px]'>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rootmap