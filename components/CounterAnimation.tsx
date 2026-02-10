import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';

interface CounterAnimationProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    decimals?: number;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    className = '',
    decimals = 0
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [displayValue, setDisplayValue] = useState(0);

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0
    });

    useEffect(() => {
        if (isInView) {
            spring.set(end);
        }

        const unsubscribe = spring.on('change', (latest) => {
            setDisplayValue(latest);
        });

        return () => unsubscribe();
    }, [isInView, end, spring]);

    const formattedValue = decimals > 0
        ? displayValue.toFixed(decimals)
        : Math.floor(displayValue).toLocaleString();

    return (
        <span ref={ref} className={className}>
            {prefix}{formattedValue}{suffix}
        </span>
    );
};

export default CounterAnimation;
