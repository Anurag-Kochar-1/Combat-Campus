"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import logo from "../../public/images/logos/logo.png"
import Button from '../Button/Button'
import { onAuthChanged, SignInWithGoogleFunction, signOutUser } from "@/service/Auth/AuthService"

const NavBar = () => {

  const [authState, setAuthState] = useState<boolean>(false)

  useEffect(() => {
    onAuthChanged(user => {
      setAuthState(!!user)
    })
  }, [])


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
          !authState ? SignInWithGoogleFunction() : signOutUser() 
          console.log(authState)
        }}
      >
        {authState ? "Log out" : "Sign in"}
      </Button>
    </header>
  )
}

export default NavBar