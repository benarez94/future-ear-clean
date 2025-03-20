
import React from 'react';
import CircularProgress from './CircularProgress';
import { motion } from 'framer-motion';

const ResultsSection: React.FC = () => {
  const results = [
    { percentage: 100, label: 'Customer Satisfaction' },
    { percentage: 97, label: 'Effectiveness Rate' },
    { percentage: 96, label: 'Recommend to Friends' }
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
              <CircularProgress 
                percentage={result.percentage} 
                label={result.label} 
                size="lg"
              />
              <p className="mt-6 text-center text-gray-600">
                {result.percentage === 100 && "Perfect score from our verified customers"}
                {result.percentage === 97 && "Users report significant improvement"}
                {result.percentage === 96 && "Would recommend to friends and family"}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
