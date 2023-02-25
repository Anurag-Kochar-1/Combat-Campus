import Image from 'next/image'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const Leaderboard = ({ leaderBoardData }: { leaderBoardData: any }) => {
    return (
        <section className='w-[90%] flex flex-col justify-start items-center space-x-2 py-10'>
            <h3 className='text-4xl text-black font-montserrat font-bold text-center'>Bharat ke Top Learners</h3>
            <SearchBar />

            <div className='w-full flex flex-col justify-start items-center'>
                {leaderBoardData && leaderBoardData?.map((user: any) => {
                    return (
                        <div className='w-full flex justify-between items-center p-2 m-2'>
                            <Image
                                src={user?.displayPicture as string}
                                alt="dp"
                                width={150}
                                height={150}
                                className="w-9 h-9 rounded-full"
                            />
                            <p> {user?.userName} </p>

                            <div className='flex justify-start items-center space-x-1'>
                                <span> {user?.userCoins} Bharat Coins </span>
                            </div>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}

export default Leaderboard