import React from 'react'
import '../styles/home.css'
import Button from '../components/shared/Button'
import qr from '../assets/qr-code.svg'

const Home = () => {
  return (
    <>
        <div className="h-screen flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-evenly gap-60px md:gap-0">
          <div className="glass w-[85vw] md:w-[45vw] max-w-[450px] aspect-square md:aspect-auto border border-white-64 rounded-2xl bg-white-16 backdrop-blur-[1px] flex flex-col justify-center px-12 gap-4">
            <h1 className='text-4xl md:text-6xl 2xl:text-8xl text-white font-bold'>Social Interaction Made Fun</h1>
            <div className="flex gap-5 p-5 bg-white-16 backdrop-blur-[1px] border border-white-64 rounded-xl overflow-hidden">
              <img src={qr} alt="" />
              <div className="flex flex-col gap-5">
                <span className='text-white text-md font-semibold'>Scan QR code and Login to Acolyte or...</span>
                <Button text='Connect Wallet' bgColor={'bg-white-24'} />
              </div>
            </div>
          </div>
          <div className="fade w-[85vw] md:w-[45vw] max-w-[450px] aspect-square md:aspect-auto rounded-2xl"></div>
        </div>
    </>
  )
}

export default Home