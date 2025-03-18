
import { motion } from 'framer-motion';
import { Camera, Wifi, BatteryFull, Smartphone, Shield, Zap } from 'lucide-react';

const ProductFeatures = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'Caméra HD 1080p',
      description: 'Visualisez l\'intérieur de vos oreilles avec une clarté exceptionnelle grâce à notre technologie de caméra haute définition.'
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Connexion sans fil',
      description: 'Transmettez des images en temps réel à votre smartphone ou tablette via la connexion Wi-Fi sécurisée.'
    },
    {
      icon: <BatteryFull className="h-6 w-6" />,
      title: 'Batterie longue durée',
      description: 'Jusqu\'à 2 heures d\'utilisation continue avec une seule charge, suffisant pour plusieurs utilisations.'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Application dédiée',
      description: 'Contrôlez la caméra, enregistrez des vidéos et prenez des photos directement depuis notre application intuitive.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Embouts sécurisés',
      description: 'Conçus pour éviter toute insertion trop profonde, les embouts offrent une utilisation en toute sécurité.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Éclairage LED',
      description: 'Six LED ajustables intégrées permettent une visibilité parfaite même dans les zones les plus sombres.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="produit" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Caractéristiques
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Une technologie révolutionnaire</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les caractéristiques exceptionnelles qui font de notre produit le nettoyeur d'oreilles le plus avancé du marché.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 mt-12 mb-20">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-subtle"></div>
            <div className="relative z-10">
              <img 
                src="/images/product-closeup.png" 
                alt="VisioEar en détail" 
                className="w-full h-auto rounded-3xl shadow-xl"
                loading="lazy"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-lg max-w-xs"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-medical/10 flex items-center justify-center text-medical flex-shrink-0">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Caméra HD</h4>
                  <p className="text-sm text-gray-600">Image claire et précise pour une visualisation parfaite</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-medical/10 flex items-center justify-center text-medical mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="rounded-3xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Application VisioEar Connect</h3>
              <p className="text-gray-600 max-w-lg">
                Notre application gratuite vous permet de visualiser, d'enregistrer et de partager des images avec votre médecin si nécessaire. Téléchargez-la dès maintenant sur App Store ou Google Play.
              </p>
            </div>
            <div className="flex space-x-4">
              <img src="/images/app-store-badge.png" alt="App Store" className="h-12" />
              <img src="/images/google-play-badge.png" alt="Google Play" className="h-12" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFeatures;
