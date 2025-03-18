
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Timer, Check, AlertTriangle } from 'lucide-react';

const SpecialOffer = () => {
  const [time, setTime] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        const newMinutes = newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes;
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours;
        
        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (value: number) => {
    return value.toString().padStart(2, '0');
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-medical overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="rounded-3xl bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-red-500 text-white text-sm font-medium mb-4">
                Offre spéciale limitée
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Offrez-vous une hygiène auriculaire professionnelle
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ne manquez pas cette occasion d'acquérir votre VisioEar à un prix exceptionnel. Commandez maintenant et bénéficiez de 33% de réduction !
              </p>
              
              <div className="flex items-center space-x-2 mb-8">
                <Timer className="h-6 w-6 text-red-500" />
                <span className="text-red-500 font-medium">Cette offre expire dans :</span>
              </div>
              
              <div className="flex space-x-4 mb-8">
                {[
                  { value: time.hours, label: 'Heures' },
                  { value: time.minutes, label: 'Minutes' },
                  { value: time.seconds, label: 'Secondes' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gray-900 text-white rounded-xl flex items-center justify-center text-2xl font-bold">
                      {formatTime(item.value)}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 mb-8">
                {[
                  'Produit certifié CE',
                  'Garantie 1 an incluse',
                  'Livraison express offerte',
                  '3 embouts différents inclus',
                  'Application gratuite iOS & Android'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-start space-x-2 text-sm text-gray-500 mb-4">
                <AlertTriangle className="h-4 w-4" />
                <span>Il ne reste que 7 produits en stock à ce prix !</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-inner">
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <img 
                    src="/images/product-package.png" 
                    alt="VisioEar - Pack complet" 
                    className="w-64 h-64 object-contain mx-auto"
                    loading="lazy"
                  />
                  <div className="absolute top-0 -right-4 w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold transform rotate-12">
                    -33%
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <span className="text-2xl text-gray-400 line-through">59,90€</span>
                  <span className="text-4xl font-bold text-medical">39,90€</span>
                </div>
                
                <motion.button
                  className="button-shine w-full py-4 px-8 bg-medical text-white rounded-xl font-semibold text-lg transition-all duration-300 mb-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ajouter au panier
                </motion.button>
                
                <div className="flex items-center justify-center mb-6">
                  <img src="/images/payment-methods.png" alt="Méthodes de paiement" className="h-8" />
                </div>
                
                <div className="text-center text-sm text-gray-500">
                  <p>Livraison gratuite & remboursement sous 30 jours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;
