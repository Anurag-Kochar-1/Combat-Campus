import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import { ShopProducts } from "../../constants/ShopProducts/ShopProducts"
import ProductCard from '@/components/ProductCard/ProductCard'

const page = () => {
    return (
        <main className='w-full mt-[5rem] flex flex-col items-center justify-start'>
            <NavBar place='home' />

            <h1 className='text-7xl text-black font-montserrat font-bold text-center my-5'> Shop </h1>
            <div className='w-full flex flex-wrap justify-center items-center space-x-4 py-10'>
                {ShopProducts?.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>



        </main>
    )
}

export default page