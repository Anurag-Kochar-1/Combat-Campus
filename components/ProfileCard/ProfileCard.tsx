import { AppContext } from '@/context/AppContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const ProfileCard = () => {
    const { userDetails } = useContext(AppContext)
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
        </div>
    )
}

export default ProfileCard