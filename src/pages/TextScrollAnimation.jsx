import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
    "Capture your most cherished moments with our expert photography services for weddings, pre-weddings, and special events.",
    "Every Click Tells a Story",
    "From romantic pre-wedding shoots to grand wedding celebrations, we turn memories into timeless visual stories.",
    "Your Love. Our Lens. Perfect Shots.",
];
const TextScrollAnimation = () => {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <>
            <section ref={sectionRef} className="h-[300vh] bg-black text-gray-950 relative">
                <div className="sticky top-0 h-screen flex  p-15">
                    <div className="space-y-15 w-full font-Nothing">
                        {lines.map((line, index) => {
                            const start = index * 0.15;
                            const end = start + 0.2;

                            const color = useTransform(
                                scrollYProgress,
                                [start, end],
                                ["#3b3b3b", "#ffffff"]
                            );

                            return (
                                <motion.p
                                    key={index}
                                    style={{ color }}
                                    className="text-3xl md:text-5xl font-bold"
                                >
                                    {line}
                                </motion.p>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TextScrollAnimation