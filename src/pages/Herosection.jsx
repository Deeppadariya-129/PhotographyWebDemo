import React, { useEffect, useState } from 'react'
import Logo from '../assets/logoFinal.png'

const Herosection = () => {
    return (
        <>
            <div className='w-full h-screen bg-black'>
                <div className='flex flex-col w-full h-full'>
                    <div className='flex px-10 justify-between items-center'>
                        <img loading='lazy' className='h-25' src={Logo} />
                        <div className='flex font-Nothing text-white text-2xl gap-10'>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p>ContactUs</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-full bg-black items-center gap-20 pt-40'>
                        <p className='text-7xl w-[60%] text-center font-Playfair text-white'>Capturing Love, One Frame at a Time</p>
                        <p className=' font-Nothing text-2xl text-white text-center w-[80%]'>We capture emotions, stories, and the beauty of life.
                            Let every moment live forever in a frame.Your moments deserve to be remembered beautifully.
                            We turn them into timeless visual stories.</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Herosection