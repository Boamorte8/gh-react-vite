import { MotionConfig, motion } from 'framer-motion';
import { ReactNode } from 'react';

const childVariants = {
  initial: {
    opacity: 0,
    y: '50px',
  },
  final: {
    opacity: 1,
    y: '0px',
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export function AnimatedTitle({ className = '', children }: { className?: string, children: ReactNode }) {
  return (
    <MotionConfig transition={{ duration: 4 }}>
      <motion.h1
        variants={childVariants}
        initial="initial"
        animate="final"
        className={className}
      >
        {children}
      </motion.h1>
    </MotionConfig>
  );
}
