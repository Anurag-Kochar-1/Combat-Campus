"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Button/Button'

const EarnCoinsSection = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('subjects-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className='w-full py-12 bg-light flex flex-col md:flex-row items-center justify-center'>
            <div className='w-full flex flex-col items-center md:items-end md:px-10 justify-center text-center space-y-2'>
                <Image
                    src={`/coin.png`}
                    alt={'goldCoin'}
                    width={200}
                    height={200}
                    className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60"
                    draggable={"false"}
                />
            </div>

            <div className='w-full flex flex-col items-center md:items-start md:px-10 justify-center text-center space-y-2 md:space-y-5'>
                <h3 className='text-brand text-4xl md:text-5xl lg:text-6xl font-semibold font-montserrat'> Earn Gold Coins </h3>
                <p className='text-dark text-lg md:text-xl lg:text-2xl font-medium font-open_sans'> By Giving Small Quiz after Exploring metaverse Classes </p>
                <Button
                    onClick={handleClickScroll}
                >
                    Checkout Classes
                </Button>
            </div>
        </section>
    )
}

export default EarnCoinsSection