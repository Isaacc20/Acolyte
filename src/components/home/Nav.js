import React from 'react'
import frame from '../../assets/icons/frame.svg'
import Button from '../shared/Button'

const Nav = () => {
  return (
    <>
        <div className='bg-grey-800 flex flex-col w-1/5 rounded-xl'>
            <div className='flex flex-col gap-4 p-10'>
                <div className='bg-grey-900 p-3 rounded-lg'>
                    <h3 className='text-sm font-bold text-white flex items-center'><img src={frame} width={15} alt="" />&nbsp; 200</h3>
                    <span className='text-[12px] text-grey-400'>~US$1000.00</span>
                </div>
                <h2 className='font-bold text-3xl text-white'>What&apos;s happenin  around you today?</h2>
                <Button text={'Create a Post +'} bgColor={'bg-grey-600'} />
                <hr />
                <div className="flex flex-col gap-4">
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav