import React, { useContext } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import Button from '../Button/Button'
import ProfileCard from '../ProfileCard/ProfileCard'
import Wallet from '../Wallet/Wallet'
import { AppContext, IAppContextType } from '@/context/AppContext'

interface IProps {
    isHamBurgerMenuVisible: boolean
    setIsHamBurgerMenuVisible: React.Dispatch<React.SetStateAction<boolean>>
}



const HamBurgerMenu = ({ isHamBurgerMenuVisible, setIsHamBurgerMenuVisible }: IProps) => {
    const router = useRouter()
    const { userDetails, isTrainingModelOpen, setIsTrainingModelOpen } = useContext<IAppContextType>(AppContext)
    const pathname = usePathname()
    return (
        <div className={`z-40 fixed top-0 left-0 h-full w-[100%] bg-brand flex flex-col items-start justify-between ${isHamBurgerMenuVisible ? "translate-x-0" : "translate-x-full"} ease-in-out duration-500`}>
            <div className='w-full flex flex-col justify-center items-center px-4 py-4'>
                <div className='w-full flex justify-end items-center space-x-2'>
                    {!isHamBurgerMenuVisible ? (
                        <div className='flex justify-center items-center w-10 h-10 bg-Darkest rounded-full '>
                            <RxHamburgerMenu className='w-6 h-6 text-white  hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
                        </div>
                    ) : (
                        <div className='flex justify-center items-center w-10 h-10 rounded-full bg-Darkest'>
                            <RxCross1 className='w-6 h-6 text-white  hover:cursor-pointer' onClick={() => setIsHamBurgerMenuVisible(!isHamBurgerMenuVisible)} />
                        </div>
                    )}
                </div>

                <div className='w-full flex flex-col justify-start items-center space-y-3'>

                    {userDetails?.uid !== null && (
                        <div className='border-2 border-white p-2 rounded-lg hover:cursor-pointer'>
                            <ProfileCard place={"HamBurgerMenu"} />
                        </div>
                    )}

                    {userDetails?.uid !== null && (
                        <div className='h-10 px-6 font-open_sans text-white flex justify-center items-center space-x-2 text-base font-semibold bg-dark rounded-md hover:bg-white hover:text-brand hover:border-2 hover:border-brand hover:cursor-pointer'>
                            <Image
                                src={`/coin.png`}
                                alt={'goldCoin'}
                                width={100}
                                height={100}
                                className="w-6 h-6 "
                            />

                            <button
                                type='button'
                                title='wallet-button'
                            >
                                Wallet - 100 Combat Coins
                            </button>
                        </div>
                    )}

                    <div className='border-2 border-white p-2 rounded-lg hover:cursor-pointer'>
                        <Button
                            onClick={() => {
                                router.push(`/shop`)
                                setIsHamBurgerMenuVisible(false)
                            }}
                        >
                            Shop
                        </Button>
                    </div>


                    {pathname === '/class/JD7UPZr1r7pR6YyKxHjL' && (
                        <div className='border-2 border-white p-2 rounded-lg hover:cursor-pointer'>

                            <Button
                                onClick={() => {
                                    setIsTrainingModelOpen(!isTrainingModelOpen)
                                    setIsHamBurgerMenuVisible(false)
                                }}
                            >
                                Start Your Training !!!
                            </Button>
                        </div>
                    )}


                </div>

            </div>
        </div>
    )
}

export default HamBurgerMenu