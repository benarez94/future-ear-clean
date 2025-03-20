
import React from 'react';
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CircularProgressProps {
  percentage: number;
  label: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  label,
  color = "bg-medical",
  size = 'md',
  className,
}) => {
  // Size mappings
  const sizeMappings = {
    sm: {
      container: 'w-24 h-24',
      text: 'text-xl',
      labelText: 'text-xs',
    },
    md: {
      container: 'w-32 h-32',
      text: 'text-3xl',
      labelText: 'text-sm',
    },
    lg: {
      container: 'w-40 h-40',
      text: 'text-4xl',
      labelText: 'text-base',
    },
  };

  const selectedSize = sizeMappings[size];

  return (
    <motion.div 
      className={cn("relative flex flex-col items-center justify-center", className)}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={cn("relative rounded-full flex items-center justify-center", selectedSize.container)}>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className={cn("text-medical", color && `text-${color}`)}
            strokeWidth="10"
            strokeDasharray={`${percentage * 2.51327} 251.327`}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            style={{
              transformOrigin: 'center',
              transform: 'rotate(-90deg)',
            }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className={cn("font-bold", selectedSize.text)}>{percentage}%</span>
          <span className={cn("text-gray-600 mt-1", selectedSize.labelText)}>{label}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CircularProgress;
