
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6">VisioEar</h3>
            <p className="text-gray-400 mb-6">
              Transformez votre hygiène auriculaire avec notre produit révolutionnaire. Visualisez et nettoyez vos oreilles en toute sécurité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-medical transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-medical transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-medical transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {['Accueil', 'Produit', 'Témoignages', 'FAQ', 'Contact', 'Livraison'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold mb-6">Informations</h4>
            <ul className="space-y-3">
              {[
                'Mentions légales',
                'Politique de confidentialité',
                'Conditions générales de vente',
                'Remboursements',
                'Garantie'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-medical flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Boulevard Victor Hugo, 75016 Paris, France</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-medical flex-shrink-0" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-medical flex-shrink-0" />
                <span className="text-gray-400">contact@visioear.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} VisioEar. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <img src="/images/payment-visa.png" alt="Visa" className="h-8" />
              <img src="/images/payment-mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/images/payment-paypal.png" alt="PayPal" className="h-8" />
              <img src="/images/payment-apple.png" alt="Apple Pay" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
