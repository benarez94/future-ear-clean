
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    {
      id: "fast-delivery",
      title: "Fast Delivery",
      subtitle: "Shipped within 24h",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 19C9.10457 19 10 18.1046 10 17C10 15.8954 9.10457 15 8 15C6.89543 15 6 15.8954 6 17C6 18.1046 6.89543 19 8 19Z" fill="white"/>
          <path d="M16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19Z" fill="white"/>
          <path d="M10.05 17H14V6.5C14 5.67 13.33 5 12.5 5H3V17H6.05C6.05 17.05 6.05 17.05 6.05 17.1C6.05 17.05 6.05 17.05 6.05 17Z" fill="white"/>
          <path d="M14 17H16C16 17.05 16 17.05 16 17.1C16 17.05 16 17.05 16 17Z" fill="white"/>
          <path d="M22 15V11L18.3 7H14V17L14.64 15.36C14.82 15.14 15.07 15 15.33 15H21C21.55 15 22 15.45 22 16V17H18.92C18.97 17.33 18.97 17.67 18.92 18H22C22.55 18 23 17.55 23 17V16C23 15.45 22.55 15 22 15Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "warranty",
      title: "1 Year Warranty",
      subtitle: "Satisfaction guaranteed",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
          <path d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1ZM12 21C7 21 3 17 3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21Z" fill="white"/>
          <path d="M12 5C8.13 5 5 8.13 5 12H7C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17V19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "support",
      title: "24/7 Support",
      subtitle: "At your service",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="white"/>
          <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="white"/>
        </svg>
      )
    },
    {
      id: "secure-payment",
      title: "Secure Payment",
      subtitle: "Encrypted transactions",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" fill="white"/>
          <path d="M6 14H12V16H6V14Z" fill="white"/>
          <path d="M14 14H16V16H14V14Z" fill="white"/>
        </svg>
      )
    }
  ];
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              className="glass-card rounded-2xl p-5 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-3">
                <div className="w-10 h-10">
                  {badge.icon}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">{badge.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{badge.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
