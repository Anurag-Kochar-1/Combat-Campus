"use client"

import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContext'
import Image from 'next/image'
import { signOutUser } from '@/service/Auth/AuthService'

const ProfileCard = () => {
    const { userDetails, setuserDetails } = useContext(AppContext)

    return (
        <div className='flex justify-center items-center space-x-3'>
            {userDetails.displayPicture && (
                <Image
                    src={userDetails?.displayPicture as string}
                    alt="dp"
                    width={150}
                    height={150}
                    className="w-12 h-12 rounded-full"
                />
            )}

            <div className='flex flex-col items-center justify-start'>
                <p> {userDetails?.userName} </p>
                <span
                    onClick={() => {
                        signOutUser()
                        setuserDetails({
                            isUser: false,
                            userName: null,
                            uid: null,
                            displayPicture: null,
                            email: null
                        })
                    }}
                > Log out </span>
            </div>
        </div>
    )
}

export default ProfileCard