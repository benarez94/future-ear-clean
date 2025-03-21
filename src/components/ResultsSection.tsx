
import React from 'react';
import CircularProgress from './CircularProgress';
import { motion } from 'framer-motion';
import { CheckCircle, Award, ThumbsUp } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const results = [
    { 
      percentage: 100, 
      label: 'Customer Satisfaction', 
      description: "Perfect score from our verified customers",
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      percentage: 97, 
      label: 'Effectiveness Rate', 
      description: "Users report significant improvement",
      icon: <Award className="h-5 w-5" />
    },
    { 
      percentage: 96, 
      label: 'Recommend to Friends', 
      description: "Would recommend to friends and family",
      icon: <ThumbsUp className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Results
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold">Proven Performance</h2>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our product has consistently delivered exceptional results for our customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 w-10 h-10 rounded-full bg-medical/10 flex items-center justify-center text-medical">
                {result.icon}
              </div>
              <CircularProgress 
                percentage={result.percentage} 
                label={result.label} 
                size="lg"
              />
              <p className="mt-6 text-center text-gray-600">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
