'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
    speed?: number; // Added to match LogoCloud usage if needed, though LogoCloud uses duration/speed differently in provided code. 
    // Wait, the LogoCloud code uses `speed={80}` but the InfiniteSlider definition provided uses `duration`.
    // I need to check the logic. The provided LogoCloud calls <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
    // But the provided InfiniteSlider props are: gap, duration, durationOnHover, direction, reverse.
    // It seems the user provided incompatible snippets or I need to adapt.
    // I will check the LogoCloud provided code again. 
    // LogoCloud: <InfiniteSlider gap={42} reverse speed={80} speedOnHover={25}>
    // InfiniteSlider Definition: function InfiniteSlider({ ... duration = 25 ... })
    // It seems `speed` in LogoCloud maps to `duration` in InfiniteSlider? Or the provided InfiniteSlider is a different version.
    // I will adapt InfiniteSlider to accept `speed` alias or update LogoCloud to use `duration`. 
    // Let's stick to the InfiniteSlider implementation provided and update LogoCloud usage to match it.
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentDuration, setCurrentDuration] = useState(duration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration:
                    currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return controls?.stop;
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse,
    ]);

    const hoverProps = durationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(durationOnHover);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(duration);
            },
        }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className='flex w-max'
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
