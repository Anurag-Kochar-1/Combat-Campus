"use client"

import Image from 'next/image'
import React from 'react'
import logo from "../../public/images/logos/logo.png"
import Button from '../Button/Button'

const NavBar = () => {
  return (
    <header className='w-full h-20 bg-gray-100 px-5 flex justify-between items-center'>
      <div className='flex justify-center items-center space-x-3'>
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="h-12 w-12"
        />
        <h1 className='font-montserrat font-bold text-2xl text-brand'> Bharat Shakti Verse </h1>
      </div>


      <Button
        onClick={() => {
        }}
      >
        Sign in
      </Button>
    </header>
  )
}

export default NavBar