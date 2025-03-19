
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    {
      image: "/images/fast-delivery-badge.png",
      alt: "Fast Delivery",
    },
    {
      image: "/images/warranty-badge.png",
      alt: "1 Year Warranty",
    },
    {
      image: "/images/support-badge.png",
      alt: "24/7 Support",
    },
    {
      image: "/images/secure-payment-badge.png",
      alt: "Secure Payment",
    }
  ];
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-5 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img 
                src={badge.image} 
                alt={badge.alt} 
                className="h-20 w-auto object-contain mb-2"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
