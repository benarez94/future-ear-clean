
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24">
      <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] bg-repeat opacity-5"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
                Technologie innovante
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nettoyage d'oreilles<br />
              <span className="text-gradient">nouvelle génération</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Une caméra HD intégrée pour visualiser et nettoyer vos oreilles en toute sécurité. Connectée à notre application, suivez le processus en temps réel.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#produit"
                className="button-shine px-8 py-4 bg-medical text-white rounded-full font-medium flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir le produit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#demonstration"
                className="px-8 py-4 border border-medical/30 text-medical rounded-full font-medium flex items-center justify-center hover:bg-medical/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir la démonstration
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {['Sécuritaire', 'Facile à utiliser', 'HD 1080p'].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative product-shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="absolute top-1/4 -left-16 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-subtle"></div>
            <div className="absolute bottom-1/4 -right-16 w-32 h-32 bg-medical rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
            
            <motion.img
              src="/images/product-main.png"
              alt="VisioEar - Nettoyeur d'oreilles avec caméra HD"
              className="w-full h-auto max-w-md mx-auto animate-float"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              loading="lazy"
            />
            
            <motion.div 
              className="absolute top-0 left-0 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/60"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <img src="/images/app-screen-1.jpg" alt="Application mobile" className="w-28 h-auto rounded-lg" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-10 right-0 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/60"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <img src="/images/app-screen-2.jpg" alt="Visualisation HD" className="w-28 h-auto rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default HeroSection;
