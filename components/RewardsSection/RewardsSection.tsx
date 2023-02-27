import React from 'react'
import { ShopProducts } from "../../constants/ShopProducts/ShopProducts"
import ProductCard from '../ProductCard/ProductCard'

const RewardsSection = () => {

    return (
        <section className='w-full py-12 bg-light flex flex-col items-center justify-center space-y-3'>
            <div className='w-full flex flex-col items-center md:items-start md:px-10 justify-center text-center space-y-2 md:space-y-5'>
                <h3 className='text-brand text-4xl md:text-5xl lg:text-6xl font-semibold font-montserrat'> Claim Rewards </h3>
                <p className='text-dark text-lg md:text-xl lg:text-2xl font-medium font-open_sans'> Get rewards by attending more classes and training tests </p>
            </div>

            <div className='w-full flex flex-wrap justify-center md:justify-start items-center'>
                {ShopProducts?.slice(0, 5)?.map((product: any) => {
                    return <ProductCard product={product} />
                })}
            </div>
        </section>
    )
}

export default RewardsSection