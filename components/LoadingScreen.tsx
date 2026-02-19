'use client';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      <div className="flex flex-col items-center">
        {/* Logo Berdenyut */}
        <motion.div
          className="w-16 h-16 bg-orange-500 rounded-2xl mb-4"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 90],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.p
          className="text-orange-500 font-bold tracking-[0.5em] text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          LOADING...
        </motion.p>
      </div>
    </motion.div>
  );
}