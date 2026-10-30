import React, { ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  className = '',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  const getInitial = () => {
    switch (direction) {
      case 'up':    return { opacity: 0, y: 48,  x: 0,   filter: 'blur(4px)' };
      case 'down':  return { opacity: 0, y: -48, x: 0,   filter: 'blur(4px)' };
      case 'left':  return { opacity: 0, x: -64, y: 0,   filter: 'blur(4px)' };
      case 'right': return { opacity: 0, x: 64,  y: 0,   filter: 'blur(4px)' };
      case 'none':  return { opacity: 0,                  filter: 'blur(2px)' };
    }
  };

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
    : getInitial();

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={animate}
      transition={{
        duration,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
