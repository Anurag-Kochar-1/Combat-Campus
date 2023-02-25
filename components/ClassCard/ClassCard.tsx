"use client"

import { AppContext } from '@/context/AppContext'
import { SignInWithGoogleFunction } from '@/service/Auth/AuthService'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const ClassCard = ({ classObject }: { classObject: any }) => {
  const { userDetails } = useContext(AppContext)
  const rotuer = useRouter()

  return (
    <div
      onClick={() => {
        if (userDetails.uid !== null) {
          rotuer.push(`/class/JD7UPZr1r7pR6YyKxHjL`)
        } else {
          SignInWithGoogleFunction()
          rotuer.push(`/class/JD7UPZr1r7pR6YyKxHjL`)
        }

      }}
      className='w-52 h-52 relative rounded-md bg-brand m-2 flex justify-start items-end hover:scale-105 hover:cursor-pointer'>

      {classObject?.classLogos && (
        <Image
          src={classObject?.classLogos[Math.floor(Math.random() * 1)]}
          alt="image"
          width={300}
          height={300}
          className='z-10 absolute w-full h-full object-cover bg-blend-multiply rounded-md'
          draggable="false"
        />
      )}
      <h3 className='z-10 text-white font-semibold font-montserrat text-2xl p-4'> {classObject?.className} </h3>
    </div>
  )
}

export default ClassCard