
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <motion.div 
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img 
        src="/images/visioear-logo.png" 
        alt="VisioEar Logo" 
        className={`${sizeClasses[size]} w-auto`}
      />
    </motion.div>
  );
};

export default Logo;
