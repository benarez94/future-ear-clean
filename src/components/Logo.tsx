
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
      <svg 
        className={`${sizeClasses[size]} w-auto`}
        viewBox="0 0 400 100" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="VisioEar Logo"
      >
        {/* Ear Shape with Gradient */}
        <defs>
          <linearGradient id="earGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3a86ff" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <g>
          {/* Stylized Ear */}
          <path d="M60,20 C40,20 25,35 25,60 C25,85 40,95 55,95 C70,95 80,85 80,75 C80,68 75,65 70,65 C65,65 60,68 60,75 C60,80 65,82 65,82" 
                fill="none" stroke="url(#earGradient)" strokeWidth="12" strokeLinecap="round" />
          
          {/* Camera/Eye Element */}
          <circle cx="50" cy="55" r="10" fill="white" />
          <circle cx="50" cy="55" r="5" fill="url(#earGradient)" />
          <circle cx="47" cy="52" r="2" fill="white" />
          
          {/* Text - VisioEar */}
          <text x="100" y="60" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#2563eb">VisioEar</text>
          
          {/* Tagline */}
          <text x="100" y="80" fontFamily="Arial, sans-serif" fontSize="14" fill="#64748b">Advanced Ear Care</text>
        </g>
      </svg>
    </motion.div>
  );
};

export default Logo;
