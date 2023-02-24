"use client"

import { useState, useContext } from "react"
import Image from 'next/image'
import logo from "../../public/images/logos/logo.png"
import Button from '../Button/Button'
import { onAuthChanged, SignInWithGoogleFunction, signOutUser } from "@/service/Auth/AuthService"
import { AppContext, IAppContextType } from "@/context/AppContext"
import Link from "next/link"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import HamBurgerMenu from "../HamBurgerMenu/HamBurgerMenu"

const NavBar = () => {
  const { userDetails } = useContext<IAppContextType>(AppContext)
  const [isHamBurgerMenuVisible, setIsHamBurgerMenuVisible] = useState<boolean>(false)



  return (
    <header className='w-full h-20 bg-gray-100 px-5 flex justify-between items-center'>
      <Link href={`/`} className='flex justify-center items-center space-x-3'>
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="h-12 w-12"
        />
        <h1 className='hidden sm:inline-block font-montserrat font-bold text-2xl text-brand'> Bharat Shakti Verse </h1>
      </Link>


      <div className="flex justify-end items-center space-x-2">
        <Button
          onClick={() => {
            !userDetails ? SignInWithGoogleFunction() : signOutUser()
          }}
        >
          {userDetails ? "Log out" : "Sign in"}
        </Button>

        {!isHamBurgerMenuVisible ? (
          <RxHamburgerMenu className='lg:hidden w-6 h-6 text-Dark hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
        ) : (
          <RxCross1 className='lg:hidden w-6 h-6 text-Dark hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
        )}
      </div>
      <HamBurgerMenu isHamBurgerMenuVisible={isHamBurgerMenuVisible} setIsHamBurgerMenuVisible={setIsHamBurgerMenuVisible} />


    </header>
  )
}

export default NavBar