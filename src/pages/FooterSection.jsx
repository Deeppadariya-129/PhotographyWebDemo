import React from 'react'
import Logo from '../assets/logoFinal.png'

const FooterSection = () => {
    return (
        <>
            {/* <div className='w-full h-screen bg-amber-100'> Hello </div> */}
            <div class="w-full  mx-auto p-4 md:py-8 bg-black">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a class="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Logo} class="h-50" alt="Flowbite Logo" />
                        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </a>
                    <ul class="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://zybit-2dtd.vercel.app/" class="hover:underline underline ">ZYBIT</a>. All Rights Reserved By ZYBIT . Demo Website</span>
            </div>
        </>
    )
}
export default FooterSection