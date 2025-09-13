"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type AnimatedQROwlProps = {
  size?: number;
  intensity?: number;
};

export default function AnimatedQROwl({
  size = 320,
  intensity = 0.2,
}: AnimatedQROwlProps) {
  const [modules, setModules] = useState<Array<{ x: number; y: number; delay: number; duration: number }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Generate random modules with collision detection
    const moduleSize = 12; // w-3 h-3 = 12px
    const padding = 4; // Extra space between modules
    const minDistance = moduleSize + padding;
    const centerRadius = size / 4; // Keep modules away from center owl area
    
    const randomModules = [];
    const maxAttempts = 1000; // Prevent infinite loops
    
    for (let i = 0; i < 40; i++) {
      let attempts = 0;
      let validPosition = false;
      let x, y;
      
      while (!validPosition && attempts < maxAttempts) {
        x = Math.random() * (size - moduleSize);
        y = Math.random() * (size - moduleSize);
        
        // Check if position is too close to center (owl area)
        const centerX = size / 2;
        const centerY = size / 2;
        const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        
        if (distanceFromCenter < centerRadius) {
          attempts++;
          continue;
        }
        
        // Check collision with existing modules
        validPosition = true;
        for (const existingModule of randomModules) {
          const distance = Math.sqrt((x - existingModule.x) ** 2 + (y - existingModule.y) ** 2);
          if (distance < minDistance) {
            validPosition = false;
            break;
          }
        }
        
        attempts++;
      }
      
      if (validPosition) {
        randomModules.push({
          x,
          y,
          delay: i * 0.05,
          duration: 2 + Math.random() * 2,
        });
      }
    }
    
    setModules(randomModules);
  }, [size]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* QR-like modules - only render on client */}
      {isClient && modules.map((module, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-brand-blue rounded-sm"
          style={{ left: module.x, top: module.y }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: module.duration,
            repeat: Infinity,
            delay: module.delay,
          }}
        />
      ))}

      {/* Center owl */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Image
          src="/WizeQrLogo.png"
          alt="WozWize Owl"
          width={size / 2}
          height={size / 2}
          priority
          className="drop-shadow-[0_0_20px_rgba(58,163,255,0.6)]"
        />
      </motion.div>
    </div>
  );
}
