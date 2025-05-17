import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Photo1 from '../assets/p.webp'
import Photo2 from '../assets/photo1.webp'
import Photo3 from '../assets/photo2.webp'

gsap.registerPlugin(ScrollTrigger);

const images = [
    { id: 1, image: Photo1 },
    { id: 3, image: Photo2 },
    { id: 2, image: Photo3 },
    { id: 4, image: Photo1 },
    { id: 5, image: Photo3 },
    { id: 6, image: Photo1 },
    { id: 7, image: Photo2 },
    { id: 8, image: Photo3 },
    { id: 9, image: Photo1 },
    { id: 10, image: Photo2 },
    { id: 11, image: Photo3 },
    { id: 12, image: Photo1 },
    { id: 13, image: Photo2 },
    { id: 14, image: Photo3 },
    { id: 15, image: Photo1 },
];


const positions = [
    "top-10 left-10",
    "top-1/2 right-1 -translate-x-1/60 -translate-y-1/2",
    "top-130 left-130",
    // "top-20 right-32",
    // "bottom-20 left-40",
    // "top-1/4 left-1/4",
    // "bottom-1/4 right-1/4",
    // "top-32 left-[60%]",
    // "bottom-32 right-[60%]",
    // "top-[10%] left-[50%]",
    // "bottom-[10%] right-[50%]",
];



const ImageAnimation = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const groups = gsap.utils.toArray(".image-group");

            // Scroll-based vertical movement of all groups
            gsap.to(groups, {
                yPercent: -100 * (groups.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => "+=" + window.innerHeight * (groups.length - 1),
                    scrub: true,
                    pin: true,
                },
            });


        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const groups = [];
    for (let i = 0; i < images.length; i += 3) {
        groups.push(images.slice(i, i + 3));
    }

    return (
        <>
            <div className="w-full bg-black text-white overflow-x-hidden overflow-y-hidden">
                <section
                    ref={sectionRef}
                    className="relative w-full h-screen overflow-hidden"
                >
                    {/* Sticky Center Title */}
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-Playfair">
                            Our Best Captured Moments
                        </h1>
                    </div>

                    {/* Image Scroll Area */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                        {groups.map((group, index) => (
                            <div
                                key={index}
                                className="image-group relative w-full h-screen"
                            >
                                {group.map((img, idx) => (
                                    <img
                                        loading="lazy"
                                        key={img.id}
                                        src={img.image}
                                        alt={`Moment ${img.id}`}
                                        className={`absolute ${positions[(index * 3 + idx) % positions.length]} rounded-xl shadow-lg`}
                                        style={{
                                            width: "30%",
                                            height: "50%",
                                            objectFit: "cover",
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </>
    )
}

export default ImageAnimation