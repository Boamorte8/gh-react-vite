import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

export function LocationProvider({ children }: { children: ReactNode }) {
  return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
}
