
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, CreditCard } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Livraison rapide',
      description: 'Expédition sous 24h'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Garantie 1 an',
      description: 'Satisfaction assurée'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Support 24/7',
      description: 'À votre service'
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: 'Paiement sécurisé',
      description: 'Transactions cryptées'
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
              <div className="w-12 h-12 rounded-full bg-medical/10 flex items-center justify-center text-medical mb-4">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{badge.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
