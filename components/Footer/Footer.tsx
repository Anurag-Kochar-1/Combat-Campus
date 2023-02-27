import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full h-20 bg-dark border-t-2 border-t-brand flex justify-center items-center'>
            <p className='text-light font-medium text-base'>
                Made by
                <a
                    target={"_blank"}
                    rel='noreferrer'
                    className='text-brand mx-1'
                    title='link'
                    href="https://www.linkedin.com/in/anurag-kochar-527696242/">
                    Anurag kochar
                </a>
                with ❤️
            </p>
        </footer>
    )
}

export default Footer