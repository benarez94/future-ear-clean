
import { motion } from 'framer-motion';
import { Camera, Wifi, BatteryFull, Smartphone, Shield, Zap } from 'lucide-react';

const ProductFeatures = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: 'HD 1080p Camera',
      description: 'Visualize the inside of your ears with exceptional clarity thanks to our high-definition camera technology.'
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Wireless Connection',
      description: 'Transmit real-time images to your smartphone or tablet via secure Wi-Fi connection.'
    },
    {
      icon: <BatteryFull className="h-6 w-6" />,
      title: 'Long-lasting Battery',
      description: 'Up to 2 hours of continuous use on a single charge, enough for multiple uses.'
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: 'Dedicated App',
      description: 'Control the camera, record videos and take photos directly from our intuitive application.'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Secure Tips',
      description: 'Designed to prevent insertion too deep, the tips offer completely safe use.'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'LED Lighting',
      description: 'Six integrated adjustable LEDs allow perfect visibility even in the darkest areas.'
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
    <section id="product" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="px-3 py-1 rounded-full bg-medical/10 text-medical text-sm font-medium">
            Features
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Revolutionary Technology</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the exceptional features that make our product the most advanced ear cleaner on the market.
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
                alt="VisioEar in detail" 
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
                  <h4 className="font-semibold text-gray-900">HD Camera</h4>
                  <p className="text-sm text-gray-600">Clear and precise image for perfect visualization</p>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">VisioEar Connect App</h3>
              <p className="text-gray-600 max-w-lg">
                Our free app allows you to view, record and share images with your doctor if necessary. Download it now on App Store or Google Play.
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
