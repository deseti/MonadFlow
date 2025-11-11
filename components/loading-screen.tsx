"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target } from "lucide-react";

/**
 * Loading screen with animations
 */
export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-20 h-20 mx-auto mb-6 relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-monad-purple via-monad-blue to-monad-cyan opacity-20 blur-xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-monad-purple via-monad-blue to-monad-cyan" />
          <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold gradient-text mb-2"
        >
          MonadFlow
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400"
        >
          Loading 3D Experience...
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-monad-purple via-monad-blue to-monad-cyan rounded-full mt-6 max-w-xs mx-auto"
        />
      </motion.div>
    </div>
  );
}
