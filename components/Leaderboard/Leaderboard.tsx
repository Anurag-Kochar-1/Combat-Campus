import Image from 'next/image'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Leaderboard = ({ leaderBoardData }: { leaderBoardData: any }) => {
    return (
        <section className='w-[90%] flex flex-col justify-start items-center space-x-2 py-10'>
            <h3 className='text-5xl text-white font-montserrat font-bold text-center'> Top Learners</h3>
            <SearchBar />



            <div className='w-full flex flex-col justify-start items-center my-10'>
                <div className='w-full bg-brand md:w-[60%] flex justify-between items-center p-4 m-2 rounded-lg text-center'>
                    <span className='font-bold text-xl font-montserrat text-white'> DP </span>
                    <span className='font-bold text-xl font-montserrat text-white'> Name </span>
                    <span className='font-bold text-xl font-montserrat text-white'> Coins </span>
                </div>
                {leaderBoardData && leaderBoardData?.map((user: any) => {
                    return (
                        <div
                            key={user?.userID}
                            className='bg-white  w-full md:w-[60%] flex justify-between items-center text-center p-4 m-2 border-2 border-brand rounded-lg'>
                            <Image
                                src={user?.displayPicture as string}
                                alt="dp"
                                width={150}
                                height={150}
                                className="hidden sm:inline-block w-9 h-9 rounded-full"
                            />
                            <p className='font-open_sans text-base font-medium text-black'> {user?.userName} </p>

                            <div className='flex justify-start items-center space-x-1'>
                                <span> {user?.userCoins} Combat Coins </span>
                            </div>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}

export default Leaderboard