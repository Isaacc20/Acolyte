import React from 'react'
import logo from '../assets/logo.svg'
import metamask from '../assets/icons/metamask_symbol.svg'
import Button from './shared/Button'

const Header = () => {
  return (
    <>
        <header className="flex items-center justify-between py-6 px-4 sm:px-12 bg-white-16 border-b border-b-white-64">
            <img src={logo} alt="" />
            <Button text={'Connect Metamask'} bgColor={"bg-white-24 hover:bg-white-16"} icon={metamask} />
        </header>
    </>
  )
}

export default Header