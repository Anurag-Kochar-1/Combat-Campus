"use client"

import { useState, useEffect, useContext } from "react"
import Image from 'next/image'
import logo from "../../public/images/logos/logo.png"
import Button from '../Button/Button'
import { onAuthChanged, SignInWithGoogleFunction, signOutUser } from "@/service/Auth/AuthService"
import { AppContext, IAppContextType } from "@/context/AppContext"

const NavBar = () => {

  const [authState, setAuthState] = useState<boolean>(false)
  const { userDetails } = useContext<IAppContextType>(AppContext)

  // useEffect(() => {
  //   onAuthChanged(user => {
  //     setAuthState(!!user)
  //     console.log(user)
  //   })
  // }, [authState])


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
        <h1 className='hidden sm:inline-block font-montserrat font-bold text-2xl text-brand'> Bharat Shakti Verse </h1>
      </div>


      <Button
        onClick={() => {
          !userDetails ? SignInWithGoogleFunction() : signOutUser()
          console.log(authState)
        }}
      >
        {userDetails ? "Log out" : "Sign in"}
      </Button>


    </header>
  )
}

export default NavBar