import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Image from '../assets/p.webp';
import Image2 from '../assets/photo1.webp'
import Image3 from '../assets/photo2.webp'

const ServiceSection = () => {

    const data = [
        { id: 1, title: 'Weddings', img: Image },
        { id: 2, title: 'Pre-Weddings', img: Image2 },
        { id: 3, title: 'Events', img: Image3 },
    ];

    const [mouseIn, setMouseIn] = useState(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                ease: 'expo.out',
                duration: 0.4,
            });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);


    return (
        <>

            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="cursor fixed top-0 left-0 h-6 w-6  rounded-full z-50 pointer-events-none flex items-center justify-center"
            >
                {mouseIn !== null && (
                    <div
                        className="h-48 w-48 bg-center bg-cover absolute"
                        style={{ backgroundImage: `url(${data[mouseIn].img})` }}
                    />
                )}
            </div>

            {/* Hover Section */}
            <div className="h-screen relative text-white pt-20 flex justify-center items-start flex-col bg-black">
                <p className='pl-11 absolute top-[10%] font-Nothing text-white text-5xl'>Our Services ...</p>
                <div className=" w-full font-Playfair ">
                    {data.map((work, index) => (
                        <div
                            key={work.id}
                            onMouseEnter={() => setMouseIn(index)}
                            onMouseLeave={() => setMouseIn(null)}
                            className="p-10 border-b border-white/20"
                        >
                            <h1 className="text-5xl">{work.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default ServiceSection