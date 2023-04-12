import { MotionConfig, motion } from 'framer-motion';
import { ReactNode } from 'react';

const routeVariants = {
  initial: {
    y: '100vh'
  },
  final: {
    y: '0vh',
    transition: {
      type: 'spring',
      mass: 0.4,
    },
  }
};

export function RouteAnimation({ classId, children }: { classId: string, children: ReactNode }) {
  return (
    <MotionConfig transition={{ duration: 4 }}>
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className={`${classId} component`}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
