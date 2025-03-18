
import { motion } from 'framer-motion';
import { Play, ArrowRight, MonitorSmartphone } from 'lucide-react';
import { useState } from 'react';

const ProductDemo = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const steps = [
    {
      title: "Connectez l'appareil",
      description: "Allumez le VisioEar et connectez-le à votre téléphone via notre application dédiée.",
      image: "/images/step-connect.jpg",
    },
    {
      title: "Visualisez",
      description: "Insérez délicatement l'embout et observez l'intérieur de votre oreille en temps réel.",
      image: "/images/step-view.jpg",
    },
    {
      title: "Nettoyez en toute sécurité",
      description: "Utilisez l'embout adapté pour éliminer le cérumen en toute sécurité.",
      image: "/images/step-clean.jpg",
    }
  ];
  
  return (
    <section id="demonstration" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Démonstration
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Comment fonctionne VisioEar</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Une utilisation simple et efficace pour un nettoyage en profondeur et en toute sécurité
          </p>
        </motion.div>

        <div className="relative mb-20">
          <motion.div
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-w-16 aspect-h-9 relative bg-gray-900">
              {!isVideoPlaying ? (
                <>
                  <img 
                    src="/images/video-thumbnail.jpg" 
                    alt="Vidéo de démonstration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-20 h-20 rounded-full bg-medical text-white flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </motion.button>
                  </div>
                </>
              ) : (
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Démonstration du produit VisioEar"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              )}
            </div>
          </motion.div>
          
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="mt-20">
          <motion.h3
            className="text-2xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Trois étapes simples
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-medical text-white flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-4 transform translate-x-full">
                    <ArrowRight className="h-8 w-8 text-medical/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-20 rounded-3xl glass-card p-8 md:p-12 border border-white/60"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <div className="flex items-center mb-4">
                <MonitorSmartphone className="h-6 w-6 text-medical mr-2" />
                <h3 className="text-2xl font-bold">Compatible avec tous les appareils</h3>
              </div>
              <p className="text-gray-600">
                Notre application est disponible sur iOS et Android. Vous pouvez visualiser vos oreilles sur votre smartphone ou tablette en quelques clics.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <img src="/images/device-iphone.png" alt="iPhone" className="h-20" />
              <img src="/images/device-android.png" alt="Android" className="h-20" />
              <img src="/images/device-ipad.png" alt="iPad" className="h-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDemo;
