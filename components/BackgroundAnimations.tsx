import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations: React.FC = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Generate random positions for floating elements
    const floatingElements = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        size: 20 + Math.random() * 40
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Floating Leaves */}
            {floatingElements.slice(0, 6).map((element) => (
                <motion.div
                    key={`leaf-${element.id}`}
                    className="absolute"
                    style={{
                        left: `${element.x}%`,
                        top: '-10%',
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [0, Math.sin(element.id) * 50, 0],
                        rotate: [0, 360],
                        opacity: [0, 0.3, 0.3, 0]
                    }}
                    transition={{
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    <svg
                        width={element.size}
                        height={element.size}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2C12 2 7 4 7 12C7 16 9 20 12 22C15 20 17 16 17 12C17 4 12 2 12 2Z"
                            fill="#556b2f"
                            opacity="0.4"
                        />
                        <path
                            d="M12 2L12 22"
                            stroke="#2d3a2d"
                            strokeWidth="1"
                            opacity="0.6"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Floating Fabric Threads */}
            {floatingElements.slice(6, 9).map((element) => (
                <motion.div
                    key={`thread-${element.id}`}
                    className="absolute"
                    style={{
                        left: `${element.x}%`,
                        top: '-5%',
                    }}
                    animate={{
                        y: ['0vh', '105vh'],
                        rotate: [0, 180, 360],
                        opacity: [0, 0.2, 0.2, 0]
                    }}
                    transition={{
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    <div
                        style={{
                            width: '2px',
                            height: `${element.size * 2}px`,
                            background: 'linear-gradient(180deg, transparent, #d7bfa2, transparent)',
                        }}
                    />
                </motion.div>
            ))}

            {/* Floating Recycling Symbols */}
            {floatingElements.slice(9, 12).map((element) => (
                <motion.div
                    key={`recycle-${element.id}`}
                    className="absolute"
                    style={{
                        left: `${element.x}%`,
                        top: '-10%',
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        rotate: [0, -360],
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0, 0.15, 0.15, 0]
                    }}
                    transition={{
                        duration: element.duration,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    <svg
                        width={element.size}
                        height={element.size}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                            fill="#2d3a2d"
                            opacity="0.3"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2d3a2d" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Organic Blob Animations */}
            <motion.div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(85,107,47,0.1) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />

            <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(215,191,162,0.1) 0%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </div>
    );
};

export default BackgroundAnimations;
